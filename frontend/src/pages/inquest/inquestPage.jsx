import { useEffect } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { useInquests } from "../../context/inquestContext";

function inquestPage() {
  const { getInquests, completeInquest, inquests } = useInquests();
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      respuestas: [{}, {}]
    }
  });
  const { fields } = useFieldArray({
    control,
    name: 'respuestas'
  });

  const onSubmit = handleSubmit((data) => {
    const newData = {
      'encuestaId': data.encuestaId,
      'respuestaId': data.respuestaId
    }
    completeInquest(newData);
    // console.log(newData);
  });

  useEffect(() => {
    getInquests()
  }, [])

  if (inquests.length !== 0) {
    return (
      <div className="px-10">

        <h1 className="text-2xl font-bold mb-3">Encuestas</h1>

        <div className="grid gap-4 lg:grid-cols-2 lg:grid-rows-3">
          {inquests.map((inquest) => (
            <div className="bg-zinc-800 p-2 rounded-md" key={inquest._id}>
              <h1 className="text-xl font-bold">{inquest.pregunta}</h1>

              <form onSubmit={onSubmit} autoComplete="off">

                {/* {fields.map(({ id }, index) => {
                  return (
                    <div key={id}>
  
                      <input type="radio" id={`respuestas.${index}.respuesta`} autoComplete="off"
                        {...register(`respuestas.${index}.respuesta`, { required: true })}
                      />
                      <label htmlFor={`respuestas.${index}.respuesta`} className="px-1">Texto de prueba</label>
  
                    </div>
                  );
                })} */}

                {inquest.respuestas.map((respuesta) => (
                  <div key={respuesta._id}>
                    <input type="hidden" id={`encuestaId_${inquest._id}`} value={inquest._id}
                      {...register('encuestaId', { required: true })}
                    />
                    <input type="hidden" id={`respuestaId_${respuesta._id}`} value={respuesta._id}
                      {...register('respuestaId', { required: true })}
                    />
                    <input type="radio" id={`respuesta_${respuesta._id}`} value={respuesta.respuesta}
                      {...register('respuestas', { required: true })}
                    />
                    <label htmlFor={`respuesta_${respuesta._id}`} className="px-1">{respuesta.respuesta} | {inquest._id} - {respuesta._id}</label>
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
  } else {
    return (
      <div className="px-10">

        <h1 className="text-2xl font-bold mb-3">Encuestas</h1>

        <h1 className="text-xl font-bold">
          No se encontraron encuestas para mostrar, desea <a href="/inquest/create" className="text-sky-500">crear una</a>?
        </h1>

      </div>
    );
  }
}

export default inquestPage