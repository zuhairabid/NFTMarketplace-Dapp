import Link from 'next/link'
import React from 'react'

import Style from "./Discover.module.css"
const Discover = () => {
  const discover = [{
    name:"Collection",
    link:"collection"
  },
  {
    name:"Search",
    link:"search"
  },
  {
    name:"Author Profile",
    link:"author-profile"
  },
  {
    name:"NFT Details",
    link:"nft-details"
  }
  ,
  {
    name:"Account Setings",
    link:"account-setings"
  },
  {
    name:"Connect Wallet",
    link:"connect-wallet"
  }
]
  return (
    <div>{discover.map((el,i)=>(
      <div key={i+1} className={Style.discover}>
        <Link href={{pathname:`${el.link}`}}>{el.name}</Link>
      </div>
    ))}</div>
  )
}

export default Discover