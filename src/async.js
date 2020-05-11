import fs from 'fs'

export default file => {
	console.log('Asíncrono')

	fs.readFile(file, (err, contents) => {
		if(err) {
			return console.log(err)
		}

		const lines = contents.toString().split('\n')

		for (let line of lines) {
			console.log(`Número de caracteres por línea: ${line.length}`)
		}

		console.log(`\nNúmero total de líneas: ${lines.length}`)
	})

	console.log(`Fichero seleccionado: ${file}\n`)
}