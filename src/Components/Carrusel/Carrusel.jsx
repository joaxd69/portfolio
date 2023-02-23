import style from './Carrusel.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft, faArrowCircleRight} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react'

export default function Carrusel({images}){
      const [actualImage,setActualImage]= useState(0)
      const [respImage,setRespImage]=useState(false)
      const [lastimage,setLastImage]=useState(0)
       useEffect(()=>{
         let imagenact= document.getElementById(actualImage)
         let lasstimage= document.getElementById(lastimage)
        const action =()=>{
          
             lasstimage.style.border='none'
            images[actualImage].includes('resp')?setRespImage(true):setRespImage(false)
            imagenact.style.border='2px solid red'
            setLastImage(actualImage)
        }
        action()
       },[actualImage,images,lastimage])

       const handleNext = (e)=>{
        e.preventDefault();
       
       actualImage<images.length-1&&setActualImage(actualImage+1);
       actualImage===images.length-1&&setActualImage(0)
      }
    

      const handlePrev = (e)=>{
      e.preventDefault();
      actualImage>0&&setActualImage(actualImage-1);
      actualImage===0&&setActualImage(images.length-1)
      }

      const handleSelect = (e)=>{
        e.preventDefault();
        setActualImage(parseInt(e.target.id));
      }
    return (
       <div className={style.FirstContainer}>
          <div className={style.Carrusel}> 
           { respImage?<img src={images[actualImage]} alt=""  className={style.Imageresp} />:
             <img src={images[actualImage]} alt=""  className={style.Imageweb} />
           }
          </div>

          <div className={style.ButtonsCarrusel}>
                <button onClick={handlePrev} >
                    <FontAwesomeIcon icon={faArrowCircleLeft}/>
                </button>
                <button onClick={handleNext} >
                <FontAwesomeIcon icon={faArrowCircleRight}/> 
                </button> 
            </div>
 <section className={style.PrevPhotos} >
             {images&&images.map((i,index)=>
                <img src={i} key={index} alt={i} id={index}  onClick={handleSelect} className='imagen' />
            )}
          </section>
         
       </div>
    )
} 