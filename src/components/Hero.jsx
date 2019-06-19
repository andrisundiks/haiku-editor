import React from 'react';

import bg from '../assets/images/autumn_bg.jpg';
import title from '../assets/images/title.png';
import HaikuForm from "./HaikuForm";
import HaikuOutput from "./HaikuOutput";

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
                            <a className="navbar-item">
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
                                <a className="navbar-item is-active">
                                    Home
                                </a>
                                <a className="navbar-item">
                                    #
                                </a>
                                <a className="navbar-item">
                                    #
                                </a>
                                <span className="navbar-item">
              <a className="button is-primary is-inverted">
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
                    <div className="columns">
                        <div className="column">
                            <HaikuForm/>
                        </div>
                        <div className="column is-two-thirds">
                            <article className="message" style={{ backgroundColor: "rgba(250, 250, 250, 0.6)" }}>
                                <div className="message-body">
                                    <HaikuOutput />
                                </div>
                            </article>
                            <h2 className="subtitle">
                                #
                            </h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero-foot">
                <nav className="tabs">
                    <div className="container">
                        <ul>
                            <li className="is-active"><a>Overview</a></li>
                            <li><a>Modifiers</a></li>
                            <li><a>Grid</a></li>
                            <li><a>Elements</a></li>
                            <li><a>Components</a></li>
                            <li><a>Layout</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </section>
    )
};

export default Hero;