import { useForm } from "react-hook-form";
import { useAuth } from "../../context/authContext.jsx";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function registerPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { signup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/profile");
    }
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  })

  return (
    <div className="flex h-[calc(100vh-100px)] justify-center items-center">
      <div className="bg-zinc-800 max-w-md p-10 rounded-md">
      <p className="text-2xl">Registrarse</p>
        {registerErrors.map((error, i) => (
          <div className="bg-red-500 p-2 text-white my-2" key={i}>
            {error}
          </div>
        ))}
        <form onSubmit={onSubmit} autoComplete="false">
          <input type="text" {...register('username', { required: true, min: 5 })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Usuario"
          />
          {
            errors.username && <p className="text-red-500 text-xs italic">El usuario es requerido</p>
          }
          <input type="email" {...register('email', { required: true, min: 5 })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Correo"
          />
          {
            errors.email && <p className="text-red-500 text-xs italic">El correo es requerido</p>
          }
          <input type="password" {...register('password', { required: true, min: 6 })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Contraseña"
          />
          {
            errors.password && <p className="text-red-500 text-xs italic">La contraseña es requerida</p>
          }
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-2">Enviar</button>
        </form>
        <p className="flex gap-x-2 justify-between my-2">
          Ya tienes cuenta?
          <Link to="/login" className="text-sky-500">Loguearse</Link>
        </p>
      </div>
    </div>
  );
}

export default registerPage