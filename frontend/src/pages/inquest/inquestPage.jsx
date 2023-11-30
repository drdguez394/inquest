import {useEffect} from "react";
import {useInquests} from "../../context/InquestContext.jsx"

function inquestPage() {
  const {getInquests} = useInquests();

  useEffect(() => {
    getInquests()
  }, []);
  return (
    <div>
      inquests.map(pregunta (
        <div key={pregunta._id}>
          <h1>{inquest.pregunta}</h1>
          <button>
            <span>{pregunta.opcion}</span>
          </button>
        </div>
      ))
    </div>
  )
}

export default inquestPage