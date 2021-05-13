//this module is use to create a custom uri to connect to my database
//use the enviroment variable to connect to my database
require('dotenv').config();

const password = process.env.PASSWORD;
const uri = `mongodb+srv://ZuriDB:${password}@zuridb1.rzwbb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

//module to be exported to server.js
module.exports = uri;