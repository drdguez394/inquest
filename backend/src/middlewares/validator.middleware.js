// resivimos los patrones de validación
export const validateSchema = (schema) => (req, res, next) => {
  try {
    schema.parse(req.body); // realizamos la validación los datos
    next(); // se continúa con el siguiente proceso
  } catch (error) { // si ocurrió algun error
    return res
    .status(400) // retornamos un status de servidor
    .json({ error: error.errors.map(error => error.message) }); // retornamos los errores
  }
};