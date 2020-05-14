// Importamos módulo HTTP de node
import http from 'http'

// Creamos servidor
const server = http.createServer((request, response) => {
	// Nuestra respuesta va a devolver un código de estado (200)
	// Y que es un código HTML y de charset 'UTF-8', para fuentes con caracteres especiales
	//response.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' })
	//response.writeHead(400, { 'Content-Type': 'application/json' })

	// Otra forma de definir cabeceras
	response.setHeader('Content-Type', 'text/html; charset=UTF-8')
	response.statusCode = 301

	// Si el método es de tipo GET
	if (request.method === 'GET') {
		response.write('<h2>Método no permitido</h2>')
		return response.end()
	}

	// Si se crea el servidor
	response.write('<h1>Curso de Node y Express de OpenWebinars</h1>')
	// Cerramos respuesta
	return response.end()
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