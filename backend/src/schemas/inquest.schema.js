import { z } from 'zod'; // importamos la librería de zod

// validamos los datos que vienen para la encuesta
export const inquestSchema = z.object({
  // pregunta: z.string().min(10),
  // respuestas: z.array().min(2),
  // respuesta: z.string().min(2),
  // votos: z.number().min(1).optional()
});