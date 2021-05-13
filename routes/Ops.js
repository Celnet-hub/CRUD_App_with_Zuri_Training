const express = require("express");
const router = express.Router();

/**
 * Define the CRUD operations
 *
 * first: require database schema
 * Second define the different C R U D operations.
 */

const User = require("../model/model.js");

//C = CREATE Ops
router.post("/", (req, res) => {
  //retrieve data from the body of a post request
  let data = req.body.data;
  User.create(
    {
      fullName: data.fullName,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      country: data.country,
      institute: data.institute,
    },
    (err, newUser) => {
      if (err) {
        return res.status(500).json({ message: err });
      } else {
        return res
          .status(200)
          .json({ message: "User added to the Database", newUser });
      }
    }
  );
  console.log({ data });
});

//R = READ ops
router.get("/user-profile", (req, res) => {
  //find every user in the database
  User.find({}, (err, userProfile) => {
    if (err) {
      return res.status(500).json({ message: err });
    } else {
      return res.status(200).json({ userProfile });
    }
  });
});

router.get("/user-profile/:firstName", (req, res) => {
  //find one user in the database
  User.findOne({ firstName: req.params.firstName }, (err, userProfile) => {
    if (err) {
      return res.status(500).json({ message: err });
    } else if (!userProfile) {
      return res.status(404).json({ message: "Oops... User not found" });
    } else {
      return res.status(200).json({ userProfile });
    }
  });
});

//U = UPDATE ops
router.put("/update-profile/:firstName", (req, res) => {
  User.findOne(
    { firstName: req.params.firstName},
    {
      fullName: req.body.fullName,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      country: req.body.country,
      institute: req.body.institute,
    },
    (err, updatedInfo) => {
      if (err) {
        return res.status(500).json({ message: err });
      } else {
        updatedInfo.save((err) => {
          if (err) {
            return res.status(400).json({ message: err });
          } else {
            return res.status(200).json({ message: "User Profile updated" });
          }
        });
      }
    }
  );
});

// D = DELETE Ops
router.delete("/delete-user/:id", (req, res) => {
  User.findByIdAndDelete(req.params.id, (err, user) => {
    if (err) {
      return res.status(500).json({ message: err });
    } else if (!user) {
      return res.status(404).json({ message: "User does not exists" });
    } else {
      return res.status(200).json({ message: "User deleted" });
    }
  });
});

module.exports = router;
