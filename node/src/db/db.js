const express = require('express');
const debug = require('debug')('app');
const mysql = require('mysql');
const sleep = require('sleep');
const bodyparser = require('body-parser');

const app = express();

const mySqlConnection = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: 'user',
  password: 'pass',
  database: 'buscarlos',
  port:'3306'
});

function reconnect(conn){
  sleep.sleep(1);

  conn = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: 'user',
    password: 'pass',
    database: 'buscarlos',
    port:'3306'
  });
}

mySqlConnection.connect((err) => {
  if (err) reconnect(this);
  debug('BusCarlosDB Connected!');
});

app.use(bodyparser.json);

module.exports = mySqlConnection;
