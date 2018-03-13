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

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) => {
  //   console.log(result);
  // });
  // db.collection('Users').deleteMany({name: 'Tan'}).then((result) => {
  //   console.log(result);
  // });

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });
  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('5a99166c772ab0228c8beb91')
  }).then((result) => {
    console.log(result);
  });

  //db.close();
});
