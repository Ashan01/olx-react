import React from "react";
import Header from "../components/header/header";
import ImageBanner from "../components/ImageBanner/ImageBanner";
import ProductsListComponent from "../components/ProuctsBox/products";
import FooterBanner from "../components/FooterBanner/footerBanner";

function App() {
   return (
      <div>
         <Header />
         <ImageBanner />
         <ProductsListComponent />
         <FooterBanner />
      </div>
   );
}

export default App;
