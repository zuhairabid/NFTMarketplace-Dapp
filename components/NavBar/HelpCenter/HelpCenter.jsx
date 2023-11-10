import React from 'react'
import Style from './HelpCenter.module.css'
import Link from 'next/link'
const HelpCenter = () => {
  const helpCenterItems = [{
    name:"About",
    link:"about"
  },
  {
    name:"Contact Us",
    link:"contact-us"
  },
  {
    name:"Sign Up",
    link:"sign-up"
  },
  {
    name:"Sign In",
    link:"sign-in"
  }
  ,
  {
    name:"Subscription",
    link:"subscription"
  },

]
  return (
    <div>{helpCenterItems.map((el,i)=>(
      <div key={i+1} className={Style.helpCenter}>
        <Link href={{pathname:`${el.link}`}}>{el.name}</Link>
      </div>
    ))}</div>
  )
}


export default HelpCenter