import javascript from '../../icons/Javascript.jpg'
import css from '../../icons/css.png'
import react from '../../icons/react.png'
import redux from '../../icons/redux.jpg'
import postgreSQL from '../../icons/postgress.png'
import node from '../../icons/node.png'
import express from '../../icons/express.jpg'
import auth0 from '../../icons/auth 0.png'
import nodemailer from '../../icons/nodemailer.png'
import socket from '../../icons/socket.png'
import stripe from '../../icons/stripe.png'
import chakra from '../../icons/chakra.jpg'
import sequelize from '../../icons/sequelize.jpg'
import HTML from '../../icons/HTML.jpg'
import TypeScript from '../../icons/typescript.jpg'
export default function IconComponent ({name,width,height,styles}){
  
    let icon={
        javascript,
        css,
        react,
        redux,
        postgreSQL,
        node,
        express,
        nodemailer,
        auth0,
        socket,
        stripe,
        chakra,
        sequelize,
        HTML,
        TypeScript
     }
     const style= styles?styles:{}
    return (
        <div>
        {icon[name]&&
        <img className={name} alt={`${name} ima`} src={icon[name]} height={height} width={width} style={style}/>
        }
        <h5 style={{margin:'0'}}>{name}</h5>
        </div>
    )
}