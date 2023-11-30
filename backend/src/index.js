import app from "./app.js"; // importamos app.js
import { connectDB } from "./db.js"; // importamos la conexión con la DB
import { BACKEND_SERVER_PORT } from "./config.js"; // importamos la variable BACKEND_SERVER_PORT del archivo de configuración

connectDB();
app.listen(BACKEND_SERVER_PORT); // indicamos el servidor para el backend en el puerto 3000
console.log('Servidor corriendo en el "http://localhost:3000"...'); // mostramos en consola el servidor