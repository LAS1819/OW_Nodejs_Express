

/* // PARTE 1
import fs from 'fs'
import readline from 'readline'

const file = process.argv[2] // node(0) src/index.js(1) sample.txt(2)
let lines = 0

// Creamos interfaz con stream del fichero a leer
const rl = readline.createInterface({
	input: fs.createReadStream(file),
	crlfDelay: Infinity
})

// Cuando se publique pasamos línea hasta el final
rl.on('line', line => {
	++lines
	console.log(`Número total de caracteres por línea: ${line.length}`)

})

// Cuando termina mostramos el total de líneas
rl.on('close', () => console.log(`Número total de líneas: ${lines}`))
*/

// PARTE 2
/*
import fs from 'fs'
const file = process.argv[2] // node(0) src/index.js(1) sample.txt(2)
let lines = 0

fs.readFile(file, (err, contents) => {
	if (err) {
		return console.log(err)
	}

	const lines = contents.toString().split('\n')

	for (let line of lines) {
		console.log(`Número de caracteres por línea: ${line.length}`)
	}

	console.log(`Número total de líneas: ${lines.length}`)
})

console.log(`Fichero seleccionado: ${file}`)
*/



// PARTE 3 MODULARIZACIÓN

// Muestra el número total de líneas, y el número de palabras por línea
// Ejemplo: nom start sample.txt
import readline from 'readline'
import async from './async'
import events from './events'

const file = process.argv[2]

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

rl.question(
	`¿Cómo quiere leer el fichero?
	1. De forma asíncrona (default)
	2. Con eventos
	Seleccione una opción: `,
	value => {
		console.log(`Selecciono ${value}\n\n`)

		switch (value) {
			case '2':
				events(file)
				break
			default:
				async(file)
		}
		rl.close()
	})