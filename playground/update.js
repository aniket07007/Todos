const {MongoClient , ObjectID} = require('mongodb');

const url = 'mongodb://127.0.0.1:27017/TodoApp'

MongoClient.connect(url , (err, db)=>{

    if(err){
        return console.log('Erorr: ');
    }
    //  db.collection('Todos').findOneAndUpdate({_id: new ObjectID('5b40e8ca9174b910d0e765fb')}, {$set: {completed: true}}, {returnOriginal: false})
    //  .then((docs)=>{
    //      console.log(docs)
    //  });
    
       db.collection('Todos').findOneAndUpdate({_id : new ObjectID('5b4eda9d2380a43857621ad1')}, {$inc: {age: 1}}).then((res)=>{
           console.log(res)
       }, {returnOriginal : false})

        db.close();
});
