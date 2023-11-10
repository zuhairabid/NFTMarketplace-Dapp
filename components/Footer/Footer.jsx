import React from "react";

import Link from "next/link";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialYoutube,
  TiSocialTwitter,
  TiSocialInstagram,
  TiArrowSortedDown,
  TiArrowSortedUp,
} from "react-icons/ti";
import Image from "next/image";
import { RiSendPlaneFill } from "react-icons/ri";

// Internal Imports
import Style from "./Footer.module.css";
import images from "../../img";
import Discover from "../NavBar/Discover/Discover";
import HelpCenter from "../NavBar/HelpCenter/HelpCenter";

function Footer() {
  return (
    <div className={Style.footer}>
      <div className={Style.footer_box}>
        <div className={Style.footer_box_social}>
          <Image src={images.logo} alt='logo' />
          <p>
            The World's first largest digital marketplace for crypto
            collectibles and non-fungible tokens (NFTs)
          </p>
          <div className={Style.footer_social}>
            <a href='#'>
              <TiSocialFacebook />
            </a>
            <a href='#'>
              <TiSocialLinkedin />
            </a>
            <a href='#'>
              <TiSocialYoutube />
            </a>
            <a href='#'>
              <TiSocialTwitter />
            </a>
            <a href='#'>
              <TiSocialInstagram />
            </a>
          </div>
        </div>
        <div className={Style.footer_box_discover}>
          <h3>Discover</h3>
          <Discover />
        </div>
        <div className={Style.footer_box_help}>
          <h3>Help Center</h3>
          <HelpCenter />
        </div>

        <div className={Style.subscribe}>
        <div className={Style.subscribe_box}>
          <input type='email' placeholder='Enter your email' />
          <RiSendPlaneFill className={Style.subscribe_box_send} />
        </div>
        <div className={Style.subscribe_box_info}>
            <p>
                Disocver, collect and sell NFTs on the world's first largest digital marketplace
            </p>
        </div>
        </div>
    
          
      </div>
    </div>
  );
}

export default Footer;
