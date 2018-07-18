const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url, (err, db)=>{

   
    if(err){
        return console.log('Unable to connect');
    }
    console.log('connected');

    db.collection('Todos').insertOne({
        text: 'some text here',
        completed: false
    }, (err, result)=>{
        if(err){
            console.log('Unable to insert');
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    db.collection('secondCollection').insertOne({
        text : 'I did it',
        flag: true   
    }, (err, result)=>{
        if(err){
            return console.log('error', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });
    db.close();
});