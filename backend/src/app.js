import express from 'express'; // importamos express
import morgan from 'morgan'; // importamos morgan
import cookieParser from "cookie-parser"; // importamos la función cookieParser para manejar los cookies

import authRouts from './routes/auth.routes.js' // importamos las rutas de autenticación
import inquestRouts from './routes/inquest.routes.js' // importamos las rutas de encuestas

const app = express(); // inicializamos express

app.use(morgan('dev')); // indicamos el formato de los logs
app.use(express.json()); // para convertir los req.body en json
app.use(cookieParser()); // indicamos la función cookieParser para manejar los cookies

app.use('/api', authRouts); // indicamos las rutas de autenticación
app.use('/api', inquestRouts); // indicamos las rutas de las encuestas

export default app; // exportamos express