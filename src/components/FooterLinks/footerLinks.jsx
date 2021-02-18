import React from "react";
import Grid from "@material-ui/core/Grid";
import Style from "./footerlink.module.css";

export default function FooterLinks() {
   return (
      <footer>
         <Grid container>
            <Grid xs={9}>
               <div className="d-flex">
                  <div className={Style.footer_li}>
                     <span>Popular Category</span>
                     <ul>
                        <li>
                           <a href={"#"}>Car</a>
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
                     <span>Trending Serches</span>
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
                           <a href={"#"}>Help</a>
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
               </div>
            </Grid>
            <Grid xs={3}></Grid>
         </Grid>
      </footer>
   );
}
