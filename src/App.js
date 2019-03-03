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
        <p className="bio-text">Mentally projecting from Seattle, Washington, Kate Dinsmore delivers a scorching
                            combination of thrash metal and acapella roots jazz blended with the sublime
                            musical sensibilites of early 1920's New Orleans zydeco.  Versed
                            on multiple instruments including guitar, jawharp, and Chevy Malibu, Kate makes every
                            show a painstaking endeavor of the heart, a fact that shines through the
                            music, public nudity, and multiple lawsuits. With new songs, new mugshots, 
                            and a new concept album inspired by the Shawshank Redemption and its sequel,
                            Bad Boys II, 2018 is looking to be a big year for Kate. Check the tour page 
                            for dates in your area, and don't miss the only
                            artist who can shatter your pelvis with only her voice and two shots of
                            Jameson.</p>
        <p id="lets-rage">It's jazz.</p>
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
