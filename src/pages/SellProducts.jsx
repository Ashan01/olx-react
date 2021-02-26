import React from "react";
import Header from "../components/header/header";
import SellProductsComponent from "../components/SellProducts/SellProduct";
import FooterLinks from "../components/FooterLinks/footerLinks";
import FooterBar from "../components/footerBar/footerBar";

export default function SellProducts() {
   return (
      <div>
         <Header />
         <SellProductsComponent />
         <FooterLinks />
         <FooterBar />
      </div>
   );
}
