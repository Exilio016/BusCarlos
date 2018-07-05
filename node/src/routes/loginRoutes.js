const express = require('express');
const mySqlConnection = require('../db/db');

const router = express.Router();

router.get('/', function(req, res){
  let id = req.query.id;
  mySqlConnection.query('SELECT nome, foto FROM usuario WHERE id = ?', [[id]], (err, resQ, fields) => {
    if(err){
        console.log(err);
        res.send(err);
        return;
    }
    res.send(resQ);
  });
});

router.get('/add', function(req, res){
  //res.send(req);
  let id = req.query.id;
  let nome = req.query.nome;
  mySqlConnection.query('INSERT INTO usuario (nome, id) VALUES (?, ?)', [[nome], [id]], (err, resQ, fields) => {
    if(err){
        console.log(err);
        res.send(err);
        return;
    }
    res.send(resQ);
  });
});

router.get('/addPic', function(req, res){
//  console.log(req.body);
//  console.log(req.data);
//  console.log(req.params);
//  res.send(req);

  let id = req.query.id;
  let foto = req.query.foto;
  mySqlConnection.query('UPDATE usuario SET foto = ? WHERE id = ?', [[foto], [id]], (err, resQ, fields) =>{
    if(err){
      console.log(err);
      res.send(err);
      return;
    }
    res.send(resQ);
  });
});

module.exports = router;
