import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// Import Icons

import { MdNotifications } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { CgMenuLeft, CgMenuRight } from "react-icons/cg";

import Style from "./NavBar.module.css";
import images from "../../img";
import Discover from "./Discover/Discover";
import SideBar from "./SideBar/SideBar";
import Button from "./Button/Button";
import HelpCenter from "./HelpCenter/HelpCenter";
import Notification from "./Notification/Notification";
import Profile from "./Profile/Profile";

const NavBar = () => {
  // useState
  const [discover, setDiscover] = useState(false);
  const [helpCenter, setHelpCenter] = useState(false);
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);
  const [openSideBar, setOpenSideBar] = useState(false);

  const openMenu = (e) => {
    const btnText = e.target.innerText 
    if (btnText == "Discover") {
      setDiscover(!discover);

      setHelpCenter(false);

      setNotification(false);

      setProfile(false);
    } else if (btnText == "Help Center") {
      setDiscover(false);
      setHelpCenter(!helpCenter);
      setNotification(false);
      setProfile(false);
    
    } else {
      setDiscover(false);
      setHelpCenter(false);
      setNotification(false);
      setProfile(false);
    }
  };

  const OpenSideBar = () => {
    if (!openSideBar) {
      setOpenSideBar(true);
    } else {
      setOpenSideBar(false);
    }
  }

  const openNotification = () => {
   
      setDiscover(false);
      setHelpCenter(false);
      setNotification(!notification);
      setProfile(false);
   
  }
  const openProfile = () => {
   
      setDiscover(false);
      setHelpCenter(false);
      setNotification(false);
      setProfile(!profile);
   
  }

  return (
    <div className={Style.navbar}>
      <div className={Style.navbar_container}>
        <div className={Style.navbar_container_left}>
          <div className={Style.logo}>
            <Image
              src={images.logo}
              alt='NFT Marketplace Logo'
              height={100}
              width={100}
            />
          </div>
          <div className={Style.navbar_container_left_box_input}>
            <div className={Style.navbar_container_left_box_input_box}>
              <input type='text' placeholder='Search NFT' />
              <BsSearch className={Style.search_icon} onClick={() => {}} />
            </div>
          </div>
        </div>
        {/* End of left section */}
        <div className={Style.navbar_container_right}>
          {/* discover menu */}
          <div className={Style.navbar_container_right_discover}>
            <p
              onClick={(e) => {
                openMenu(e);
              }}
            >
              Discover
            </p>
            {discover && (
              <div className={Style.navbar_container_right_discover_box}>
                <Discover />
              </div>
            )}
          </div>
          {/* help center menu */}
          <div className={Style.navbar_container_right_help}>
            <p
              onClick={(e) => {
                openMenu(e);
              }}
            >
              Help Center
            </p>
            {helpCenter && (
              <div className={Style.navbar_container_right_help_box}>
                <HelpCenter />
              </div>
            )}
          </div>
          {/* notification menu */}
          <div className={Style.navbar_container_right_notification}>
            <MdNotifications  className={Style.notification_icon} onClick={(e) => {
                openNotification();
              }}/>
           
            {notification && (
              <div className={Style.navbar_container_right_notification_box}>
                <Notification />
              </div>
            )}
          </div>

          {/* create button */}
          <div className={Style.navbar_container_right_button}>
            <Button text="Create" />
          </div>
          {/* User profile */}
          <div className={Style.navbar_container_right_profile}>
            <Image className={Style.navbar_container_right_profile} src={images.user1} alt='Profile' width={50} height={50} onClick={() => {openProfile()}}/>
            {profile && (
              <div className={Style.navbar_container_right_profile_box}>
                <Profile />
              </div>
            )}</div>
            {/* Menu button */}
            <div className={Style.navbar_container_right_menuBtn}>
<CgMenuRight onClick={() => {OpenSideBar()}} className={Style.menuIcon}/>
                </div>
        </div>
      </div>
      {/* Sidebar */}
      {openSideBar && <div className={Style.sideBar}>
        <SideBar setOpenSideBar={setOpenSideBar}/>
      </div> }
    </div>
  );
};

export default NavBar;
