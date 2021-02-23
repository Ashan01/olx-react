import React from "react";
import Header from "../components/header/header";
import ImageBanner from "../components/ImageBanner/ImageBanner";
import ProductsListComponent from "../components/ProuctsBox/products";
import FooterBanner from "../components/FooterBanner/footerBanner";
import FooterLinks from "../components/FooterLinks/footerLinks";
import FooterBar from "../components/footerBar/footerBar";

export default function Home() {
   return (
      <div>
         <Header />
         <ImageBanner />
         <ProductsListComponent />
         <FooterBanner />
         <FooterLinks />
         <FooterBar />
      </div>
   );
}
