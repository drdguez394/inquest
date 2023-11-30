import { Router } from "express"; // importamos el enrrutador de express
import { register, login, logout, profile, verifyToken } from "../controllers/auth.controller.js"; // importamos las funciones del controlador de autenticación
import { authRequired } from "../middlewares/validateToken.js"; // importamos la función de manejo de autenticación
import { validateSchema } from "../middlewares/validator.middleware.js"; // traemos la función de validación para validar los datos
import { registerSchema, loginSchema } from "../schemas/auth.schema.js"; // traemos los esquemas de validación de login y register

const router = Router(); // instanciamos el objeto de tipo router

router.post('/register', validateSchema(registerSchema), register) // ruta para registrarse
router.post('/login', validateSchema(loginSchema), login) // ruta para iniciar sesión
router.post('/logout', logout) // ruta para iniciar sesión
router.get('/verify', verifyToken) // ruta para iniciar sesión
router.get('/profile', authRequired, profile) // ruta para iniciar sesión

export default router; // exportamos el objeto router