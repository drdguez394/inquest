import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext.jsx";

function navbar() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="bg-zinc-700 mb-3 py-5 px-10">
      {isAuthenticated ?
        <div className="flex justify-between">
          <div>

            <Link to={'/'}>
              <h1 className="text-2xl font-bold">
                Administración de Encuestas
              </h1>
            </Link>

            <ul className="flex gap-x-2 text-sky-500">
              <li><Link to={'/'} className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold rounded px-4 pb-1">Inicio</Link></li>
              <li><Link to={''} className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold rounded px-4 pb-1">Quienes somos</Link></li>
              <li><Link to={''} className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold rounded px-4 pb-1">Contáctenos</Link></li>
              <li><Link to={'/inquest/manage'} className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold rounded px-4 pb-1">Administrar</Link></li>
            </ul>

          </div>
          <div>

            <img src="https://www.counselling-guidance.com/images/admission-consultants-in-delhi.png" alt="user" className="mx-auto" width="35px" height="35px" />

            <ul className="flex gap-x-2 text-sky-500">
              <li><Link to={'/profile'} className="bg-purple-500 hover:bg-purple-700 text-white font-bold rounded px-4 pb-1">Perfil</Link></li>
              <li><Link to={'/'} onClick={() => { logout() }} className="bg-purple-500 hover:bg-purple-700 text-white font-bold rounded px-4 pb-1">Cerrar Seción</Link></li>
            </ul>

          </div>
        </div>
        :
        <div className="flex justify-between">
          <div>

            <Link to={'/'}>
              <h1 className="text-2xl font-bold">
                Encuestas
              </h1>
            </Link>

            <ul className="flex gap-x-2 text-sky-500">
              <li><Link to={'/'} className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold rounded px-4 pb-1">Inicio</Link></li>
              <li><Link to={''} className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold rounded px-4 pb-1">Quienes somos</Link></li>
              <li><Link to={''} className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold rounded px-4 pb-1">Contáctenos</Link></li>
            </ul>

          </div>
          <div>

            <img src="https://www.counselling-guidance.com/images/admission-consultants-in-delhi.png" alt="user" className="mx-auto" width="35px" height="35px" />

            <ul className="flex gap-x-2 text-sky-500">
              <li><Link to={'/login'} className="bg-purple-500 hover:bg-purple-700 text-white font-bold rounded px-4 pb-1">Loguearse</Link></li>
              <li><Link to={'/register'} className="bg-purple-500 hover:bg-purple-700 text-white font-bold rounded px-4 pb-1">Registrarse</Link></li>
            </ul>

          </div>
        </div>
      }
    </nav >
  );

}

export default navbar