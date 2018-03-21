const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

//Todo.findOneAndRemove
//Todo.findByIdAndRemove
//2 lines above work the same, both return the doc.

Todo.findByIdAndRemove('5ab21d2839ed4a5c9c90091b').then((todo) => {
  console.log(todo);
});
