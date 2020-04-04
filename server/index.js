const express = require("express");
const app = express();
const port = process.env.port || 5000;
const mongodb = require("./config/mongodb");
const cors = require("cors");

// mongodb connection open once
mongodb.connection.once("open", () => {
  console.log("database is connected!");
});

// allow cross-origin request
app.use(cors());

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Credentials", "true");
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET,HEAD,OPTIONS,POST,PUT,DELETE"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
//   );
//   res.setHeader("Cache-Control", "no-cache");
//   next();
// });

// parses to json
app.use(express.json());

// test meddleware
app.get("/test", (req, res) => {
  res.send({ msg: "server Is running..." });
});

// routes meddleware
app.use("/", require("./routes"));

// error handling
app.use("/", (err, req, res, next) => {
  res.send({ error: err.message });
});

// listening server port
app.listen(port, () => {
  console.log(`Server is listing on port ${port}`);
});
