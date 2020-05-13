import http from 'http'

const server = http.createServer((request, response) => {
	response.write('<h1>Curso de Node y Express de OpenWebinars</h1>')
	response.end()
})

server.listen(8000, 'localhost', err => {
	if (err) {
		return console.log('Error: ', err)
	}

	console.log('Server abierto en http://localhost:8000')
})