import React from 'react'
import Image from 'next/image'

// Internal Imports
import Style from './HeroSection.module.css'
import images from '../../img'
import Button from '../NavBar/Button/Button'

function HeroSection() {
  return (
    <div className={Style.heroSection}>
        <div className={Style.heroSection_box}>
            <div className={Style.heroSection_box_left}>

            <h1>Discover, Collect and Sell NFT's</h1>
            <p>DIscover the most popular NFT's in all categories buy, sell and resell them</p>
            <Button text="Start Exploring"/>
            </div>
            <div className={Style.heroSection_box_right}>
                <Image src={images.hero} alt='Hero Section' width={600} height={600}/>
            </div>
        </div>
    </div>
  )
}

export default HeroSection