import React from "react";

import { FaUserAlt, FaRegImage, FaUserEdit } from "react-icons/fa";
import { MdHelpCenter } from "react-icons/md";
import { TbNotification, TbDownload } from "react-icons/tb";

// Internal imports
import Style from "./Profile.module.css";
import images from "../../../img";
import Link from "next/link";
import Image from "next/image";
const Profile = () => {
  return (
    <div className={Style.profile}>
      <div className={Style.profile_account}>
        <Image src={images.user1} alt='Profile Image' width={50} height={50} />
        <div className={Style.profile_account_info}>
          <p>Shoaib Bhai</p>
          <small>xxxxxxxxxxxxx.....</small>
        </div>
      </div>
      <div className={Style.profile_menu}>
        <div className={Style.profile_menu_one}>
          <div className={Style.profile_menu_one_item}>
            <FaUserAlt />
            <p>
              <Link href={{ pathname: "/profile" }}>My Profile</Link>
            </p>
          </div>
          <div className={Style.profile_menu_one_item}>
            <FaRegImage />
            <p>
              <Link href={{ pathname: "/profile" }}>My Items</Link>
            </p>
          </div>
          <div className={Style.profile_menu_one_item}>
            <FaUserEdit />
            <p>
              <Link href={{ pathname: "/profile" }}>Edit Profile</Link>
            </p>
          </div>
        </div>
        <div className={Style.profile_menu_one}>
          <div className={Style.profile_menu_one_item}>
            <MdHelpCenter />
            <p>
              <Link href={{ pathname: "/profile" }}>Help Center</Link>
            </p>
          </div>
          <div className={Style.profile_menu_one_item}>
            <TbNotification />
            <p>
              <Link href={{ pathname: "/help" }}>Help</Link>
            </p>
          </div>
          <div className={Style.profile_menu_one_item}>
            <TbDownload />
            <p>
              <Link href={{ pathname: "/disconnect" }}>Disconnect</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
