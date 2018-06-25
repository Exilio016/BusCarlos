const express = require('express');
const debug = require('debug')('app');
const mysql = require('mysql');
const bodyparser = require('body-parser');

const app = express();

const mySqlConnection = mysql.createConnection({
  host: process.env.DATABASE_HOST || '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'buscarlos',
  port:'3306'
});

mySqlConnection.connect((err) => {
  if (err) throw err;
  debug('BusCarlosDB Connected!');
});

app.use(bodyparser.json);

module.exports = mySqlConnection;
