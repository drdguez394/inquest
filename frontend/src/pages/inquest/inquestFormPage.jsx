import { useState } from "react";

import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useInquests } from "../../context/inquestContext";
import { useForm } from "react-hook-form";

export function InquestFormPage() {
  const { createInquest, getInquest, updateInquest } = useInquests();
  const navigate = useNavigate();
  const params = useParams();
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      if (params.id) {
        updateInquest(params.id);
      } else {
        createInquest({
          ...data
        });
      }

      // navigate("/inquests");
    } catch (error) {
      console.log(error);
      // window.location.href = "/";
    }
  };

  useEffect(() => {
    const loadInquest = async () => {
      if (params.id) {
        const inquest = await getInquest(params.id);
        setValue("Pregunta", inquest.title);
        setValue("description", inquest.description);
        setValue(
          "date",
          inquest.date ? dayjs(inquest.date).utc().format("YYYY-MM-DD") : ""
        );
        setValue("completed", inquest.completed);
      }
    };
    loadInquest();
  }, []);
  
  //---------------------------------------
  const [optionList, setOptionList] = useState([
    { option: "" },
    { option: "" }
  ]);

  const handleOptionChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...optionList];
    list[index][name] = value;
    setOptionList(list);
  };

  const handleOptionRemove = (index) => {
    const list = [...optionList];
    list.splice(index, 1);
    setOptionList(list);
  };

  const handleOptionAdd = () => {
    setOptionList([...optionList, { option: "" }]);
  };
  //----------------------------------------

  return (
    <div className="flex h-[calc(100vh-100px)] justify-center items-center">
      <div className="bg-zinc-800 max-w-md p-10 rounded-md">
        <p className="text-2xl">Crear encuesta</p>
        <form onSubmit={onSubmit} autoComplete="off">

          <input type="text" {...register('pregunta', { required: true, min: 5 })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Pregunta" autoFocus
          />

          {optionList.map((singleOption, index) => (
            
            <div key={index}>
              <div className="flex gap-x-2 justify-between my-2">
                
                <input type="text" {...register(`respuesta_${index + 1}`, { required: true, min: 2 })}
                  className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                  placeholder={`Posible respuesta ${index + 1}`}
                />

                {optionList.length !== 1 && (
                  <button type="button" onClick={() => handleOptionRemove(index)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded my-2" >
                    <span>-</span>
                  </button>
                )}

              </div>

              {optionList.length - 1 === index && optionList.length < 10 && (
                <button type="button" onClick={handleOptionAdd} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded my-2" >
                  <span>+</span>
                </button>
              )}

            </div>

          ))}
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-2">
            <span>Enviar</span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default InquestFormPage