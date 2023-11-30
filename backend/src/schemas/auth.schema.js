import { z } from 'zod'; // importamos la librería de zod

// validamos los datos que vienen para el registro de usuarios
export const registerSchema = z.object({
  username: z.string({
    invalid_type_error: 'El nombre de usuario debe ser alfanumérico',
    required_error: 'El nombre de usuario no debe estar vacío'
  }).min(5, {
    message: 'El usuario debe tener como mínimo 5 caracteres'
  }),
  email: z.string({
    required_error: 'El correo electrónico no debe estar vacío'
  }).email({
    message: 'El correo electrónico debe ser válido'
  }),
  password: z.string({
    required_error: 'La contraseña no debe estar vacía'
  }).min(5, {
    message: 'La contraseña debe tener como mínimo 5 caracteres'
  })
});

// validamos los datos que vienen para el login de usuario
export const loginSchema = z.object({
  email: z.string({
    required_error: 'El correo electrónico no debe estar vacío'
  }).email({
    message: 'El correo electrónico debe ser válido'
  }),
  password: z.string({
    required_error: 'La contraseña no debe estar vacía'
  }).min(5, {
    message: 'La contraseña debe tener como mínimo 5 caracteres'
  })
});