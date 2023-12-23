import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useInquests } from "../../context/inquestContext";
import InquestsCard from "../../components/manage/inquestsCard";

function inquestPage() {
  const { getInquests, inquests } = useInquests();

  useEffect(() => {
    getInquests()
  }, [])

  if (inquests.length !== 0) {
    return (
      <div className="px-10">

        <div className="flex justify-between mb-3">
          <h1 className="text-2xl font-bold my-auto">Administrar Encuestas</h1>
          <Link to="/inquest/create" className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded py-2 px-4 my-2">Nueva encuesta</Link>
        </div>

        <div className="grid lg:grid-cols-2 lg:grid-rows-3 gap-4">
          {inquests.map((inquest) => (
            <InquestsCard inquest={inquest} key={inquest._id} />
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