import { useState } from 'react'
import lightstyles from './ServicesW.module.css'
import darkstyles from './Services.module.css'
import imgfrontserv1 from '../../assets/Frontservices1.png'
import imgfrontserv2 from '../../assets/Frontservices2.png'
import imgfrontserv3 from '../../assets/Frontservices3.png'
import imgfrontserv4 from '../../assets/Frontservices4.png'
import imgfrontserv5 from '../../assets/Frontservices5.png'
import imgbackserv1 from '../../assets/Backservices1.png'
import imgbackserv2 from '../../assets/Backservices2.png'
import imgbackserv3 from '../../assets/Backservices3.png'
export default function ServicesES({darkmode}){
    const style= darkmode?darkstyles:lightstyles
    const [actualsection,setActualSection]=useState('front')
    const handleChangeSection=(e)=>{
        e.preventDefault();
        setActualSection(e.target.value)
    }
    return (
        <div className={style.PrincipalContainer}>
            <h1>Servicios</h1>
            <select onChange={handleChangeSection}>
                    <option value="front">Front end</option>
                    <option value="back">Back end</option>
            </select>

            <div className={style.SectionContainer}>

             {actualsection==='front'&&
             
             <section className={style.FrontSection}>
                    
                    <h3>Mi servicios sobre front end</h3>
                    <div className={style.ArticleContainer}>
                       <article className={style.Services}>
                        <h5>Creacion de paginas web de manera responsiva</h5>
                        <img src={imgfrontserv1} alt="serv1" />
                    </article>
                    <article className={style.Services}>
                        <h5>Desarrollo web de paginas estaticas</h5>
                        <img src={imgfrontserv2} alt="serv2" />
                    </article>
                    <article className={style.Services}>
                        <h5>Desarrollo web de paginas dinamicas</h5>
                        <img src={imgfrontserv3} alt="serv3" />
                    </article>
                    <article className={style.Services}>
                       <h5>Desarrollo de aplicaciones web.</h5> 
                       <img src={imgfrontserv4} alt="serv4" />
                    </article>
                    <article className={style.Services}>
                       <h5>Desarrollo de UI/UX.</h5> 
                       <img src={imgfrontserv5} alt='serv5' />
                    </article>
                     
                    </div>
                    
                </section>}

             {actualsection==='back'&&
                <section className={style.BackSection}>
                    <h3>Mis servicios sobre back end</h3>
                    <div className={style.ArticleContainer}>
                       <article className={style.Services}>
                        <h5>Desarrollo de apis.</h5>
                        <img src={imgbackserv1} alt="back1" />
                    </article>
                    <article className={style.Services}>
                        <h5>Integracion de base de datos(psql)</h5>
                        <img src={imgbackserv2} alt="back2" />
                    </article>
                    <article className={style.Services}>
                        <h5>Integracion de apis externas</h5>
                        <img src={imgbackserv3} alt="back3" />
                    </article>
                    </div>
                </section>}

            </div>
        </div>
    )
}