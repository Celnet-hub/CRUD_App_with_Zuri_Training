const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

//create an instance of express
const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use('/', require('./routes/routes.js'));

//create a connection to database
const uriVariable = require("./config/db.js");
mongoose.connect(
	uriVariable,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: true,
	},
	(err) => {
		if (err) {
			console.error(err);
		} else {
			console.log("Connection to database established");
		}
	},
);

const port = process.env.Port;

app.listen(port, () => {
	console.log(`server is live on port ${port}`);
});
