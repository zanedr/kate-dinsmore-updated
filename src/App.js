import React, { Component } from 'react';
import './App.css';
import './animate.css';

class App extends Component {
  render() {
    return (
      <div>
        <link href="https://fonts.googleapis.com/css?family=Raleway:200,400" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css?family=Titillium+Web:200" rel="stylesheet"/>
        <section className="parallax-scrolling" id="header">
          {/* <img className="montu-logo" src={require("./images/MONTUcolortransparent.png")}/> */}
          <div id="main-menu-social">
            <a className="main-social-links" href="https://www.facebook.com/katedinsmoremusic/">
              <img alt={"facebook icon"} className="menu-social-icon" src={require("./images/facebook.svg")}/>
            </a>
            <a className="main-social-links" href="https://twitter.com/horseysurprise">
              <img alt={"twitter icon"} className="menu-social-icon" src={require("./images/twitter.svg")}/>
            </a>
            <a className="main-social-links" href="https://www.instagram.com/katedinsmoremusic/">
              <img alt={"instagram icon"} className="menu-social-icon" src={require("./images/instagram.svg")}/>
            </a>
          </div>
          <div id="main-menu">
            {/*<a className="menu-links" id="main-menu-tour" href="#tour">tour</a>*/}
            <a className="menu-links" id="main-menu-music" href="#music">music</a>
            <a className="menu-links" id="main-menu-bio" href="#bio">bio</a>
            <a className="menu-links" id="main-menu-contact" href="#contact">contact</a>
          </div>
        <div className="main-title-container">
            <h3 className="animated fadeInDown main-title">
                Kate Dinsmore
            </h3>
            <img alt={"kate album cover"} src={require('./images/albumrelease.jpg')} className="animated fadeIn photo" />
        </div>
      </section>

      {/*<section className="parallax-scrolling" id="tour">*/}
        {/*<h2 id="tour-title">Shows</h2>*/}

      {/*</section>*/}

      <section className="parallax-scrolling" id="bio">
        <h2 id="bio-title">Bio</h2>
        {/*<img src={require('./images/albumgibson.jpg')} className="animated fadeIn bio-photo" />*/}
        <p className="bio-text">Whether she’s kicking your ass skiing, unicycling through her hometown of Olympia, WA, or messing around with
          new melodies and song lyrics on her guitar, Kate Dinsmore is always full of eye- and ear-catching surprises. But if
          one thing is for sure, it’s that music is her thing, day in and day out.</p>

        <p className="bio-text">Kate was a choir and musical theatre lover (read: nerd) from grade school through her college years at the
          University of Oklahoma, where she belted out her fair share of showtunes and did a little tap dancing, too. From
          there, she spent some time crooning on cruise ships and a few more years as the lead vocalist of Harumph, a
          Norman-based Americana band. After the trio parted ways in 2017, Kate made her way back to the PNW to her
          Seattle-area home, where she’s now calling the shots in a budding solo career of her own.</p>

        <p className="bio-text">In 2018, Kate gave her songwriting skills an impressive test-drive, writing five out of six new songs for her first solo
          EP, Your Last Name. The upcoming album, which is a unique concoction of funk, jazz and Americana, will drop on
          April 3, 2019. Catch her at the official album release show on the same date at the Tractor Tavern in Ballard,
          Seattle.</p>
        {/*<p id="lets-rage">It's jazz.</p>*/}
      </section>

      <section className="parallax-scrolling" id="music">
        <h2 id="music-title">Music</h2>
        <div id="music-spacer"></div>
        <section id="music-container">
        </section>
        <p className="music-text">
          <a className="music-links" href="http://www.bonjovi.com/">For more tunes click here</a>
        </p>
      </section>

      <section className="parallax-scrolling" id="contact">
        <h2 id="contact-title">Contact</h2>
          <p className="contact-text">For booking inquiries, comments, suggestions, or
          scalped Bon Jovi tickets, contact
            <a className="contact-links" href="mailto:katedinsmoremusic@gmail.com"> katedinsmoremusic@gmail.com</a>
          </p>
          <div id="social-icon-container">'
            <span className="social-icon-row">
            <a className="contact-links" href="https://www.facebook.com/katedinsmoremusic/">
              <img alt={"facebook"} className="social-icon" src={require("./images/facebookwhite.svg")}/>
            </a>
            <a className="contact-links" href="https://twitter.com/horseysurprise">
              <img alt={"twitter"} className="social-icon" src={require("./images/twitterwhite.svg")}/>
            </a>
            </span>
            <span className="social-icon-row">
            <a className="contact-links" href="https://www.instagram.com/katedinsmoremusic/">
              <img alt={"instagram"} className="social-icon" src={require("./images/instagramwhite.svg")}/>
            </a>
            <a className="contact-links" href="mailto:katedinsmoremusic@gmail.com">
              <img alt={"email"} className="social-icon" src={require("./images/mailwhite.svg")}/>
            </a>
            </span>
          </div>
      </section>
    </div>
    );
  }
}

export default App;
