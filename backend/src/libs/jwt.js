import jwt from "jsonwebtoken"; // importamos json web token
import { TOKEN_SECRET_KEY } from "../config.js"; // importamos la variable TOKEN_SECRET_KEY del archivo de configuración

export function createAccessToken(payload) {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      TOKEN_SECRET_KEY, {
      expiresIn: 60 * 60 * 24 // 1 día
    }, (err, token) => {
      if (err) { // si hay error damos un error
        reject(err);
      }
      resolve(token);
    });
  })
}