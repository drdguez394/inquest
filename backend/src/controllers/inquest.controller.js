import Inquest from "../models/inquest.model.js"; // importamos el modelo

// maneja la petición mostrar encuestas
export const getAllInquests = async (req, res) => {
  try {
    const inquest = await Inquest.find().populate('user'); // buscamos todas los encuestas y los usuarios de la base de datos

    // ordenamos el arreglo de mayor a menor
    inquest.sort((a, b) => Math.random() - 0.5);

    res.json(inquest); // retornamos los datos
  } catch (error) {
    console.log(error);
  }
};

// maneja la petición mostrar encuestas
export const getInquests = async (req, res) => {
  try {
    const inquest = await Inquest.find({ user: req.user.id }).populate('user'); // buscamos todas los encuestas en la base de datos por usuario registrado y la información del propio usuario

    // ordenamos el arreglo de mayor a menor
    inquest.sort((a, b) => {
      return -a.updatedAt - b.updatedAt;
    });

    res.json(inquest); // retornamos los datos
  } catch (error) {
    console.log(error);
  }
};

// maneja la petición crear encusta
export const createInquest = async (req, res) => {
  try {
    const { pregunta, respuestas } = req.body; // obtenemos los valores de la encuesta provenientes del frontend

    const newInquest = new Inquest({ pregunta, respuestas, user: req.user.id }); // conformamos una nueva encuesta y le agregamos el id del usuario que la crea

    const sendInquest = await newInquest.save(); // guardamos la encuesta en la base
    res.json(sendInquest); // retornamos al usuario la encuesta creada
  } catch (error) {
    console.log(error);
  }
};

// maneja la petición votar
export const completeInquest = async (req, res) => {
  try {
    const { encuestaId, respuestaId } = req.body;

    const inquest = await Inquest.updateOne(
      { _id: encuestaId, 'respuestas._id': respuestaId },
      { $inc: { 'respuestas.$.votos': 1 } }
    );
    if (!inquest) { // si no hay encuesta
      return res.status(404).json({ mensaje: "No se completó la votación" }); // retornamos un error con un mensaje
    }
    res.json(inquest); // caso contrario debolvemos la encuesta actualizada
  } catch (error) {
    console.log(error);
  }
};

// maneja la petición mostrar encusta en detalle
export const getInquest = async (req, res) => {
  try {
    const inquest = await Inquest.findById(req.params.id).populate('user'); // buscamos la encusta solicitada dentro de las que le pertenezcan al usuario
    if (!inquest) { // si no hay encuesta
      return res.status(404).json({ mensaje: "No se encontró la encuesta" }); // retornamos un error con un mensaje
    }
    res.json(inquest); // caso contrario debolvemos la encuesta
  } catch (error) {
    console.log(error);
  }
};

// maneja la petición eliminar encusta
export const deleteInquest = async (req, res) => {
  try {
    const inquest = await Inquest.findByIdAndDelete(req.params.id); // buscamos la encusta solicitada y la eliminamos
    if (!inquest) { // si no hay encuesta
      return res.status(404).json({ mensaje: "No se encontró la encuesta" }); // retornamos un error con un mensaje
    }
    return res.status(204).json({ mensaje: "Se eliminó la encuesta" }); // retornamos un error con un mensaje
  } catch (error) {
    console.log(error);
  }
};

// maneja la petición actualizar encusta
export const updateInquest = async (req, res) => {
  try {
    const inquest = await Inquest.findByIdAndUpdate(req.params.id, req.body, { new: true }); // buscamos la encusta solicitada y la actualizamos
    if (!inquest) { // si no hay encuesta
      return res.status(404).json({ mensaje: "No se encontró la encuesta" }); // retornamos un error con un mensaje
    }
    res.json(inquest); // caso contrario debolvemos la encuesta actualizada
  } catch (error) {
    console.log(error);
  }
};