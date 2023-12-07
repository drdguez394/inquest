import User from "../models/user.model.js"; // importamos el modelo
import bcrypt from 'bcryptjs'; // importamos bcrypt
import { createAccessToken } from "../libs/jwt.js"; // importamos la función jwt
import jwt from "jsonwebtoken";
import { TOKEN_SECRET_KEY } from "../config.js";


// gestiona el registro de los usuarios
export const register = async (req, res) => {
  const { username, email, password } = req.body; // obtenemos los datos del formulario

  try {

    const userFound = await User.findOne({ email }); // buscamos el correo en la base de datos
    if (userFound) {
      return res.status(400).json(["El correo ya está registrado"]); // devolvemos un json con el mensaje de error
    }

    const passwordHash = await bcrypt.hash(password, 10); // encriptamos la contraseña

    const newUser = new User({ // le asignamos al modelo
      username, // el nombre
      email, // el correo
      password: passwordHash // el password encriptado
    });

    const userSaved = await newUser.save(); // salvamos el usuario en la base de datos
    const token = await createAccessToken({ id: userSaved._id }); // generamos el token

    res.cookie('token', token); // guardamos el token en la cookie
    res.json({ // devolvemos un json con la información del usuario que se guardó en la db
      id: userSaved._id, // id
      username: userSaved.username, // nombre
      email: userSaved.email, // email
      crateAt: userSaved.createdAt, // fecha de creación
      updatedAt: userSaved.updatedAt // fecha de la última modificación
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

};

// gestiona el inicio de sesión de los usuarios
export const login = async (req, res) => {
  const { email, password } = req.body; // obtenemos los datos del formulario

  try {

    const userFound = await User.findOne({ email }); // buscamos el usuario en la base de datos
    if (!userFound) { // si no se encontró el email
      return res.status(401).json({ message: "Correo o contraseña incorrectos" }); // devolvemos un json con el mensaje de error
    }

    const isMatch = await bcrypt.compare(password, userFound.password); // comparamos las contraseñas
    if (!isMatch) { // si el password no coincide
      return res.status(401).json({ message: "Correo o contraseña incorrectos" }); // devolvemos un json con el mensaje de error
    }

    const token = await createAccessToken({ id: userFound._id }); // generamos el token

    res.cookie('token', token); // guardamos el token en la cookie
    res.json({ // devolvemos un json con la información del usuario que se guardó en la db
      id: userFound._id, // id
      username: userFound.username, // nombre
      email: userFound.email, // email
      crateAt: userFound.createdAt, // fecha de creación
      updatedAt: userFound.updatedAt // fecha de la última modificación
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// gestiona el cierre de la sesión de los usuarios
export const logout = async (req, res) => {
  res.cookie('token', ''); // le asignamos un token vacío a la cookie
  res.status(200).json({ message: "Sesión cerrada correctamente" }); // retornamos un json con el mensaje de cierre de sesión
};

// gestiona la solicitud de los usuarios profile
export const profile = async (req, res) => {
  const userFound = await User.findById(req.user.id);
  if (!userFound) {
    return res.status(400).json({ message: "Usuario no encontrado" }); // devolvemos un json con el mensaje de error
  }

  return res.json({ // devolvemos un json con la información del usuario que se guardó en la db
    id: userFound._id, // id
    username: userFound.username, // nombre
    email: userFound.email, // email
    crateAt: userFound.createdAt, // fecha de creación
    updatedAt: userFound.updatedAt // fecha de la última modificación
  });

  res.send('PERFIL de USUARIO');
};

export const verifyToken = async (req, res) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({ message: "No autorizado" });
  }

  jwt.verify(token, TOKEN_SECRET_KEY, async (err, user) => {
    if (err) {
      return res.status(401).json({ message: "No autorizado" });
    }

    const userFound = await User.findById(user.id);
    if (!userFound) {
      return res.status(401).json({ message: "No autorizado" });
    }

    return res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
    });
  });
};