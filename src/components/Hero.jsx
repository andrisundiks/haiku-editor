import React from 'react';
import {Route, Switch} from 'react-router-dom';

import bg from '../assets/images/autumn_bg.jpg';
import title from '../assets/images/title.png';

import HaikuContainer from "./HaikuContainer";
import About from "./About";


const Hero = () => {
    return (
        <section
            className="hero is-fullheight"
            style={{backgroundImage: "url(" + bg + ")"}}
        >
            <div className="hero-head">
                <nav className="navbar">
                    <div className="container">
                        <div className="navbar-brand">
                            <a href="/" className="navbar-item">
                                <img src={title} alt="Logo"/>
                            </a>
                            <span className="navbar-burger burger" data-target="navbarMenuHeroA">
            <span></span>
            <span></span>
            <span></span>
          </span>
                        </div>
                        <div id="navbarMenuHeroA" className="navbar-menu">
                            <div className="navbar-end">
                                <a
                                    href="/"
                                    className="navbar-item is-active button is-text"
                                    style={{ fontFamily: 'brush', fontSize: '32px', textDecoration: 'none', color: 'black', marginTop: '-4px' }}
                                >
                                    Home
                                </a>
                                <a
                                    href="/about"
                                    className="navbar-item is-active button is-text"
                                    style={{ fontFamily: 'brush', fontSize: '32px', textDecoration: 'none', color: 'black', marginTop: '-4px' }}
                                >
                                    About
                                </a>
                                <span className="navbar-item">
              <a href="https://github.com/Andris-U" className="button is-primary is-inverted" style={{ backgroundColor: "rgba(250, 250, 250, 0.6)" }}>
                <span className="icon">
                  <i className="fab fa-github"></i>
                </span>
                <span>Github</span>
              </a>
            </span>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

            <div className="hero-body">
                <div className="container has-text-centered">
                    <Switch>
                        <Route exact path="/" component={HaikuContainer}/>
                        <Route path="/about" component={About}/>
                    </Switch>
                </div>
            </div>
        </section>
    )
};

export default Hero;