import { useState } from 'react'
import lightstyles from './Services.module.css'
import darkstyles from './ServicesW.module.css'
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
                    
                    <h3>Mi servicios sobre front end</h3>

                    <article className={style.FrontServices}>
                        <h5>Creacion de paginas web de manera responsiva</h5>
                    </article>
                    <article className={style.FrontServices}>
                        <h5>Desarrollo web de paginas estaticas y dinamica</h5>
                    </article>
                    <article className={style.FrontServices}>
                       <h5>Desarrollo de aplicaciones web.</h5> 
                    </article>
                    <article className={style.FrontServices}>
                       <h5>Desarrollo de UI/UX.</h5> 
                    </article>
                    
                </section>}

             {actualsection==='back'&&
                <section className={style.BackSection}>
                    <h3>Mis servicios sobre back end</h3>
                    <article className={style.BackServices}></article>
                    <article className={style.BackServices}></article>
                    <article className={style.BackServices}></article>
                    <article className={style.BackServices}></article>
                </section>}

            </div>

        </div>
    )
}