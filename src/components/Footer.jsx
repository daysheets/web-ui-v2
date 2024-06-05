import React, { useState } from "react";
import styles from "../styles";
import { logotype } from "../assets";
import HelpPopup from "./HelpPopup";

const Footer = () => {
  const privacyLink = "https://www.iubenda.com/privacy-policy/79370408";
  const termsLink = "https://www.iubenda.com/terms-and-conditions/79370408";

  const [popupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div className={`${styles.sectionBoxSmall} bg-gray w-full`}>
      <HelpPopup isOpen={popupOpen} onClose={closePopup} formId="hero-form" />
      <div className={`${styles.contentBox} px-4`}>
        <div className="flex flex-col items-center gap-[32px]">
          <img
            src={logotype}
            alt="Daysheets Logotype"
            className="Daysheets Logotype"
          />
          <ul className="flex flex-row text-darkBlue gap-[16px]">
            <li onClick={openPopup} className="cursor-pointer">
              Help
            </li>
            <a href={privacyLink}>Privacy Policy</a>
            <a href={termsLink}>Terms of Use</a>
          </ul>

          <div className={`h-[1px] w-full bg-darkBlue`}></div>
          <p className={`${styles.body} text-darkBlue`}>
            © 2024 Daysheets. All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
