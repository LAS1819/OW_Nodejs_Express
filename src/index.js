import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
// La librería PATH ya esta en el propio node
import path from 'path';
// Importamos el router que hemos creado
import router from './router'

let _server

const server={
	start () {
		const app = express();

		// Desactivamos el aviso de que estamos usando Express en nuestra cabecera
		app.disable('x-powered-by');



		// Le decimos al servidor que estamos en desarrollo
		//app.set('env', 'development');

		// Definimos como entorno de test
		app.set('env', process.env.NODE_ENV);

		if (process.env.NODE_ENV !== 'tests') {
			// Agregamos un logger con morgan
			// combined = Hace que se muestre otro tipo de log
			app.use(morgan('tiny'));
		}

		// Queremos que use Json
		app.use(bodyParser.json());
		app.use(bodyParser.urlencoded({extended: false}));




		// Decimos que vamos a utilizar como motor de plantilla PUG y nuestras vistas están en un directorio en concreto
		// src/views
		app.set('views', path.join(__dirname, 'views'));

		// Decimos el motor de plantilla
		app.set('view engine', 'pug');


		// Rutas
		router(app)


		// app.get('/static', (req, res) => {
		// 	path.join(__dirname, `public/${req.url}`)
		// })
		// La anterior ruta se puede hacer más fácilmente con
		app.use('/static', express.static(path.join(__dirname, 'public')))

		// ------------Midleware----------
		// Si usa una ruta que no está definida, le enviamos un error 404
		app.use((req, res, next) => {
			res.status(404).render('404', {
				title: 'Openwebinars - Error',
				message: 'La ruta no existe.'
			})
			next(err)
			res.end()
		});


		_server = app.listen('9000', () => {
			console.log('Servidor arrancado en http://localhost:9000')
		});
	},
	close () {
		_server.close()
	}
};

export default server

if (!module.parent) {
	server.start()
};

