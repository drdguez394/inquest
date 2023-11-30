import { useForm } from "react-hook-form";
import { registerRequest } from "../../api/auth.js";

function registerPage() {
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit( async (values) => {
    const res = await registerRequest(values);
    console.log(res);
  })

  return (
    <div className="flex h-[calc(100vh-100px)] justify-center items-center">
      <div className="bg-zinc-800 max-w-md p-10 rounded-md">

        <form onSubmit={onSubmit} autoComplete="false">
          <input type="text" {...register('username', { required: true, min: 5 })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Usuario"
          />
          <input type="email" {...register('email', { required: true, min: 5 })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Correo"
          />
          <input type="password" {...register('password', { required: true, min: 6 })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Contraseña"
          />
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Registrar</button>
        </form>
        <p className="flex gap-x-2 justify-between">
          Ya tienes una cuenta?
        </p>
      </div>
    </div>
  )
}

export default registerPage