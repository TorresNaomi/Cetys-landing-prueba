import './Home.css';
import image from '../views/banner-info.png';
import React, { Fragment, useCallback, useState, useRef, useEffect } from 'react';
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import Text from 'react-text';
import emailjs from "emailjs-com";


export default function Home(){
  const form = useRef();
  const messages =  {
    required: "Este campo es obligatorio",
    name: "El formato introducido no es el correcto",
    mail: "Debes introducir una dirección correcta",
    phone: "Debes introducir un número correcto"
  };
  
  const patterns = {
    name: /^[A-Z a-z]+$/i,
    mail: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    phone: /^[0-9]+$/i
  };

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

  const onSubmit = async data => {
   sendEmail()
  };

  

  const sendEmail = (e) =>{

    emailjs.sendForm(
      "service_cmy0ikl",
      "template_mrf0xwh",
      form.current,
      "C3kkbxPBHW3llIaM1"
    ).then(function(response) {
      alert("Datos enviados!");
      console.log(response.text)
   }, function(error) {
    alert(error.text);
    console.log(error.text)
   })

   console.log(form.current)
  }
 
  
  
    return(

<><><div className="HomeStyle">
        <img className="Image" href="#" src={image} />
        <h2>En Mexicali: 10 de julio, 10:00 am {'\n'} </h2>
        <h2>En Tijuana: 11 de julio, 11:00 am </h2>
        <h2>En Ensenada : 12 de julio, 12:00 pm</h2>
        <h3> Dudas: info@cetys.mx</h3>
      </div>
      <h1>Registrate!</h1>
          
        

        <form ref={form} onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">Nombre completo</label>
          <input
            name="user_name"
            type="text"
            className={errors.name && "error"}
            {...register("name", {
              required: messages.required,
              pattern: {
                value: patterns.name,
                message: messages.name
              }
            })} />
          {errors.name && <p>{errors.name.message}</p>}

          <label htmlFor="mail">Correo electrónico</label>
          <input
            name="user_email"
            type="text"
            className={errors.mail && "error"}
            {...register("mail", {
              required: messages.required,
              pattern: {
                value: patterns.mail,
                message: messages.mail
              }
            })} />
          {errors.mail && <p>{errors.mail.message}</p>}

          <label htmlFor="phone">Teléfono móvil</label>
          <input
            name="user_phone"
            type="tel"
            className={errors.phone && "error"}
            {...register("phone", {
              required: messages.required,
              minLength: {
                value: 10,
                message: messages.phone
              },
              maxLength: {
                value: 14,
                message: messages.phone
              },
              pattern: {
                value: patterns.phone,
                message: messages.phone
              }
            })} />
          {errors.phone && <p>{errors.phone.message}</p>}
          <label>
          Selecciona el campus:
          <select >
            <option value="Mexicali">Mexicali</option>
            <option value="Tijuana">Tijuana</option>
            <option value="Ensenada">Ensenada</option>
          </select>
        </label>
        
          <input type="submit" />
        </form> </></>

)

    
  }

const rootElement = document.getElementById("root");
ReactDOM.render(<Home />, rootElement);
