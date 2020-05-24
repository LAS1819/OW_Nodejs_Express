import express from 'express';

// Importamos la configuración
import config from './config';
// Importamos las rutas
import router from './router';
// Importamos la conexión de socket
import { connect } from './socket'

let _server;

const server = {
	start () {
		const app = express();

		// Añadimos la configuración a la App
		config(app);
		// Rutas
		router(app);

		
		
		_server = app.listen('9000', () => {
			connect(
				)
			const address = _server.address()
			const host = address.address === '::'
				? 'localhost'
				: address
			const port = app.locals.config.PORT

			if (process.env.NODE_ENV !== 'test') {
				console.log(`Servidor abierto en http://${host}:${port}`)
			}
		})

		return _server
	},
	close() {
		_server.close();
	}
}

export default server;

if(!module.parent) {
	server.start()
}