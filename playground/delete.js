// const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb');

const url = 'mongodb://127.0.0.1:27017/TodoApp';
MongoClient.connect(url, (err, db) => {
       if(err){
           return console.log('Error1')
       }

     
//  db.collection('Todos').findOneAndDelete({flag: false}).then((docs)=>{
//      console.log(docs)
//  });

    db.collection('Todos').deleteMany({text: 'Hello'}).then((docs)=>{
        console.log(docs)
    })
    db.collection('Todos').deleteOne({_id: new ObjectID('5b40e87a8c78d11cfcdfe31f')}).then((docs)=>{
        console.log(docs)
    })
 db.close();
    })