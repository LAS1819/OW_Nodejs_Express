import express from 'express';

// Importamos la configuración
import config from './config';
// Importamos las rutas
import router from './router';

let _server;

const server = {
	start () {
		const app = express();

		// Añadimos la configuración a la App
		config(app);
		// Rutas
		router(app);

		
		
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