// Importamos módulo HTTP de node
import http from 'http'
// Importamos la librería file system para leer el html en este caso
import fs from 'fs'
// Utilizamos la librería path que proporciona node para analizar la ruta por la que se accede a la publicación
import path from 'path'

// Guardamos en una constante el fichero que vamos a leer
const file = './src/index.html'

// Creamos servidor
const server = http.createServer((request, response) => {
	// Primero comprobamos por qué ruta accede el ususario
	let filePath = request.url
	// Si es desde 'barra' (/)
	if (filePath === '/') {
		filePath = 'index.html'
	}

	// Si no accede desde barra no hace falta comprobarlo
	filePath = `./src/${filePath}`

	// Comprobamos los tipos de archivo que acceden
	// Dependiendo de la extensión del fichero
	// Guardamos la extensión del archivo con path
	const extname = path.extname(filePath)

	let contentType
	switch (extname) {
		case '.css':
			contentType = 'text/css'
			break;
		case '.html':
			contentType = 'text/html'
			break
	}

	// Advertimos que la cabecera correcta (200) es HTML y está codificada en UTF-8
	response.writeHead(200, {'Content-Type': `${contentType}; charset=UTF-8`})
	//response.writeHead(200, {'Content-Type': 'application/json'})

	// Leemos el fichero con fs
	fs.readFile(filePath, (err, content) => {
		if (err) {
			return cosnole.log(err)
		}

		// Si no hay error escribimos el fichero
		response.write(content)
		// Finalizamos respuesta
		response.end()
	})

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