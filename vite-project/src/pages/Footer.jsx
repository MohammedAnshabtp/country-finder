import React from "react";
import { FiTwitter } from "react-icons/fi";
import { SlSocialFacebook, SlSocialLinkedin } from "react-icons/sl";
import { TbBrandYoutube } from "react-icons/tb";

function Footer() {
  return (
    <footer className="px-footer">
      <div className="px-footer__socials">
        <div className="social-icon-wrapper">
          <SlSocialFacebook />
        </div>
        <div className="social-icon-wrapper">
          <FiTwitter />
        </div>
        <div className="social-icon-wrapper">
          <SlSocialLinkedin />
        </div>
        <div className="social-icon-wrapper">
          <TbBrandYoutube />
        </div>
      </div>
      <div className="px-footer__email">example@email.com</div>
      <div className="px-footer__copy">
        Copyright © 2025 Name. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
