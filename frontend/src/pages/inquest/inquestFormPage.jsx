import { useFieldArray, useForm } from "react-hook-form";
import { useInquests } from "../../context/inquestContext";

function InquestFormPage() {
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      respuestas: [{}, {}]
    }
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'respuestas'
  });
  const { createInquest } = useInquests();

  const onSubmit = handleSubmit((data) => {
    createInquest(data);
  });

  return (
    <div className="flex h-[calc(100vh-100px)] justify-center items-center">
      <div className="bg-zinc-800 max-w-md p-10 w-full rounded-md">

        <h1 className="text-2xl font-bold">Encuesta</h1>

        <form onSubmit={onSubmit} autoComplete="off">

          <input type="text" className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" placeholder="Pregunta" autoComplete="off" autoFocus
            {...register('pregunta', { required: true, min: 10 })}
          />

          {fields.map(({ id }, index) => {
            return (
              <div className="flex justify-between items-center my-2" key={id}>

                <input type="text" className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md" placeholder="Opción 1" autoComplete="off"
                  {...register(`respuestas.${index}.respuesta`, { required: true, min: 2 })}
                />

                {fields.length > 2 && (
                  <button type="button" className="bg-red-500 hover:bg-red-700 text-white font-bold rounded py-2 px-4 ml-2"
                    onClick={() => remove(index)}
                  >
                    <span>-</span>
                  </button>
                )}

              </div>
            );
          })}

          <div className="flex justify-between items-center my-2">

            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded py-2 px-4 my-2">
              <span>Enviar</span>
            </button>

            <button type="button" className="bg-green-500 hover:bg-green-700 text-white font-bold rounded py-2 px-4 my-2"
              onClick={() => append({ name: '' })}
            >
              <span>+</span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}

export default InquestFormPage