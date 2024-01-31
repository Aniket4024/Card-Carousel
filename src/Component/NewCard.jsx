import React from 'react'
import style from "../CSS/NewCard.module.css"
import { IoLogoGithub, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";



const NewCard = () => {
  return (
    <div 
        className={style.card}
        style={{
            backgroundImage:`url(${"https://www.daksfirst.com/assets/images/amit.jpeg"})`
        }}
    >
        <div className={style.socialIcons}>
            <IoLogoGithub/>
            <IoLogoLinkedin/>
            <IoLogoTwitter/>
        </div>

        <div className={style.Details}>

        </div>
      
    </div>
  )
}

export default NewCard
