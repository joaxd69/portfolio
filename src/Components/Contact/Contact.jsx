import  { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import darkstyle from './Contact.module.css'
import lightstyle from './ContactW.module.css'
export default function Contact ({language,darkmode}) {
  const style = darkmode?darkstyle:lightstyle
  const [visiblyErrors,setVisibleErrors]=useState(false)
  const form = useRef();
    const [datos,setDatos]=useState({
        user_name:'',
        user_email:'',
        message:'',
        user_phone:''
    })

    const [errors,setErrors]= useState({})
     const validator = (inputs)=>{
        const errors={}
    if (!inputs.user_name)errors.name = 'Dime quien eres :)'
    if (!inputs.user_email)errors.email = 'Complete el campo de email'
    if (!inputs.message)errors.message = 'Escribeme un mensaje :)'
    return errors
     }

    const onChange =(e)=>{
        setDatos({...datos,[e.target.name]:e.target.value});
        console.log(errors)
        setErrors(validator({
            ...datos,
            [e.target.name]:e.target.value
        }
        ))
        console.log(datos)
    }

  const sendEmail = (e) => {
    e.preventDefault();
    if(!datos.user_email || !datos.user_name || !datos.message){
     setVisibleErrors(true)
     return alert('Por favor revisa los campos obligatorios')
    }else{
       emailjs.sendForm('service_j0p7w9t', 'template_dyetavl', form.current ,'XQT-cWEs6eqPGUDkI')
      .then((result) => { 
          console.log(result);
          alert(language==='spanish' ?'Se ha enviado el mensaje con exito': 'The message was sended succesfully')
      }, (error) => {
          console.log(error.text);
      });
      reset();
      setErrors({})
    }
    
  };
  const reset = ()=>{setDatos({ 
 user_name:'',
  user_email:'',
  message:'',
  user_phone:''
})
}

  return (
    <div>
        <h1>Contactame:</h1>
        <div className={style.FirstContainer}>

            <form  onSubmit={sendEmail} className={style.Form} ref={form}>
                <label>* Nombre</label>
                <input onChange={onChange} value={datos.user_name} type="text" name="user_name" />
                <span>{visiblyErrors&&errors.name}</span><br />

                <label>* Email</label>
                <input onChange={onChange} value={datos.user_email} type="email" name="user_email" />
                <span>{visiblyErrors&&errors.email}</span><br />

                <label>* Mensaje</label>
                <textarea onChange={onChange} value={datos.message} name="message" />
                <span>{visiblyErrors&&errors.message}</span><br />

                <label>Telefono</label>
                <input type="number" onChange={onChange} value={datos.user_phone} name='user_phone' /><br /> <br />
              
                <button  type="submit" value="Send">
                Enviar
                </button>

                <button type='button' onClick={reset}>Borrar datos</button>
            </form> 
            
            <div className={style.ChildContainer}>
                <div>
                    <h1>mi github</h1>
                </div>
                <div>
                    <h1>mi linkedin</h1>
                </div>
                <div>
                    <h1>mi email</h1>
                    <h1>Mi numero </h1>
                </div>
            </div>

        </div>
       
    </div>
   
  );
};