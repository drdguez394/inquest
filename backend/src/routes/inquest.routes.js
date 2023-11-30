import { Router } from "express"; // importamos el enrrutador de express
import { authRequired } from "../middlewares/validateToken.js"; // importamos la función de manejo de autenticación
import { getInquests, getInquest, createInquest, updateInquest, deleteInquest } from "../controllers/inquest.controller.js"; // importamos las funciones del controlador de autenticación
import { validateSchema } from "../middlewares/validator.middleware.js"; // traemos la función de validación para validar los datos
import { inquestSchema } from "../schemas/inquest.schema.js"; // traemos el esquemas de validación de encuesta

const router = Router(); // instanciamos el objeto de tipo router

router.get('/inquest', authRequired, getInquests); // ruta para el home de las encuestas
router.get('/inquest/:id', authRequired, getInquest); // ruta para ver el detalle de las encuestas
router.post('/inquest', authRequired, validateSchema(inquestSchema), createInquest); // ruta para crear las encuestas
router.delete('/inquest/:id', authRequired, deleteInquest); // ruta para eliminar las encuestas
router.put('/inquest/:id', authRequired, validateSchema(inquestSchema), updateInquest); // ruta para actualizar las encuestas

export default router; // exportamos el objeto router