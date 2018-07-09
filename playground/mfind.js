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
    
    // db.collection.("todos").find()   return a cursor
   // db.collection.("todos").find().toArray()   return an array of docs
  // db.collection.("todos").find().toArray().then()   2 or more docs return a promise
    
  //db.collection("todos").find().toArray().then( (docs) => {
 //db.collection("todos").find({completed: false}).toArray().then( (docs) => {   
/*db.collection("todos").find({_id : new ObjectID('5b4054eecbae581a7c1fb154')}).toArray().then( (docs) => {       
       console.log(JSON.stringify(docs , undefined , 2));
  } , (error) => {
        console.log("Unable to find the docs");
  });*/
    
/*    db.collection("todos").find().count().then( (count) => {       
       console.log('Docs Count' , + count);
  } , (error) => {
        console.log("Unable to find the docs");
  });*/
    
    
 db.collection("users").find({name:"Shoaib"}).toArray().then( (docs) => {       
       console.log(JSON.stringify(docs , undefined , 2));
  } , (error) => {
        console.log("Unable to find the docs");
  });
    
    
    db.close();
});