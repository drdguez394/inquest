import { Link } from "react-router-dom";

function homePage() {
  return (
    <div>
      homePage <br />
      <Link to="/register" className="text-sky-500">Registrarse</Link> / <Link to="/login" className="text-sky-500">Loguearse</Link> / <Link to="/inquest" className="text-sky-500">Encuestas</Link>
    </div>
  )
}

export default homePage