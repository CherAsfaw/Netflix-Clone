import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import footerStyle from "./footer.module.css";
import XIcon from "@mui/icons-material/X";

function Footer() {
  return (
    <>
      <div className={footerStyle.footer}>
        <div className={footerStyle.footer_icon}>
          <div className={footerStyle.icon}>
            <FacebookOutlinedIcon />
          </div>
          <div className={footerStyle.icon}>
            <InstagramIcon />
          </div>
          <div className={footerStyle.icon}>
            <YouTubeIcon />
          </div>
          <div className={footerStyle.icon}>
            <XIcon />
          </div>
        </div>
        <div className={footerStyle.footer_list}> 
            <ul>
              <li>Audio Description</li>
              <li>Investor Relations</li>
              <li>Legal Notice</li>
            </ul>
            <ul>
              <li>Help Center</li>
              <li>Investor Relations</li>
              <li>Cookie Preferences</li>
            </ul>        
            <ul>
              <li>Gift Cards</li>
              <li>Terms of Use</li>
              <li>Corporate Information</li>
            </ul>        
            <ul>
              <li>Media Center</li>
              <li>Privacy</li>
              <li>Contact Center</li>
            </ul>
          </div>
      </div>
      <div className={footerStyle.footer_footer}>
        <p>Service Code</p>
        <div>&copy; 1997-2025 Netflix, Inc</div>
      </div>
    </>
  );
}

export default Footer;
