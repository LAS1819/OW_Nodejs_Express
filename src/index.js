import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';

const app = express();
// Desactivamos el aviso de que estamos usando Express en nuestra cabecera
app.disable('x-powered-by');

// Le decimos al servidor que estamos en desarrollo
app.set('env', 'development');

// Agregamos un loger con morgan
// combined = Hace que se muestre otro tipo de log
app.use(morgan('tiny'));

// Queremos que use Json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
	res.end('Hola Mundo!');
});

app.listen('9000', () => {
	console.log('Servidor arrancado en http://localhost:9000')
});