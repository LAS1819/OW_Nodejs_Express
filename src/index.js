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


// Rutas
// Ruta para HOME
app.get('/', (req, res, next) => {
	res.render('home', {
		title: 'Curso de Openwebinars',
		message: 'Curso de NodeJS - Home'
	});

	res.end();
});

// Ruta inicial (raíz ('/'))
// app.get('/', (req, res) => {
// 	res.write(`
// 		<h1>Curso OpenWebinars</h1>
// 		<a href="/temario">Temarios</a>
// 		<a href="/home">Home</a>
// 	`)
// 	res.end();
// })

// Ruta a temario
app.get('/temario', (req, res, next) => {
	res.render('temario', {
		title: 'CURSO de OpenWebinars',
		message: 'Temario del curso de NodeJS'
	})
	res.end();
})

// Creams un layout para las posibles rutas de usuario
// '/:user' -> magic param
app.get('/:user', (req, res) => {
	res.render('user', {
		title: 'Openwebinars - User',
		message: `Bienvenido usuario ${req.params.user}`
	})
	res.end()
})

// app.get('/static', (req, res) => {
// 	path.join(__dirname, `public/${req.url}`)
// })
// La anterior ruta se puede hacer más fácilmente con
app.use('/static', express.static(path.join(__dirname, 'public')))





app.listen('9000', () => {
	console.log('Servidor arrancado en http://localhost:9000')
});