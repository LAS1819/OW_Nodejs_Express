// Importamos módulo HTTP de node
import http from 'http'

// Creamos servidor
const server = http.createServer((request, response) => {
	
})

// Asignamos el puerto 8000 al servidor localhost
server.listen(8000, 'localhost', err => {
	// Si encontramos error lo mostramos por pantalla
	if (err) {
		return console.log('Error: ', err)
	}

	// Si todo va bien, mostramos que se ha abierto
	console.log('Server abierto en http://localhost:8000')
})