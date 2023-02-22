import ContactES from './ContactES';
import ContactEN from './ContactEN';
export default function Contact ({language,darkmode}) {

  return (
    <div>
        {language==='spanish'?
        <ContactES darkmode={darkmode}/>:
         <ContactEN darkmode={darkmode}/>
        }
    </div>
   
  );
};