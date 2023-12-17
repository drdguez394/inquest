import { useState } from "react";
import { useForm } from "react-hook-form";
import { useInquests } from "../../context/inquestContext";

function InquestFormPage() {
  const { register, handleSubmit } = useForm();
  const { createInquest } = useInquests();

  const [respuestas, setRespuestas] = useState([
    { respuesta: '' },
    { respuesta: '' }
  ]);

  const onSubmit = handleSubmit((data) => {
    let newData = {
      'pregunta': data.pregunta,
      'respuestas': Object.entries(data)
        .filter(([key]) => key.startsWith('respuesta'))
        .map(([key, value]) => ({ respuesta: value }))
    };

    createInquest(newData);
  });

  const handleRespuestaChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...respuestas];
    list[index][name] = value;
    setRespuestas(list);
  };

  const handleRespuestaRemove = (index) => {
    const list = [...respuestas];
    list.splice(index, 1);
    setRespuestas(list);
  };

  const handleRespuestaAdd = () => {
    setRespuestas([...respuestas, { respuesta: '' }]);
  };

  return (
    <div className="flex h-[calc(100vh-100px)] justify-center items-center">
      <div className="bg-zinc-800 max-w-md p-10 w-full rounded-md">

        <h1 className="text-2xl font-bold">Encuesta</h1>

        <form onSubmit={onSubmit} autoComplete="off">

          <input type="text" id="pregunta" {...register('pregunta', { /* required: true,  */min: 10 })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Pregunta" autoComplete="off" autoFocus
          />

          {respuestas.map((campo, index) => (
            <div className="flex justify-between items-center my-2" key={index}>
              <input type="text" id={"respuesta_" + (index + 1)}
                {...register('respuesta_' + (index + 1), { /* required: true,  */min: 2 })}
                value={campo.respuesta} onChange={(e) => handleRespuestaChange(e, index)}
                className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md"
                placeholder={"Opción " + (index + 1)} autoComplete="off"
              />
              {respuestas.length > 2 && (
                <button type="button" onClick={() => handleRespuestaRemove(index)} className="bg-red-500 hover:bg-red-700 text-white font-bold rounded py-2 px-4 ml-2">
                  <span>-</span>
                </button>
              )}
            </div>
          ))}

          <div className="flex justify-between items-center my-2">

            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded py-2 px-4 my-2">
              <span>Enviar</span>
            </button>

            <button type="button" onClick={handleRespuestaAdd} className="bg-green-500 hover:bg-green-700 text-white font-bold rounded py-2 px-4 my-2">
              <span>+</span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}

export default InquestFormPage