
import React from "react";

var d = new Date();
var currentYear = d.getFullYear();

const Footer = () => (
    <footer>
        <p>Copyright ⓒ {currentYear}</p>
    </footer>
);

export default Footer;

