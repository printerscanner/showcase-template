import React, { useState, useEffect } from "react";

import './App.css';
import './Hero.css';

import Idea from './images/1.svg';

const API_KEY = process.env.REACT_APP_WEATHER;

const time = new Date();


function Nav() {
  const [data, setWeather] = useState({});
  const [message, setMessage] = useState({});


  async function fetchData() {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=imperial&q=Phoenix&APPID=${API_KEY}`);
    res
      .json()
      .then(res => setWeather(res))
  }

  useEffect(() => {
    fetchData();
  }, []);

async function setTime() {
  const hours = time.getHours();
  let message = "";

   if (hours === 23 || hours <= 9) {
      message = "probably sleeping"
    }
    if (hours === 10 || hours === 11) {
      message = "probably drinking coffee and checking email"
    }
    if (hours === 12 || hours === 13 ) {
      message = "probably hard at work and online"
    }
    if (hours === 14 || hours === 15 ) {
      message = "probably working on the new album"
    }
    if (hours === 16 || hours === 17) {
      message = "probably practicing russian"
    }
    if (hours === 18 || hours === 19) {
      message = "probably cooking dinner"
    }
    if (hours === 18 || (hours >= 18 && hours < 23)) {
      message = "probably playing cards or checking twitter"
    }
    setMessage(message)
}



  useEffect(() => {
    setTime()
  }, []);


  if (!data.weather) {
        return <span style={{display:"none"}} >Loading...</span>;

    }

var now = new Date();



  return (
    <div className="hero-container">
    <nav>
    <ul>
    <li className="nav-information"><p className="hello">hey, i’m abbey <span role="img" aria-label="wave">👋</span></p></li>

      <li className="nav-information"><b>currently</b><p>it’s  <span>{ new Date().toLocaleTimeString('en-US', { hour12: false, hour: "numeric", minute: "numeric"}) }</span>, and a beautiful <span>{Math.round(data.main && data.main.temp)}</span>°F with <span>{data.weather !== 'undefined' && data.weather[0].description}</span> and i'm somewhere on the west coast USA right now, <span> { message }</span>.</p></li>

      <li className="nav-information"><b>previously</b><p>programming at the large synoptic survey telescope, art directing at xyz, and organizing data at parrable.</p></li>

      <li className="nav-information email-link"><b>site updated</b><p>april 5, 2020</p></li>

    </ul>

    </nav>
    <div className="header-container">
      <h1>i don’t even like the internet<span style={{color: "#FF9E00"}}>.</span></h1>
      <img src={Idea} className="subheader" alt="and i know you don't either"></img>
    </div>
  </div>

  );
};
export default Nav;