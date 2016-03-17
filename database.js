/**
 * Created by Rember on 17/03/2016.
 */

var express    = require("express");
var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'debtdb'
});
var app = express();

var accountData = 0;
var debtData = 0;

var bodyparser = require("body-parser");
app.use(bodyparser.json());

connection.connect(function(err){
    if(!err) {
        console.log("Database is connected");
    } else {
        console.log("Error connecting database");
    }
});

connection.query('SELECT * from account', function (err, rows, fields) {
    connection.end();
    if (!err) {
        console.log('The solution is: ', rows);
        accountData = rows;
    }
    else
        console.log('Error while performing Query.');
});

connection.query('SELECT * from debt', function (err, rows, fields) {
    //connection.end();
    if (!err) {
        console.log('The solution is: ', rows);
        debtData = rows;
    }
    else
        console.log('Error while performing Query.');
});


app.get("/", function(req, res) {
    var test = res.json(accountData);
    return test;
});

app.get("/2", function(req, res) {
    var test = res.json(debtData);
    return test;
});

app.listen(3000);

/*
CREATE DATABASE debtdb

CREATE TABLE account (
    account_name TEXT,
    account_email TEXT,
    account_password TEXT,
    account_id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (account_id)
)
CREATE TABLE debt (
    debt_amount INT,
    debt_accountid1 INT,
    debt_accountid1 INT,
    debt_title TEXT,
    debt_accepted BOOLEAN,
    debt_paid BOOLEAN,
    debt_id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (debt_id)
)
    */