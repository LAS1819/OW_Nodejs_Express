var colors = require('colors');

// MANEJO DE ERRORES

// Para capturar errores y manejarlos
// Primer tipo de error
process.on('unhandleRejection', (err, p) => {
	console.log(`Custom unhandledRejection: ${err}`.red)
})

// Segundo tipo de error
process.on('uncaughtException', (err) => {
	console.warn(`Custom uncaughtException: ${err}`.red)
})

// Promise(resolve => JSON.pasre({ color: 'blue' }))
// test()
throw 'Error'