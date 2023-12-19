import { useEffect } from "react";
import { useInquests } from "../../context/inquestContext"

function inquestPage() {
  const { getInquests, inquests } = useInquests();

  useEffect(() => {
    getInquests()
  }, [])

  return (
    <div>
      Texto de prueba
      {console.log(inquests.data)}
      {inquests.map((inquest) => (
        <div key={inquest._id}>
          <h1>{inquest.pregunta}</h1>
        </div>
      ))}
    </div>
  )
}

export default inquestPage