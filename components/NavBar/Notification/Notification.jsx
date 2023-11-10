import React from "react";

import Style from "./Notification.module.css";

import images from "../../../img";
import Image from "next/image";
const Notification = () => {
  return (
    <div className={Style.notification}>
      <p>Notification</p>
      <div className={Style.notification_box}>
        <div className={Style.notification_box_img}>
          <Image
            className={Style.notification_box_img}
            src={images.user1}
            alt='Profile Image'
            width={50}
            height={50}
          />
        </div>
        <div className={Style.notification_box_info}>
          <h4>Shoaib Akter</h4>
          <p>Measure Action your user...</p>
          <small>3 minutes ago</small>
        </div>
        <span className={Style.notification_box_new}></span>
      </div>
    </div>
  );
};

export default Notification;
