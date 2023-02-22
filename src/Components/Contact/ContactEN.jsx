import  { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import darkstyle from './Contact.module.css'
import lightstyle from './ContactW.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub,faLinkedin, faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import { faPhone,faMailBulk} from '@fortawesome/free-solid-svg-icons';
export default function ContactEN ({darkmode}) {
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
    if (!inputs.user_name)errors.name = 'Tell me,Who are you?:)'
    if (!inputs.user_email)errors.email = 'Complete email field please :D'
    if (!inputs.message)errors.message = 'Write me a message :)'
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
     return alert('Please , check de required field')
    }else{
       emailjs.sendForm('service_j0p7w9t', 'template_dyetavl', form.current ,'XQT-cWEs6eqPGUDkI')
      .then((result) => { 
          console.log(result);
          alert('The message was sended succesfully')
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
        <h1 className={style.PrincipalTitle}>Contact me :</h1>
        <div className={style.FirstContainer}>  
          <div className={style.FormContainer}>
      
            <form  onSubmit={sendEmail} className={style.Form} ref={form}>
           <span >
            If you have a proposal for me,write me a message and i will contact you,or you can give me a feedback about this Portfolio.Thanks you!
           </span><br /><br />
                <label>* Name</label><span>{visiblyErrors&&errors.name}</span>
                <input onChange={onChange} value={datos.user_name} type="text" name="user_name" />
              

                <label>* Email</label> <span>{visiblyErrors&&errors.email}</span>

                <input onChange={onChange} value={datos.user_email} type="email" name="user_email" />

                <label>* Message</label><span>{visiblyErrors&&errors.message}</span>
                <textarea onChange={onChange} value={datos.message} name="message" />
                

                <label>Phone</label>
                <input type="number" onChange={onChange} value={datos.user_phone} name='user_phone' /><br /> <br />
              
                <button  type="submit" value="Send">
                Send
                </button>

                <button type='button' onClick={reset}>Delete data</button>
            </form> 
           </div> 
            <div className={style.ChildContainer}>
                <div className={style.ContactsType}>
                    <h2>My github</h2>
                     <span>You can check my <a className={style.ContactLinks} target="_blank" href="https://github.com/joaxd69">Git hub</a> profile
                        and my projects and their respectives code. I will be uploading other projects frequently.
                    </span><br />
                    <a className={style.ContactLinks} target="_blank" href="https://github.com/joaxd69">
                    <FontAwesomeIcon className={style.Github} icon={faGithub}/>
                    </a>              
                </div>
                <div className={style.ContactsType}>
                    <h2>My Linkedin</h2>
                    <span>
                    You can contact me  in
                     <a className={style.ContactLinks}
                    target="_blank" href="https://www.linkedin.com/in/joaquin-garcia-392a9a259/">Linkedin</a> 
                    ,where i upload my projects frecuently .If you don't want to contact me, you can follow me and help me to expand my network.
                    </span> <br />
                    <a className={style.ContactLinks} target="_blank" href="https://www.linkedin.com/in/joaquin-garcia-392a9a259/">
                        <FontAwesomeIcon className={style.Linkedin} icon={faLinkedin} />
                    </a>
                       
                </div>
                <div className={style.ContactsType}>
                    <h2>My Email</h2>
                    <span>Send me an email  :
                         <a href='mailto:joakig6@gmail.com'>
                            joakig6@gmail.com 
                        </a> 
                     </span> <br />
                     <a href='mailto:joakig6@gmail.com'>
                     <FontAwesomeIcon className={style.Email} icon={faMailBulk} />
                     </a> 
                   
                </div>
        
                <div className={style.ContactsType}>
               
                    <h2>My phone number: </h2>
                    <span>
                      For calls,text menssages or 
                      <a className={style.ContactLinks} target="_blank" href="https://wa.me/+5492216300954?">whatsapp</a>
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