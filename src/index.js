import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
// La librería PATH ya esta en el propio node
import path from 'path';

const app = express();

// Desactivamos el aviso de que estamos usando Express en nuestra cabecera
app.disable('x-powered-by');

// Le decimos al servidor que estamos en desarrollo
app.set('env', 'development');

// Agregamos un loger con morgan
// combined = Hace que se muestre otro tipo de log
app.use(morgan('tiny'));

// Queremos que use Json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Decimos que vamos a utilizar como motor de plantilla PUG y nuestras vistas están en un directorio en concreto
// src/views
app.set('views', path.join(__dirname, 'views'));

// Decimos el motor de plantilla
app.set('view engine', 'pug');

app.get('/', (req, res) => {
	res.render('home', {
		title: 'Curso de Openwebinars',
		message: 'Primer Layout con variables'
	});
});

app.listen('9000', () => {
	console.log('Servidor arrancado en http://localhost:9000')
});