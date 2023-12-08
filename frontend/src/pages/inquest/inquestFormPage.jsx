import { useForm } from "react-hook-form";
import { useInquests } from "../../context/inquestContext";

function InquestFormPage() {
  const { register, handleSubmit } = useForm();
  const { createInquest } = useInquests();

  const onSubmit = handleSubmit((data) => {
    // createInquest(data);
    console.log(data);
  });

  return (
    <div className="flex h-[calc(100vh-100px)] justify-center items-center">
      <div className="bg-zinc-800 max-w-md p-10 w-full rounded-md">

        <h1 className="text-2xl font-bold">Encuesta</h1>

        <form onSubmit={onSubmit} autoComplete="false">

          <input type="text" {...register('pregunta', { required: true, min: 10 })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Pregunta" autoFocus
          />

          <div className="flex justify-between items-center my-2" key={1}>
            <input type="text" {...register('respuesta_1', { required: true, min: 2 })}
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md"
              placeholder="Opción 1"
            />
            <button type="button" className="bg-red-500 hover:bg-red-700 text-white font-bold rounded py-2 px-4 ml-2">-</button>
          </div>

          <div className="flex justify-between items-center my-2" key={2}>
            <input type="text" {...register('respuesta_2', { required: true, min: 2 })}
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md"
              placeholder="Opción 2"
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