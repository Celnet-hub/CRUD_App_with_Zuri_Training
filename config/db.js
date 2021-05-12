require('dotenv').config();

//exported to app.js
let password = process.env.PASSWORD;
let uri = `mongodb+srv://ZuriDB:${password}@zuridb1.rzwbb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

module.exports = uri;