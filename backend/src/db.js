import mongoose from 'mongoose'; // importamos mongoose

export const connectDB = async () => { // exportamos la función asincrona connectDB
  try {
    await mongoose.connect('mongodb://localhost:27017/inquestdb'); // conectamos con mongoDB
    console.log('Conectado a MongoDB'); // mostramos en consola que se ha conectado con MongoDB
  } catch (error) {
    console.log(error); // mostramos en consola el error
  }
};