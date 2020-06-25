import React from 'react';

import './App.css';
import './Footer.css'



import { IoLogoTwitter, IoLogoGithub, IoLogoYoutube } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import test from './images/outline.png'



function Footer() {
  return (
  	<div className="footer-container">
     <div className="row">
     <div className="column">
                <h1 className="footer-header">my rate is $1,000,000/hr, so please don’t contact me unless this is a serious inquiry.</h1>

     </div>
     <div className="column">
     <img src={test} className="portrait"></img>
     </div>
     </div>



  		<div className="row footer-row">
        	<div className="column">
        		<p className="footer-text"><b>questions? bored? just email me.</b></p>
        		<p className="footer-text">hi@abbeyyacoe.info</p>
        	</div>
        	<div className="column">
        		<p className="footer-text align-right"><b>copyright</b></p>
        		<p className="footer-text align-right">this site is new sorry about the bugs.</p>
        	</div>
          <div>
             <a href="https://twitter.com/abbeyyacoe"><IoLogoTwitter className="social-icon" /></a>
             <a href="https://github.com/abbeyyacoe"><IoLogoGithub className="social-icon" /></a>
             <a href="https://www.youtube.com/channel/UCam9p5fiexMSluubYBs6sNw"><IoLogoYoutube className="social-icon" /></a>
             <a href="https://instagram.com/abbbbbbeyyyyyyy"><FaInstagram className="social-icon" /></a>
             </div>
        </div>
        </div>
  );
}

export default Footer;