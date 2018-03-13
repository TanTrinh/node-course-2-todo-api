//const MongoClient = require('mongodb').MongoClient; --this line similar like below
const {MongoClient, ObjectID} = require('mongodb');

//Use ObjectID create ID like mongodb randomly create ID, Ex below.
// var obj = new ObjectID();
// console.log(obj);

//Example about object destructuring below
// var user = {name: 'Tan', age: 22};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID("5aa76930051b8569cacea77c")
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });


  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("5a982c224c857907d0da4516")
  }, {
    $set: {
      name: 'Tan Trinh'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result)
  });
  //db.close();
});
