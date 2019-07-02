import React from "react";
import style from "./styles.module.css"
import divide from 'lodash/divide'
import Flexbox from 'flexbox-react';
import { Grid, Row, Col } from 'react-flexbox-grid';

export default function Profile(){
  const photo = ()=>{
    return  <div className={style.photo}>
              <div>
                  <img src="https://www.w3schools.com/images/w3schools_green.jpg" alt="W3Schools.com" />
              </div>
              <div>
                  <p>Nickname</p>
              </div>
            </div>
  }
  return (
    <div className={style.general}>
        <div>{photo()}</div>
    </div>

  );

}
