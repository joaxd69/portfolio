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
export default function ServicesEN({darkmode}){
    const style= darkmode?darkstyles:lightstyles
    const [actualsection,setActualSection]=useState('front')
    const handleChangeSection=(e)=>{
        e.preventDefault();
        setActualSection(e.target.value)
    }
    return (
        <div className={style.PrincipalContainer}>
            <h1>Services</h1>
            <select onChange={handleChangeSection}>
                    <option value="front">Front end</option>
                    <option value="back">Back end</option>
            </select>

            <div className={style.SectionContainer}>

             {actualsection==='front'&&
             
             <section className={style.FrontSection}>
                    
                    <h3>My front-end services</h3>
                    <div className={style.ArticleContainer}>
                       <article className={style.Services}>
                        <h5>Creation of responsive web sites</h5>
                        <img src={imgfrontserv1} alt="serv1" />
                    </article>
                    <article className={style.Services}>
                        <h5>Static web development</h5>
                        <img src={imgfrontserv2} alt="serv2" />
                    </article>
                    <article className={style.Services}>
                        <h5>Dynamic web development</h5>
                        <img src={imgfrontserv3} alt="serv3" />
                    </article>
                    <article className={style.Services}>
                       <h5>Web application development.</h5> 
                       <img src={imgfrontserv4} alt="serv4" />
                    </article>
                    <article className={style.Services}>
                       <h5>UI/UX development.</h5> 
                       <img src={imgfrontserv5} alt='serv5' />
                    </article>
                     
                    </div>
                    
                </section>}

             {actualsection==='back'&&
                <section className={style.BackSection}>
                    <h3>Mis servicios sobre back end</h3>
                    <div className={style.ArticleContainer}>
                       <article className={style.Services}>
                        <h5>APIs development</h5>
                        <img src={imgbackserv1} alt="back1" />
                    </article>
                    <article className={style.Services}>
                        <h5>Database integration (psql)</h5>
                        <img src={imgbackserv2} alt="back2" />
                    </article>
                    <article className={style.Services}>
                        <h5>Integration of external APIs</h5>
                        <img src={imgbackserv3} alt="back3" />
                    </article>
                    </div>
                </section>}

            </div>
        </div>
    )
}