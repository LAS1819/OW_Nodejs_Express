// Importamos mongoose
import mongoose from 'mongoose';

// Definimos el host en la ruta donde nos conectamos y nuestra BD 'films'
const host = 'mongodb://127.0.0.1:27017/films';

// Configuramos mongoose como debug (modo desarrollador)
mongoose.set('debug', true);
// Decimos a mongoose que utilice las promesas y variables globales que ya tiene implementadas
mongoose.Promise = global.Promise;

// Conectamos con mongoose
// poolSize: el número de pools que permites
const conn = mongoose.createConnection(
	host, 
	{ poolSize: 200 }
);

// Capturamos posibles errores
// process.exit(): si encuentra error le decimos que salga de la aplicación
conn.on('error', err => {
	console.log('Error', err)
	return process.exit();
});

// Decimos que nos avise cuando mongo se conecte
conn.addListener('connected', () => console.log('Conectado a MongoDB'));

// Definimos el esquema de los elementos que se van a necesitar en nuestra BD
const filmSchema = new mongoose.Schema(
	{
		_id: mongoose.Schema.Types.ObjectId,
		title: { type: String, trim: true, required: true},
		poster: { type: String, trim: true, required: true}
	},
	{
		strict: false
	}
);

// Para la conexión abierta definimos un modelo de este esquema
const Film = conn.model('Film', filmSchema)

// Creamos un nuevo documento, el id no sería necesario, pero en este caso lo ponemos
const newDocument = new Film({
	_id: new mongoose.Types.ObjectId(),
	title: 'Star Wars: The Last Jedi',
	poster:
	'https://upload.wikimedia.org/wikipedia/commons/9/92/LogoTheLastJedi.jpg'
});

// Almacenamos el documento tal donde hemos definido antes (la ruta, el nombre del modelo y el esquema)
newDocument.save( err => {
	if (err) {
		throw err
	}

	console.log('Almacenado');
});