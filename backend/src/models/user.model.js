import mongoose from 'mongoose'; // importamos mongoose

// definimos el modelo de los datos del usuario
const userSchema = new mongoose.Schema({
  username: { // nombre del campo
    type: String, // tipo de dat
    required: true, // es obligatorio
    trim: true, // elimina espacios en blanco
    minlength: 5 // mínimo de caracteres
  },
  email: { // nombre del campo
    type: String, // tipo de dat
    required: true, // es obligatorio
    trim: true, // elimina espacios en blanco
    unique: true // el correo no puede ser duplicado
  },
  password: { // nombre del campo
    type: String, // tipo de dat
    required: true, // es obligatorio
    minlength: 5 // mínimo de caracteres
  }
}, {
  timestamps: true // agrega automaticamente la fecha de creación y la fecha de la última modificación
});

export default mongoose.model('User', userSchema); // exportamos el modelo