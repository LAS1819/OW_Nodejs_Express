import fs from 'fs'
import readline from 'readline'

export default file => {
	console.log('Eventos')

	let lines = 0

	console.log(`Fichero seleccionado ${file}\n`)

	// Emite el evento 'line' cuando lee una línea
	const rl = readline.createInterface({
		input: fs.createReadStream(file),
		crlfDelay: Infinity
	})

	rl.on('line', (line) => {
		++lines
		console.log(`Número de caracteres por línea: ${line.length}`)
	})

	rl.on('close', () => {
		console.log(`\nNúmero total de líneas: ${lines}`)
	})
}