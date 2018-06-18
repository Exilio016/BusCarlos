const express = require('express');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const mysql = require('mysql');

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  port: '3306',
  database: 'buscarlos',
});

con.connect((err) => {
  if (err) throw err;
  debug('Connected!');
});

const nav = [{ link: '/linhas', title: 'Busca por Linhas' },
  { link: '/referencias', title: 'Busca por Referencia' },
  { link: '/favoritos', title: 'Favoritos' },
  { link: 'feed', title: 'Feed de Noticias' }];
const app = express();
const port = process.env.PORT || 3000;

const linhasRouter = require('./src/routes/linhasRoutes')(nav);
const referenciasRouter = require('./src/routes/referenciasRoutes')(nav);
const favoritosRouter = require('./src/routes/favoritosRoutes')(nav);
const feedRouter = require('./src/routes/feedRoutes')(nav);

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist/')));
app.use('/linhas', linhasRouter);
app.use('/referencias', referenciasRouter);
app.use('/favoritos', favoritosRouter);
app.use('/feed', feedRouter);

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.listen(port, () => debug('listening on port '.concat(port)));
