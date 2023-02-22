import style from './Carrusel.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub,faLinkedin, faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import { faPhone,faMailBulk, faArrowAltCircleLeft, faArrowCircleLeft, faArrowLeftLong, faArrowCircleRight} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react'
export default function Carrusel({images}){
      const [actualImage,setActualImage]= useState(0)
      const handleNext = (e)=>{
        e.preventDefault();
        actualImage<images.length-1&&setActualImage(actualImage+1)
      }
      const handlePrev = (e)=>{
      e.preventDefault();
      actualImage>0&&setActualImage(actualImage-1)
      }
      const handleSelect = (e)=>{
        e.preventDefault();
        setActualImage(parseInt(e.target.id))
      }
    return (
       <div className={style.FirstContainer}>
          <div className={style.Carrusel}> 
            <img src={images[actualImage]} alt="" className={style.Image} />

            <div className={style.ButtonsCarrusel}>
                <button onClick={handlePrev} >
                    <FontAwesomeIcon icon={faArrowCircleLeft}/>
                </button>
                <button onClick={handleNext}>
                <FontAwesomeIcon icon={faArrowCircleRight}/> 
                </button> 
            </div>
 <section className={style.PrevPhotos}>
             {images&&images.map((i,index)=>
                <img src={i} key={index}  id={index} width='80' height='80' onClick={handleSelect} />
            )}
          </section>
          </div>

         
       </div>
    )
} 