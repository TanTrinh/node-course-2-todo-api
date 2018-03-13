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

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if(err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name: 'Tan',
  //   age: 22,
  //   location: 'Nguyen Van Nguyen'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert user', err);
  //   }
  //
  //   console.log(result.ops);
  // });

  db.close();
});
