// import { useState } from "react";
import { useForm } from "react-hook-form";
import { useInquests } from "../../context/inquestContext";

function InquestFormPage() {
  const { register, handleSubmit } = useForm({
    pregunta: '',
    respuestas: [
      { respuesta: '' },
      { respuesta: '' }
    ]

  });
  const { createInquest } = useInquests();

  //------------------------------------------
  // const [preguntas, setPreguntas] = useState({
  //   pregunta: ''
  // });

  // const [respuestas, setRespuestas] = useState([
  //   { opcion: '' },
  //   { opcion: '' }
  // ]);

  // const borrarRespuesta = (id) => {
  //   console.log(id);
  //   const valores = [...respuestas];

  //   valores.splice(
  //     valores.findIndex((valor) => valor.id === id), 1
  //   );
  //   console.log(valores);

  //   // setRespuestas(valores);
  // };

  // const agregarRespuesta = () => {
  //   setRespuestas([
  //     ...respuestas,
  //     { opcion: '' }
  //   ]);
  // };
  //------------------------------------------

  // const onSubmit = handleSubmit((data) => {
  //   const preguntaVasia = preguntas.pregunta.trim().length < 10;
  //   const respuestasVasia = respuestas.every((obj) => {
  //     return obj.opcion.length < 2;
  //   });

  //   if (preguntaVasia) {
  //     setPreguntas({...preguntas});
  //   }
  //   if (respuestasVasia) {
  //     setPreguntas(
  //       [...respuestas].map((obj) => {
  //         if (obj.opcion === '') {
  //           return new Error("Las opciones no pueden estar vacías");
  //         } else {
  //           return obj;
  //         }
  //       })
  //     );
  //   } else {
  //     /* return  */data = {pregunta:preguntas, opciones:respuestas};
  //     console.log(data);
  //   }
  // });

  const onSubmit = handleSubmit((data) => {
    const newData = {
      'pregunta': data.pregunta,
      'respuestas': [
        {
          'respuesta': data.respuesta_1
        },
        {
          'respuesta': data.respuesta_2
        }
      ]
    };
    console.log(respuestas.length);
    // createInquest(newData);
  });

  return (
    <div className="flex h-[calc(100vh-100px)] justify-center items-center">
      <div className="bg-zinc-800 max-w-md p-10 w-full rounded-md">

        <h1 className="text-2xl font-bold">Encuesta</h1>

        <form onSubmit={onSubmit} autoComplete="false">

          <input type="text" id="pregunta" {...register('pregunta', { required: true, min: 10 })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Pregunta" autoFocus
          />
          
          <div className="flex justify-between items-center my-2" key={1}>
            <input type="text" id="respuesta_1" {...register('respuesta_1', { required: true, min: 2 })}
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md"
              placeholder="Opción 1"
            />
            <button type="button" className="bg-red-500 hover:bg-red-700 text-white font-bold rounded py-2 px-4 ml-2">-</button>
          </div>
          
          <div className="flex justify-between items-center my-2" key={2}>
            <input type="text" id="respuesta_2" {...register('respuesta_2', { required: true, min: 2 })}
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md"
              placeholder="Opción 1"
            />
            <button type="button" className="bg-red-500 hover:bg-red-700 text-white font-bold rounded py-2 px-4 ml-2">-</button>
          </div>

          <div className="flex justify-between items-center my-2">

            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded py-2 px-4 my-2">Enviar</button>

            <button type="button" className="bg-green-500 hover:bg-green-700 text-white font-bold rounded py-2 px-4 my-2">+</button>
          </div>

        </form>

      </div>
    </div>
  );
}

export default InquestFormPage