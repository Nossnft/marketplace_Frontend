import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GrClose } from 'react-icons/gr';
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
  TiArrowSortedDown,
  TiArrowSortedUp,
} from "react-icons/ti";

// INTERNAL IMPORT
import Style from './SideBar.module.css'; 
import images from '../../../img'; // Make sure the path to your images is correct
import Button from '../../Button/Button'; 

const SideBar = ({ setOpenSideMenu }) => {
  // --- useState
  const [openDiscover, setOpenDiscover] = useState(false);
  const [openHelp, setOpenHelp] = useState(false);

  // ------ Discover Navigation Menu
  const discover = [
    {
      name: "Collection",
      link: "collection", // Fixed the property name to 'link'
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
      link: "NFT-details",
    },
    {
      name: "Account-Setting",
      link: "account-setting",
    },
    {
      name: "Connect Wallet",
      link: "connect-wallet",
    },
    {
      name: "Blog",
      link: "blog",
    },
  ];

  // ----- HELP CENTER
  const helpCenter = [
    {
      name: "About",
      link: "about",
    },
    {
      name: "Contact Us",
      link: "contact-us",
    },
    {
      name: "Sign Up",
      link: "sign-up",
    },
    {
      name: "Sign In",
      link: "sign-in", // Fixed the typo in "Sing In"
    },
    {
      name: "Subscription",
      link: "subscription",
    },
  ];

  const openDiscoverMenu = () => {
    setOpenDiscover(!openDiscover); // Simplified the toggle
  };

  const openHelpMenu = () => {
    setOpenHelp(!openHelp); // Simplified the toggle
  };

  const closeSideBar = () => {
    setOpenSideMenu(false);
  };

  return (
    <div className={Style.SideBar}>
      <GrClose
        className={Style.SideBar_close_Btn}
        onClick={closeSideBar} // Corrected the function call
      />

      <div className={Style.SideBar_box}>
        <Image src={images.logo} alt="logo" width={150} height={150} />
        <p>Discover the most outstanding articles on all topics of NFT</p>
        <div className={Style.SideBar_social}>
          <a href="#">
            <TiSocialFacebook />
          </a>
          <a href="#">
            <TiSocialLinkedin />
          </a>
          <a href="#">
            <TiSocialTwitter />
          </a>
          <a href="#">
            <TiSocialYoutube />
          </a>
          <a href="#">
            <TiSocialInstagram />
          </a>
        </div>
      </div>
      <div className={Style.sideBar_menu}>
        <div>
          <div
            className={Style.sideBar_menu_box}
            onClick={openDiscoverMenu}
          >
            <p>Discover</p>
            <TiArrowSortedDown />
          </div>

          {openDiscover && (
            <div className={Style.sideBar_discover}>
              {discover.map((eL, i) => (
                <p key={i + 1}>
                  <Link href={eL.link}>{eL.name}</Link>
                </p>
              ))}
            </div>
          )}
        </div>

        <div>
          <div
            className={Style.sideBar_menu_box}
            onClick={openHelpMenu}
          >
            <p>Help Center</p>
            <TiArrowSortedDown />
          </div>

          {openHelp && (
            <div className={Style.sideBar_discover}>
              {helpCenter.map((eL, i) => (
                <p key={i + 1}>
                  <Link href={eL.link}>{eL.name}</Link>
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className={Style.sideBar_button}>
        <Button Btnname="Create" handleClick={() => {}} />
        <Button Btnname="Connect Wallet" handleClick={() => {}} />
      </div>
    </div>
  );
};

export default SideBar;
