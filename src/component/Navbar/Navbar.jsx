import React from 'react'
import navbarStyle from './navbar.module.css'
import logo from '../../assets/Netflix_Logo.png'
import { BsSearch } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = () => {
  return (
    <div className={navbarStyle.navbar}>
      {/* left side navbar */}
      <div className={navbarStyle.navbar_left}>
        <img src={logo} alt="Netflix logo" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>MyList</li>
          <li>Brows By Language</li>
        </ul>
      </div>
      {/* right side navbar */}
      <div className={navbarStyle.navbar_right}>
        <span>
          <BsSearch size={25} />
        </span>
        <p>Childern</p>
        <span>
          <IoIosNotificationsOutline size={25} />
        </span>
        <div className={navbarStyle.navbar_right_profile}>
          <div>
            <CgProfile size={25} />
          </div>
          <div>
            <IoMdArrowDropdown />
          </div>
          <div className={navbarStyle.dropdown}>
            <p>Sign Out</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar