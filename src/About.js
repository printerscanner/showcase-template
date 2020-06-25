import React from "react";

import './App.css';
import './About.css';

import BookInfo from './BookInfo'


function About() {
  return (

    <div className="about-container">

    <h1 className="about-header">somewhere between an art director and a software developer, think of me as your go-to gen z for getting new projects off the ground.</h1>
    <h1 className="about-header right">born and raised in the silicon valley i’ve been doing this all my life which means i know what works and what doesn’t and that we’d all rather be outside.</h1>
    <h1 className="about-header">i’m working on some great projects right now which hopefully will be up shortly, but for now enjoy some old projects and the random stuff i’ve been making on illustrator.</h1>
    <br></br><br></br>
    <br></br><br></br>
    <br></br><br></br>
<nav>
    <ul className="about-ul">
      <li className="about-information "><a href="https://instagram.com/abbbbbbeyyyyyyy"><b>instagram</b><p>photos shot on a fujifilm x100f.</p></a></li>
      <li className="about-information "><a href="https://www.youtube.com/watch?v=wdlF6pFxczE"><b>youtube</b><p>watch me travel the world in super low def.</p></a></li>
      <li className="about-information "><a href="https://twitter.com/abbeyyacoe"><b>twitter</b><p>spicy takes on the most banal things.</p></a></li>
      <li className="about-information "><a href="https://linkedin.com/in/abbeyyacoe"><b>linkedin</b><p>i have over 500 connections ;)</p></a></li>
      <li className="about-information "><a href="https://github.com/abbeyyacoe"><b>github</b><p>most of the good stuff is private.</p></a></li>
      <li className="about-information  last"><BookInfo /></li>



    </ul>

    </nav>
  </div>

  );
};
export default About;