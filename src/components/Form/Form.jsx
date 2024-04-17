import { useForm } from "react-hook-form";
import "./Form.css";
import { useState } from "react";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = (data) => {
    console.log(data);
  };
  return (
    <div className="form">
      <h2>FORM</h2>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <label>Nombre de Usuario</label>
          <input
            type="text"
            {...register("userName", {
              required: "El nombre de usuario es un campo requerido",
            })}
          />
          {errors.userName && (<p>{errors.userName.message}</p>)}
        </div>
        <div>
          <label>Email</label>
          <input
            type="text"
            {...register("email", {
              required: "El email es un campo requerido",
              pattern: {
                value: /^[\w-]+(\.[\w-]+)*@[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*(\.[a-zA-Z]{2,})$/,
                message: "Debe introducir un email valido",
              },
            })}
          />
          {errors.email && (<p>{errors.email.message}</p>)}
        </div>
        <div>
          <label>Contraseña</label>
          <input
            type="password"
            {...register("password", {
              required: "La contraseña es un campo requerido",
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
                message:
                  "La contraseña debe tener mayúsculas, minúsculas y números",
              },
            })}
          />
          {errors.password && (<p>{errors.password.message}</p>)}
        </div>
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default Form;
