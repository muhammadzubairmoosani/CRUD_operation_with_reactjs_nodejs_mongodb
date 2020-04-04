const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todo = new Schema({
  name: {
    type: String,
    required: [true, "Name field is required!"]
  },
  age: {
    type: Number,
    required: [true, "Age field is required!"]
  }
});

const todoSchema = mongoose.model("todos", todo);
module.exports = todoSchema;
