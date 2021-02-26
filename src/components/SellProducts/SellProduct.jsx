import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Style from "./SellProduct.module.css";
import firebase from "firebase/app";
import { useParams } from "react-router-dom";

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

   // console.log(firebaseData[id]);
   if (!firebaseData[id]) {
      return <h1>loading.....</h1>;
   }
   return (
      <div className={Style.mainDiv}>
         <Grid container spacing={3}>
            <Grid item xs={9}>
               <div className={Style.imageContainer}>
                  <img src={firebaseData.id.ImageUrl_1} alt="productImage" />
               </div>
            </Grid>
            <Grid item xs={3}>
               <div className={Style.price}>
                  {/* <h1>RS: {firebaseData[id]}</h1> */}
               </div>
               <div className={Style.SellerDesc}></div>
            </Grid>
         </Grid>
         <Grid xs={9}>
            <div className={Style.details}></div>
         </Grid>
         <Grid xs={9}>
            <div className={Style.description}></div>
         </Grid>
      </div>
   );
}
