import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Style from "./SellProduct.module.css";
import firebase from "firebase/app";
import { useParams } from "react-router-dom";
import Hidden from "@material-ui/core/Hidden";

export default function SellProducts() {
   let { id } = useParams();
   let [firebaseData, setFirebaseData] = useState({});
   useEffect(() => {
      try {
         let getData = async () => {
            await firebase
               .database()
               .ref("sellIteam")
               .on("value", function (data) {
                  setFirebaseData(data.val());
               });
         };
         getData();
      } catch (error) {
         console.log(error);
      }
   }, []);

   console.log(firebaseData[id]);
   if (!firebaseData[id]) {
      return <h1>loading.....</h1>;
   }
   return (
      <div className={Style.mainDiv}>
         <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
               <div className={Style.imageContainer}>
                  <img src={firebaseData[id].ImageUrl_1} alt="productImage" />
               </div>
            </Grid>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
               <div className={Style.price}>
                  <span>Rs: {firebaseData[id].inpPrice_1}</span>
               </div>
               <Hidden smDown>
                  <div className={Style.SellerDesc}></div>
               </Hidden>
            </Grid>
         </Grid>
         <Grid xs={12} sm={12} md={9} lg={9} xl={9}>
            <div className={Style.details}>
               <h3>
                  <span>Details</span>
               </h3>
               <div>
                  <span className={Style.span_1}>Condition</span>
                  <span className={Style.span_2}>Used</span>
                  <span className={Style.span_1}>Type</span>
                  <span className={Style.span_2}>none</span>
               </div>
            </div>
         </Grid>
         <Grid xs={12} sm={12} md={9} lg={9} xl={9}>
            <div className={Style.description}>
               <h3>
                  <span>Description</span>
               </h3>
            </div>
         </Grid>
      </div>
   );
}
