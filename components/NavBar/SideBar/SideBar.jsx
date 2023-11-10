import React, { useState } from "react";

import Link from "next/link";
import { GrClose } from "react-icons/gr";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialYoutube,
  TiSocialTwitter,
  TiSocialInstagram,
  TiArrowSortedDown,
  TiArrowSortedUp,
} from "react-icons/ti";

// Internal Imports
import Style from "./SideBar.module.css";
import images from "../../../img";
import Button from "../Button/Button";
import Image from "next/image";

const SideBar = ({setOpenSideBar}) => {
  // Use States
  const [openDiscover, setOpenDiscover] = useState(false);
  const [openHelpCenter, setOpenHelpCenter] = useState(false);

  const discover = [
    {
      name: "Collection",
      link: "collection",
    },
    {
      name: "Search",
      link: "search",
    },
    {
      name: "Author Profile",
      link: "author-profile",
    },
    {
      name: "NFT Details",
      link: "nft-details",
    },
    {
      name: "Account Setings",
      link: "account-setings",
    },
    {
      name: "Connect Wallet",
      link: "connect-wallet",
    },
  ];

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
    <div className={Style.sideBar}>
      <GrClose
        className={Style.sideBar_closeBtn}
        onClick={() => setOpenSideBar(false)}
      />
      <div className={Style.sideBar_box}>
        <Image src={images.logo} alt='Logo' width={150} height={150} />
        <p>
          Discover the most outstanding articles on all topics of NFT & your own
          stories and share them
        </p>
      </div>
      <div className={Style.sideBar_socials}>
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

      <div className={Style.sidebar_menu}>
        <div>
          {/* SIDEBAR DISCOVER */}
          <div
            className={Style.sidebar_menu_box}
            onClick={() => setOpenDiscover(!openDiscover)}
          >
            <p>Discover</p>
            <TiArrowSortedDown />
          </div>
          {openDiscover && (
            <div className={Style.sidebar_discover}>
              {discover.map((el, i) => (
                <Link href={{ pathname: `${el.link}` }} key={i + 1}>
                  <p>{el.name}</p>
                </Link>
              ))}
            </div>
          )}
          {/* SIDEBAR HELP */}
          <div
            className={Style.sidebar_menu_box}
            onClick={() => setOpenHelpCenter(!openHelpCenter)}
          >
            <p>Help Center</p>
            <TiArrowSortedDown />
          </div>
          {openHelpCenter && (
            <div className={Style.sidebar_discover}>
              {helpCenterItems.map((el, i) => (
                <Link href={{ pathname: `${el.link}` }} key={i + 1}>
                  <p>{el.name}</p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className={Style.sidebar_button}>
        <Button text="Create"/>
        <Button text="Connect Wallet"/>
      </div>
    </div>
  );
};

export default SideBar;
