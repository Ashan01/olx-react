import React from "react";
import Grid from "@material-ui/core/Grid";
import Style from "./footerBanner.module.css";
import Image1 from "../../assets/img/appstore_2x.png";
import Image2 from "../../assets/img/playstore_2x.png";

export default function FooterBanner() {
   return (
      <div className={Style.mainDiv}>
         <Grid container>
            <Grid xs={5}>
               <div className={Style.footer_bg_img}></div>
            </Grid>
            <Grid xs={4}>
               <div className={Style.footer_banner_Text}>
                  <span>TRY THE OLX APP </span>
                  <p>
                     Buy, sell and find just about anything using the app on
                     your mobile.
                  </p>
               </div>
            </Grid>
            <Grid xs={3}>
               <div className={Style.footer_banner_link}>
                  <p>GET YOUR APP TODAY</p>

                  <div >
                     <img src={Image1} alt="appStore" />
                     <img src={Image2} alt="playStore" />
                  </div>
               </div>
            </Grid>
         </Grid>
      </div>
   );
}
