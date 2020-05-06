const mysql = require('mysql');

const db = mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"",
	database:"Customers",
	multipleStatements: true
});

module.exports = db;