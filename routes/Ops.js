//This modules handles all CRUD operations

let objectID = require("mongodb").ObjectID;

function CRUD(app, db) {
  //CREATE
  app.put("/", (req, res) => {
    //do something
    const note = {
      Name: "Chidubem Nwabuisi",
      // Name: req.body.Name,
      // Email: req.body.Email,
      // Country: req.body.Country
    };
    db.collection("user profile").insertOne(note, (err, data) => {
      if (err) {
        console.error(err);
      } else {
        res.send(data.ops[0]);
      }
    });
  });

  //READ
  app.get("/profile/:id", (req, res) => {
    //do something
    const id = req.params.id;
    const details = { _id: new ObjectID(id) }; //items to be read.

    //create a collection and name it 'my notes'
    db.collection("user profile").findOne(details, (err, item) => {
      if (err) {
        res.send({ error: "An error has occurred" });
      } else {
        res.send(item);
      }
    });
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

module.exports = function (app, db) {
  CRUD(app, db);
};
