//mongo client lets us connect to mongo server and issue commands...

// const MongoClient = require("mongodb").MongoClient;
   const {MongoClient , ObjectID} = require("mongodb");
   var obj = new ObjectID();
   console.log(obj);
//how to destructure an object
/*var user = {name:'shoaib', age:22};
var {name} = user;
console.log(name);*/


MongoClient.connect('mongodb://localhost:27017/TodoApp' , (err , db) => {
    if(err){
       return console.log('Unable to connect to MongoDB server');
    }
    
    console.log('connected to MongoDB server');
    
/*    db.collection('todos').insertOne({
        text: 'something to do',
        completed: false
    } , ( err , result ) => {
         if(err){
            return console.log('unable to insert a todo' , err); 
         }
         console.log(JSON.stringify(result.ops , undefined , 2)); 
    });*/
    
    
/*    db.collection('users').insertOne({
        name: 'Shoaib',
        age: 22,
        location: 'Pindi Boy'
    } , ( err , result) => {
        if(err){
           return console.log('Error in inserting a user todo');
        }
        
        console.log(JSON.stringify(result.ops , undefined , 2);
        console.log(result.ops[0]._id.getTimestamp());
        
    });*/
    
    db.close();
});