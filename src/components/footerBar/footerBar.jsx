import React from "react";
import Style from "./footerBar.module.css";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";

export default function FooterBar() {
   return (
      <Grid container className={Style.footer_end}>
         <Hidden only={["xs", "sm"]}>
            <Grid md={6} lg={5} xl={5}>
               <span className={Style.span_1}>Other Countries</span>
               <span className={Style.span_2}>
                  India - South Africa - Indonesia
               </span>
            </Grid>

            <Grid md={2} lg={4} xl={4}></Grid>
         </Hidden>
         <Grid sm={6} md={4} lg={3} xl={3}>
            <span className={Style.span_1}>Free Classifieds in Pakistan </span>
            <span className={Style.span_2}>. © 2006-2020 OLX</span>
         </Grid>
      </Grid>
   );
}
