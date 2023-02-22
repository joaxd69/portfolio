import  { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import darkstyle from './Contact.module.css'
import lightstyle from './ContactW.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub,faLinkedin, faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import { faPhone,faMailBulk} from '@fortawesome/free-solid-svg-icons';
export default function ContactES ({darkmode}) {
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
          alert('Se ha enviado el mensaje con exito')
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
        <h1 className={style.PrincipalTitle}>Contactame :</h1>
        <div className={style.FirstContainer}>  
          <div className={style.FormContainer}>
      
            <form  onSubmit={sendEmail} className={style.Form} ref={form}>
                    <span >Enviame un mensaje si tienes una propuesta para mi, y me pondre en contacto contigo.Puedes dejarme tu feedback sobre este 
            portfolio. Gracias!
           </span><br /><br />
                <label>* Nombre</label><span>{visiblyErrors&&errors.name}</span>
                <input onChange={onChange} value={datos.user_name} type="text" name="user_name" />
              

                <label>* Email</label> <span>{visiblyErrors&&errors.email}</span>

                <input onChange={onChange} value={datos.user_email} type="email" name="user_email" />

                <label>* Mensaje</label><span>{visiblyErrors&&errors.message}</span>
                <textarea onChange={onChange} value={datos.message} name="message" />
                

                <label>Telefono</label>
                <input type="number" onChange={onChange} value={datos.user_phone} name='user_phone' /><br /> <br />
              
                <button  type="submit" value="Send">
                Enviar
                </button>

                <button type='button' onClick={reset}>Borrar datos</button>
            </form> 
           </div> 
            <div className={style.ChildContainer}>
                <div className={style.ContactsType}>
                    <h2>Mi github</h2>
                     <span>Puedes echar un vistazo a mi perfil de <a className={style.ContactLinks} 
                     href="https://github.com/joaxd69" target="_blank">
                    Git hub
                    </a>,
                         mis proyectos y sus respectivos codigos.Ademas estare subiendo proyectos
                         constantemente . 
                    </span><br />
                    <a className={style.ContactLinks} target="_blank" href="https://github.com/joaxd69">
                    <FontAwesomeIcon className={style.Github} icon={faGithub}/>
                    </a>     
                </div>
                <div className={style.ContactsType}>
                    <h2>Mi linkedin</h2>
                    <span>
                     Puedes contactarme atraves de <a className={style.ContactLinks}
                     target="_blank" href="https://www.linkedin.com/in/joaquin-garcia-392a9a259/">Linkedin</a> .
                     Donde subo con frecuencia mis progresos.
                     Si no deceas contactar puedes seguirme y ayudarme a ampliar mi red.
                    </span> <br />
                    <a className={style.ContactLinks} href="https://www.linkedin.com/in/joaquin-garcia-392a9a259/" target="_blank">
                        <FontAwesomeIcon className={style.Linkedin} icon={faLinkedin} />
                    </a>
                </div>
                <div className={style.ContactsType}>
                    <h2>Mi correo electronico</h2>
                    <span>Enviame un correo a :
                         <a href='mailto:joakig6@gmail.com'>
                            joakig6@gmail.com 
                        </a> 
                     </span> <br />
                     <a href='mailto:joakig6@gmail.com'>
                     <FontAwesomeIcon className={style.Email} icon={faMailBulk} />
                     </a> 
                   
                   
                </div>
        
                <div className={style.ContactsType}>
               
                    <h2>Mi numero </h2>
                    <span>
                        Para llamados,mensajes de texto, 
                        <a className={style.ContactLinks} href="https://wa.me/+5492216300954?" target="_blank">whatsapp</a>
                         : +542216300954  
                    </span><br />
                    <FontAwesomeIcon className={style.Phone} icon={faPhone}/>
                    <a href="https://wa.me/+5492216300954?" target="_blank">
                     <FontAwesomeIcon className={style.Whatsapp} icon={faWhatsapp}/>   
                    </a>
                
                </div>
            </div>

        </div>
       
    </div>
   
  );
};