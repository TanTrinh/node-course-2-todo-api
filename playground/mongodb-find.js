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

  //Query all the document in Todos.
  // db.collection('Todos').find().toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  //Query ObjectID must use "new ObjectID('...')", if not query _id then no
  //need to use "new ObjectID".
  // db.collection('Todos').find({
  //   _id: new ObjectID('5aa63a0105e2e3cb95ee878c')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  //cursor "count" use to count the doc in collection.
  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  db.collection('Users').find({name: "Tan"}).toArray().then((docs) => {
    console.log('Users');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch users', err);
  });

  //db.close();
});
