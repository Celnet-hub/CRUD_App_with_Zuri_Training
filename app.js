//importing dependencies
const express = require("express");
const { MongoClient } = require("mongodb");
const bodyParser = require("body-parser");
const myDBconnection = require("./config/db.js");
const { toUpperCase } = require("./config/db.js");
require("dotenv").config();

//initialize app as an instance of express.
const app = express();

//connect to the database
MongoClient.connect(
  myDBconnection,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, database) => {
    if (err) {
      console.error(err);
    } else {
      console.log("database connection has been established");
    }

      const db = database.db('myProfile');
      
    // const CRUDops = require("./routes");
    // CRUDops(app, db);
      require('./routes/Ops').CRUD(app,db)
  }
);

const port = process.env.Port;
app.listen(port, () => {
  console.log(`My server is running on port ${port}`);
});
