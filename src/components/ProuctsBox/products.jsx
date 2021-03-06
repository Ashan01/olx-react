import React, { useState, useEffect } from "react";
import Style from "./products.module.css";
import Grid from "@material-ui/core/Grid";
// import firebase from "../../Config/firebaseConfig";
import firebase from "firebase/app";
import { Link } from "react-router-dom";

export default function ProductsListComponent() {
   let [firebaseData, setFirebaseData] = useState({});
   useEffect(() => {
      firebase
         .database()
         .ref("sellIteam")
         .on("value", function (data) {
            setFirebaseData(data.val());
         });
   }, []);

   return (
      <div className={Style.mainDiv}>
         <h1>Fresh Recomandation</h1>

         <Grid container>
            {Object.keys(firebaseData).map((val, ind) => {
               return (
                  <Grid item xs={6} sm={4} md={3} lg={3} key={ind}>
                     <Link to={`/home/${val}`} className={Style.link}>
                        <div className={Style.productCol}>
                           <div className={Style.products_img}>
                              <img
                                 src={firebaseData[val].ImageUrl_1}
                                 alt="productImage"
                              />
                           </div>
                           <div className={Style.products_price}>
                              <h5>{firebaseData[val].inpPrice_1}</h5>
                           </div>
                           <div className={Style.products_desc}>
                              <p>{firebaseData[val].inpDesc_1}</p>
                           </div>
                           <div className={Style.products_city}>
                              <p>{firebaseData[val].inpCity_1}</p>
                           </div>
                        </div>
                     </Link>
                  </Grid>
               );
            })}
         </Grid>
      </div>
   );
}
