//This modules handles all CRUD operations

let objectID = require("mongodb").ObjectID;

function CRUD(app, db) {
  //CREATE
  app.post("https://git.heroku.com/glacial-stream-35995.git/", (req, res) => {
    //do something
      const note = {
          Name: req.body.Name,
          Email: req.body.Email,
          Country: req.body.Country
      };
      db.collection("user profile").insertOne(note, (err, data) => {
          if (err) {
              console.error(err)
          } else {
              res.send(data.ops[0]);
          }
      })
  });

  //READ
  app.get("/profile", (req, res) => {
    //do something
  });

  //UPDATE
  app.put("/update-profile", (req, res) => {
    //do something
  });

  //DELETE
  app.delete("/del-items", (req, res) => {
    //do something
  });
}

module.exports = CRUD(app, db);
