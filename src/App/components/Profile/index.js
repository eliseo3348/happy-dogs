import React, {useState} from "react";
import style from "./styles.module.css"
import divide from 'lodash/divide'
import Flexbox from 'flexbox-react';
import { Grid, Row, Col } from 'react-flexbox-grid';

export default function Profile(){
const [counter,setCounter]=useState(0);

  const photo = ()=>{
    return  <div className={style.photo}>
              <img src="https://www.w3schools.com/images/w3schools_green.jpg" alt="W3Schools.com" /><br />
              Nickname
            </div>
  }
  const info_person = () =>{
    return <div className={style.profile}>
      Información personal<br />
      Nombre:     <br />
      Edad:       <br />
      Blablabla:  <br />
      </div>
  }
  const calificacion = () =>{
    return  <div className={style.calificacion}><div>{counter}
              <button onClick={()=>setCounter(counter+1)}>Like</button>
              </div>
            </div>
  }

const mail_text = () =>{
  return  <div className={style.mail_text}>
            <input type="text"></input>
          </div>
}
const send_mail = () =>{
  return  <div className={style.send_mail}><div>
            <button>Enviar!</button>
            </div>
          </div>
}
  return(
    <div className={style.general}>
      <div align="center">{photo()}</div><br /><br /><br />
      <div className='row'>
        <div className='col-xs-12 col-sm-6'>
          <div>{info_person()}</div>
        </div>
        <div className='col-xs-12 col-sm-6'>
            <div> {calificacion()}</div>
        </div>
      </div>
      <div>
        <div className='row'>
          <div className='col-xs-12 col-sm-3'>
            <div>{mail_text()}</div>
          </div>
          <div className='col-xs-12 col-sm-3'>
              <div> {send_mail()}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
