// const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb');

const url = 'mongodb://127.0.0.1:27017/TodoApp';
MongoClient.connect(url, (err, db) => {
       if(err){
           return console.log('Error1')
       }

    //    db.collection('Todos').insertOne({text: 'Hello', flag: true}, (err, result)=>{
    //        if(err){
    //              return console.log('Unable to insert');
    //        }
    //        console.log(JSON.stringify(result.ops, undefined, 2));

    //    })
    //    console.log('Inserted');

    db.collection('Users').insertOne({name: 'Aniket', age:20}, (err, result)=>{
         if (err) {
             return console.log('Error')
         }
         console.log(JSON.stringify(result.ops, undefined, 2));
    })
       db.close();
})