import React from "react";
import Style from "./footerBar.module.css";
import Grid from "@material-ui/core/Grid";

export default function FooterBar() {
   return (
      <Grid container className={Style.footer_end}>
         <Grid xs={5}>
            <span className={Style.span_1}>Other Countries</span>
            <span className={Style.span_2}>
               India - South Africa - Indonesia
            </span>
         </Grid>

         <Grid xs={4}></Grid>
         <Grid xs={3}>
            <span className={Style.span_1}>Free Classifieds in Pakistan </span>
            <span className={Style.span_2}>. © 2006-2020 OLX</span>
         </Grid>
      </Grid>
   );
}
