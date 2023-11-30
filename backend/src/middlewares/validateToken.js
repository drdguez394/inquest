import { TOKEN_SECRET_KEY } from "../config.js"; // importamos la variable TOKEN_SECRET_KEY del archivo de configuración
import jwt from "jsonwebtoken"; // importamos la función de jwt

// garantiza el acceso a los usuarios logueados
export const authRequired = (req, res, next) => {
	const { token } = req.cookies; // obtenemos el token de la cookie

	if (!token) {
		return res.status(401).json({ message: "No está autorizado" }); // devolvemos un json con el mensaje de error
	}

	jwt.verify(token, TOKEN_SECRET_KEY, (err, user) => {
		if (err) {
			return res.status(401).json({ message: "Credenciales no autorizadas" }); // devolvemos un json con el mensaje de error
		}

		req.user = user; // a user del request le asignamos el usuario logueado

		next(); // permitimos el proceso
	});
};