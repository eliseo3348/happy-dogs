import React from "react";
import style from "./styles.module.css"
import divide from 'lodash/divide'

export default function Profile(){
  const photo = ()=>{
    return <div className={style.photo}>Foto</div>
  }
  const info_person = () =>{
    return <div className={style.profile}>Información personal</div>
  }
  return(
    <div>
      <div>{photo()}</div>
      <div>{info_person()}</div>
    </div>
  )
}
