const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();

// conectando a la BD
mongoose.connect('mongodb://localhost/crud-mongo')
.then(db => console.log('BD conectada'))
.catch(err => console.log(err));

// importando rutas
const indexRutas = require('./rutas/index');

// configs
app.set('port', process.env.PORT || 8080);
app.set('views', path.join(__dirname, 'vistas'));
app.set('view engine', 'ejs');

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

// rutas
app.use('/', indexRutas);

// iniciando server
app.listen(app.get('port'), () => {
	console.log(`Server on port ${app.get('port')}`);
});