import React from 'react'
import Style from './Button.module.css'
const Button = ({text,handleClick}) => {
  return (
    <div className={Style.box}>
      <button className={Style.button} onClick={handleClick}>
        {text}
      </button>
    </div>
  )
}

export default Button