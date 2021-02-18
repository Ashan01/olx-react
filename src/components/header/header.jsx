import React from "react";
import "./header.module.css";
import Olx from "../../assets/img/olx.png";

export default function Header() {
   return (
      <header>
         <div id="logo">
            <img src={Olx} height={42} widht={42} alt="logo" />
         </div>
         <div id="countrySerch"></div>
         <div id="iteamSerch"></div>
         <div id="icons"></div>
      </header>
   );
}
