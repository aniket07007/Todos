// const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb');

const url = 'mongodb://127.0.0.1:27017/TodoApp';
MongoClient.connect(url, (err, db) => {
       if(err){
           return console.log('Error1')
       }
// var cursor = db.collection('Todos').find({_id : new ObjectID ('5b4d6bdd1f20a81954fd6747')}).toArray().then(
//     (docs)=>
//     {
//         console.log(JSON.stringify(docs,undefined, 1)), (err)=>
//         {console.log(err)}})

     
 db.collection('secondCollection').deleteOne();
 db.close();
    }
)