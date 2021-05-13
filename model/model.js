/**
 * NOTE: A Mongoose schema defines the structure of the document, default values, validators, etc., whereas a Mongoose model provides an interface to the database for creating, querying, updating, deleting records, etc.
 */

//dependencies
const mongoose = require("mongoose");

//define my DB schema
const profileSchema = new mongoose.Schema({
    fullName: String,
    firstName: String,
    lastName: String,
	email: String,
	country: String,
	institute: String,
});

//create a model
const userProfile = mongoose.model("userProfile", profileSchema);

//export to routes.js
module.exports = userProfile;
