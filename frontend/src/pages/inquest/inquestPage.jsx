import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useInquests } from "../../context/inquestContext";

function inquestPage() {
  const { getInquests, inquests } = useInquests();
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit((data) => {
    const newData = {
      'encuestaid': data.encuestaid,
      'opcionid': data.opcionid
    }
    // completeInquest(data);
    console.log(newData);
  });

  useEffect(() => {
    getInquests()
  }, [])

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold">Encuestas</h1>

      <div className="grid gap-4 lg:grid-cols-2 lg:grid-rows-3">
        {inquests.map((inquest) => (
          <div className="bg-zinc-800 p-2 rounded-md" key={inquest._id}>
            <h1 className="text-xl font-bold">{inquest.pregunta}</h1>

            <form onSubmit={onSubmit} autoComplete="off">

              {inquest.respuestas.map((respuesta) => (
                <div key={respuesta._id}>
                  <input type="hidden" value={inquest._id}
                    {...register('encuestaid', { required: true })}
                  />
                  <input type="hidden" value={respuesta._id}
                    {...register('opcionid', { required: true })}
                  />
                  <input type="radio" id={`respuesta_${respuesta._id}`} value={respuesta.respuesta}
                    {...register('respuestas', { required: true })}
                  />
                  <label htmlFor={`respuesta_${respuesta._id}`} className="px-1">{respuesta.respuesta}</label>
                </div>
              ))}

              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded py-2 px-4 my-2">
                <span>Enviar</span>
              </button>

            </form>

          </div>
        ))}
      </div>

    </div>
  );
}

export default inquestPage