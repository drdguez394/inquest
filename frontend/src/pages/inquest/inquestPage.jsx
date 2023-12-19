import { useEffect } from "react";
import { useInquests } from "../../context/inquestContext"

function inquestPage() {
  const { getInquests, inquests } = useInquests();

  useEffect(() => {
    getInquests()
  }, [])

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold">Encuestas</h1>

      <div className="grid gap-4 lg:grid-cols-2 lg:grid-rows-3">
        {inquests.map((inquest) => (
          <div className="bg-zinc-800 lg:w-auto p-2 rounded-md" key={inquest._id}>
            <h1 className="text-xl font-bold">{inquest.pregunta}</h1>

            <form autoComplete="off">

              {inquest.respuestas.map((respuesta) => (
                <div key={respuesta._id}>
                  <input type="radio" name="respuestas" id={`respuesta_${respuesta._id}`} value={respuesta.respuesta} />
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