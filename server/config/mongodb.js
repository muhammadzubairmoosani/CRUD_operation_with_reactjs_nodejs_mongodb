const mogoose = require("mongoose");

const db_url =
  "mongodb+srv://todo:todo@cluster0-imnne.mongodb.net/teachers?retryWrites=true&w=majority";

mogoose.connect(db_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = mogoose;
