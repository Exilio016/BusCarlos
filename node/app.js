const express = require('express');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const nav = [{ link: '/linhas', title: 'Busca por Linhas' },
  { link: '/ruas', title: 'Busca por Rua' },
  { link: '/referencias', title: 'Busca por Referencia' },
  { link: '/caminhos', title: 'Busca por Trajeto'},
  { link: '/favoritos', title: 'Favoritos' },
  { link: '/feed', title: 'Feed de Noticias' }];
const app = express();
const port = process.env.PORT || 3000;

const linhasRouter = require('./src/routes/linhasRoutes')(nav);
const referenciasRouter = require('./src/routes/referenciasRoutes')(nav);
const favoritosRouter = require('./src/routes/favoritosRoutes')(nav);
const feedRouter = require('./src/routes/feedRoutes')(nav);
const ruasRouter = require('./src/routes/ruasRoutes')(nav);
const caminhosRouter = require('./src/routes/caminhosRoutes')(nav);
const buscaCaminho = require('./src/routes/buscaCaminho')(nav);
const loginRouter = require('./src/routes/loginRoutes');

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist/')));
app.use('/linhas', linhasRouter);
app.use('/ruas', ruasRouter);
app.use('/referencias', referenciasRouter);
app.use('/favoritos', favoritosRouter);
app.use('/feed', feedRouter);
app.use('/caminhos', caminhosRouter);
app.use('/buscaCaminho', buscaCaminho);
app.use('/login', loginRouter);
app.use('/', linhasRouter);

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.listen(port, () => debug('listening on port '.concat(port)));
