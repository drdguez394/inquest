function AnswerCard({ respuesta }) {
  return (
    <div className="flex justify-between">
      <span>
        {respuesta.respuesta}
      </span>
      <span>
        {respuesta.votos}
      </span>
    </div>
  );
}

export default AnswerCard