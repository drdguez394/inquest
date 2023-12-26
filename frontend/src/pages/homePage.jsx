import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";
import { useInquests } from "../context/inquestContext";

function homePage() {
  const { getAllInquests, inquests } = useInquests();

  useEffect(() => {
    getAllInquests()
  }, [])

  // --------------------------------------------------------------------------------------------

  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  if (inquests.length !== 0) {
    return (
      <div className="px-10">

        <div className="flex justify-between mb-3">
          <h1 className="text-2xl font-bold my-auto">Encuestas</h1>
        </div>

        <div className="grid lg:grid-cols-2 lg:grid-rows-3 gap-4">
          {inquests.map((inquest) => (
            <div className="min-h-0" key={inquest._id}>
              <form onSubmit={onSubmit} autoComplete="off">
                <div className=" bg-zinc-800 rounded-md p-2">

                  <div className="flex justify-between pb-3">

                    <h1 className="text-xl font-bold">
                      {inquest.pregunta}
                    </h1>

                  </div>

                  <hr className="border-zinc-700 pb-2" />

                  <div className="pb-3">

                    {inquest.respuestas.map((respuesta) => (
                      
                      <div className="" key={respuesta._id}>
                        
                        <input type="hidden" id={inquest._id} value={inquest._id}
                          {...register('pregunta', { required: true })}
                        />
                        
                        <input type="radio" id={respuesta._id} value={respuesta._id}
                          {...register('respuesta', { required: true })}
                        />
                        
                        <label htmlFor={respuesta._id} className="font-bold pl-1">
                          {respuesta.respuesta}
                        </label>
                      </div>

                    ))}

                  </div>

                  <hr className="border-zinc-700" />

                  <div className="pb-2 text-sm text-zinc-500 flex justify-between">

                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded py-2 px-4 mt-3">
                      <span>Enviar</span>
                    </button>

                  </div>


                </div>
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

export default homePage