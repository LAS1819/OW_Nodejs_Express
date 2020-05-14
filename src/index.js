// Importamos módulo HTTP de node
import http from 'http'
// Importamos la librería file system para leer el html en este caso
import fs from 'fs'

// Guardamos en una constante el fichero que vamos a leer
const file = './src/index.html'

// Creamos servidor
const server = http.createServer((request, response) => {
	// Advertimos que la cabecera correcta (200) es HTML y está codificada en UTF-8
	response.writeHead(200, {'Content-Type': 'text/html; charset:UTF-8'})
	//response.writeHead(200, {'Content-Type': 'application/json'})

	// Leemos el fichero con fs
	fs.readFile(file, (err, content) => {
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