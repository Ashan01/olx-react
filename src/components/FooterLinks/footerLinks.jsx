import React from "react";
import Grid from "@material-ui/core/Grid";
import Style from "./footerlink.module.css";
import FbImage from "../../assets/img/facebook-brands.svg";
import WhatsApp from "../../assets/img/whatsapp-brands.svg";
import Instagram from "../../assets/img/instagram-brands.svg";
import Twitter from "../../assets/img/twitter-brands.svg";
import AppStore from "../../assets/img/appstore.png";
import playstore from "../../assets/img/playstore.png";
import Hidden from "@material-ui/core/Hidden";

export default function FooterLinks() {
   return (
      <footer className={Style.footer}>
         <Grid container>
            <Grid md={9} lg={9} xl={9} className={Style.FooterGrid}>
               <div className={Style.footer_li}>
                  <span>Category</span>
                  <ul>
                     <li>
                        <a href="#">Car</a>
                     </li>
                     <li>
                        <a href={"#"}>Flat for rent</a>
                     </li>
                     <li>
                        <a href={"#"}>Jobs</a>
                     </li>
                     <li>
                        <a href={"#"}>Mobile Phones</a>
                     </li>
                  </ul>
               </div>
               <div className={Style.footer_li}>
                  <span>Serches</span>
                  <ul>
                     <li>
                        <a href={"#"}>Bike</a>
                     </li>
                     <li>
                        <a href={"#"}>Watches </a>
                     </li>
                     <li>
                        <a href={"#"}>Books</a>
                     </li>
                     <li>
                        <a href={"#"}>Cats</a>
                     </li>
                  </ul>
               </div>
               <div className={Style.footer_li}>
                  <span>About Us</span>
                  <ul>
                     <li>
                        <a href={"#"}>About Olx Group</a>
                     </li>
                     <li>
                        <a href={"#"}>Olx Blogs</a>
                     </li>
                     <li>
                        <a href={"#"}>Contact Us</a>
                     </li>
                     <li>
                        <a href={"#"}>Olx Business</a>
                     </li>
                  </ul>
               </div>
               <div className={Style.footer_li}>
                  <span>Olx</span>
                  <ul>
                     <li>
                        <a href={"#"}> Help</a>
                     </li>
                     <li>
                        <a href={"#"}>Site map</a>
                     </li>
                     <li>
                        <a href={"#"}>Cookies</a>
                     </li>
                     <li>
                        <a href={"#"}>legal & Privacy Information</a>
                     </li>
                  </ul>
               </div>
            </Grid>
            <Grid md={3} lg={3} xl={3} className={Style.footer_li_icons}>
               <Hidden only={["xs", "sm"]}>
                  <span> FOLLOW US </span>
                  <div>
                     <img src={FbImage} width={30} height={30} alt="" />
                     <img src={WhatsApp} width={30} height={30} alt="" />
                     <img src={Instagram} width={30} height={30} alt="" />
                     <img src={Twitter} height={30} alt="" />
                  </div>

                  <div className={Style.row_1}>
                     <img src={AppStore} width={94} height={26} alt="" />

                     <img src={playstore} width={94} height={26} alt="" />
                  </div>
               </Hidden>
            </Grid>
         </Grid>
      </footer>
   );
}
