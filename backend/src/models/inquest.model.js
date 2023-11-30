import mongoose from 'mongoose'; // importamos mongoose

// definimos el modelo de los datos de las encuestas
const inquestSchema = new mongoose.Schema({
  pregunta: { // nombre del campo
    type: String, // tipo de dato texto
    required: true, // es obligatorio
    trim: true, // elimina espacios en blanco
    minlength: 10, // mínimo de caracteres
    unique: true // el correo no puede ser duplicado
  },
  respuestas: [{
    respuesta: { // nombre del campo
      type: String, // tipo de dato texto
      required: true, // es obligatorio
      trim: true, // elimina espacios en blanco
      minlength: 2 // mínimo de caracteres
    },
    votos: { // nombre del campo
      type: Number, // tipo de dato número
      default: 0 // valor por defecto 0
    }
  }],
  user: {
    type: mongoose.Schema.Types.ObjectId, // tipo de dato ObjectId (epecial para los id)
    ref: 'User', // referenciamos al modelo de los usuarios
    required: true // es requerido
  }
}, {
  timestamps: true // agrega automaticamente la fecha de creación y la fecha de la última modificación
});

export default mongoose.model('Inquest', inquestSchema); // exportamos el modelo