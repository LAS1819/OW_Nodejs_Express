import express from 'express';

// Importamos la configuración
import config from './config';

let _server;

const server = {
	start () {
		const app = express();

		// Añadimos la configuración a la App
		config(app);

		// Rutas
		app.get('/', (req, res, next) => {
			res
			.status(200)
			.json({data: 'Método get'})
		});

		app.post('/resource', (req, res, next) => {
			res
			.status(201)
			.json({data: 'Método post'})
		})

		app.put('/', (req, res, next) => {
			res
			.status(201)
			.json({ data: 'Método put'})
		})

		app.delete('/', (req, res, next) => {
			res
			.status(200)
			.json({ data: 'Método delete' })
		})

		_server = app.listen('9000', () => {
			if (process.env.NODE_ENV !== 'test') {
				console.log('Servidor abierto en http://localhost:9000')
			}
		})
	},
	close() {
		_server.close();
	}
}

export default server;

if(!module.parent) {
	server.start()
}