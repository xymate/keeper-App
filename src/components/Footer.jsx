import React from "react";

function Footer(){

    const year=new Date().getFullYear();

 return <footer>
   <p>Made with love by Yash chauhan</p>
    Copyright {year}
 </footer>   
}

export default Footer;