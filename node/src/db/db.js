const express = require('express');
const debug = require('debug')('app');
const mysql = require('mysql');
const bodyparser = require('body-parser');

const app = express();

const mySqlConnection = mysql.createConnection({
  multipleStatements: true,
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'BusCarlosDB',
  port: '3306',
});

mySqlConnection.connect((err) => {
  if (err) throw err;
  debug('BusCarlosDB Connected!');
});

app.use(bodyparser.json);

module.exports = mySqlConnection;
