import { useInquests } from "../../context/inquestContext";
import { Link } from "react-router-dom";
import AnswerCard from "./answerCard";

function InquestsCard({ inquest }) {

  const { deleteInquest } = useInquests()

  return (
    <div className="min-h-0">
      <div className=" bg-zinc-800 rounded-md p-2">
        <div className="flex justify-between pb-3">

          <h1 className="text-xl font-bold">
            {inquest.pregunta}
          </h1>

          <div className="flex gap-x-2 items-center">
            <Link to={`/inquest/update/${inquest._id}`} className="bg-green-500 hover:bg-green-700 rounded px-2">
              <span className="text-white font-bold">Editar</span>
            </Link>
            <button type="button" className="bg-red-500 hover:bg-red-700 rounded px-2"
              onClick={() => {
                deleteInquest(inquest._id);
              }}
            >
              <span className="text-white font-bold">Eliminar</span>
            </button>
          </div>

        </div>

        <hr className="border-zinc-700 pb-2" />

        <div className="pb-3">
          {inquest.respuestas.map((respuesta) => (
            <AnswerCard respuesta={respuesta} key={respuesta._id} />
          ))}
        </div>

        <hr className="border-zinc-700 pt-2" />

        <div className="pb-2 text-sm text-zinc-500 flex justify-between">
          <span className="font-bold">Creado: {new Date(inquest.createdAt).toLocaleDateString()}</span>
          <span className="font-bold hidden lg:flex">Última interacción: {new Date(inquest.updatedAt).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
}

export default InquestsCard