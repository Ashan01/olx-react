import React from "react";
import Style from "./products.module.css";
import Grid from "@material-ui/core/Grid";
import Image from "../../assets/img/project-8.jpg";

export default function ProductsListComponent() {
   return (
      <div className={Style.mainDiv}>
         <h1>Fresh Recomandation</h1>

         <Grid container>
            <Grid xs={3}>
               <div className={Style.productCol}>
                  <div className={Style.products_img}>
                     <img src={Image} alt="productImage" />
                  </div>
                  <div className={Style.products_price}>
                     <h5>Rs: 20,000</h5>
                  </div>
                  <div className={Style.products_desc}>
                     <p>Lorem, ipsum.lorme Lorem ipsum dolor sit amet.</p>
                  </div>
                  <div className={Style.products_city}>
                     <p>Karachi</p>
                  </div>
               </div>
            </Grid>
            <Grid xs={3}>
               <div className={Style.productCol}>
                  <div className={Style.products_img}>
                     <img src={Image} alt="productImage" />
                  </div>
                  <div className={Style.products_price}>
                     <h5>Rs: 20,000</h5>
                  </div>
                  <div className={Style.products_desc}>
                     <p>Lorem, ipsum.lorme Lorem ipsum dolor sit amet.</p>
                  </div>
                  <div className={Style.products_city}>
                     <p>Karachi</p>
                  </div>
               </div>
            </Grid>
            <Grid xs={3}>
               <div className={Style.productCol}>
                  <div className={Style.products_img}>
                     <img src={Image} alt="productImage" />
                  </div>
                  <div className={Style.products_price}>
                     <h5>Rs: 20,000</h5>
                  </div>
                  <div className={Style.products_desc}>
                     <p>Lorem, ipsum.lorme Lorem ipsum dolor sit amet.</p>
                  </div>
                  <div className={Style.products_city}>
                     <p>Karachi</p>
                  </div>
               </div>
            </Grid>
            <Grid xs={3}>
               <div className={Style.productCol}>
                  <div className={Style.products_img}>
                     <img src={Image} alt="productImage" />
                  </div>
                  <div className={Style.products_price}>
                     <h5>Rs: 20,000</h5>
                  </div>
                  <div className={Style.products_desc}>
                     <p>Lorem, ipsum.lorme Lorem ipsum dolor sit amet.</p>
                  </div>
                  <div className={Style.products_city}>
                     <p>Karachi</p>
                  </div>
               </div>
            </Grid>
            <Grid xs={3}>
               <div className={Style.productCol}>
                  <div className={Style.products_img}>
                     <img src={Image} alt="productImage" />
                  </div>
                  <div className={Style.products_price}>
                     <h5>Rs: 20,000</h5>
                  </div>
                  <div className={Style.products_desc}>
                     <p>Lorem, ipsum.lorme Lorem ipsum dolor sit amet.</p>
                  </div>
                  <div className={Style.products_city}>
                     <p>Karachi</p>
                  </div>
               </div>
            </Grid>
            <Grid xs={3}>
               <div className={Style.productCol}>
                  <div className={Style.products_img}>
                     <img src={Image} alt="productImage" />
                  </div>
                  <div className={Style.products_price}>
                     <h5>Rs: 20,000</h5>
                  </div>
                  <div className={Style.products_desc}>
                     <p>Lorem, ipsum.lorme Lorem ipsum dolor sit amet.</p>
                  </div>
                  <div className={Style.products_city}>
                     <p>Karachi</p>
                  </div>
               </div>
            </Grid>
         </Grid>
      </div>
   );
}
