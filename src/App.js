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
              <img className="menu-social-icon" src={require("./images/facebookwhite.svg")}/>
            </a>
            <a className="main-social-links" href="https://twitter.com/horseysurprise">
              <img className="menu-social-icon" src={require("./images/twitterwhite.svg")}/>
            </a>
            <a className="main-social-links" href="https://www.instagram.com/katedinsmoremusic/">
              <img className="menu-social-icon" src={require("./images/instagramwhite.svg")}/>
            </a>
          </div>
          <div id="main-menu">
            <a className="menu-links" id="main-menu-tour" href="#tour">tour</a>
            <a className="menu-links" id="main-menu-music" href="#music">music</a>
            <a className="menu-links" id="main-menu-bio" href="#bio">bio</a>
            <a className="menu-links" id="main-menu-contact" href="#contact">contact</a>
          </div>
        <div className="main-title-container">
            <h3 className="animated fadeInDown main-title">
                Kate Dinsmore
            </h3>
            <img src={require('./images/kate2.png')} className="animated fadeIn photo" />
        </div>
      </section>

      <section className="parallax-scrolling" id="tour">
        <h2 id="tour-title">Shows</h2>

      </section>

      <section className="parallax-scrolling" id="bio">
        <h2 id="bio-title">Bio</h2>
        <p className="bio-text">Based out of Seattle, Washington, Kate Dinsmore delivers a scorching
                            combination of thrash metal and acapella roots jazz blended with the sublime
                            musical sensibilites of early 1920's New Orlearns zydeco.  Versed
                            on multiple instruments including guitar, jawharp, and Chevy Malibu, every
                            show is a painstaking endeavor of the heart, a fact which shows through the
                            music, public nudity, and multiple lawsuits. With new songs, new mugshots, 
                            and a new concept album inspired by Bad Boys II and its sequel, the Shawshank
                            Redemption, 2018 is looking to be a big year for Kate. Check the tour page 
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
            <a className="contact-links" href="https://www.facebook.com/katedinsmoremusic/">
              <img className="social-icon" src={require("./images/facebook.svg")}/>
            </a>
            <a className="contact-links" href="https://twitter.com/horseysurprise">
              <img className="social-icon" src={require("./images/twitter.svg")}/>
            </a>
            <a className="contact-links" href="https://www.instagram.com/katedinsmoremusic/">
              <img className="social-icon" src={require("./images/instagram.svg")}/>
            </a>
            <a className="contact-links" href="mailto:katedinsmoremusic@gmail.com">
              <img className="social-icon" src={require("./images/mail.svg")}/>
            </a>
          </div>
      </section>
    </div>
    );
  }
}

export default App;
