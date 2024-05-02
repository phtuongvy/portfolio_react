import React from "react";
import Typewriter from "typewriter-effect";

import "./home.css";

import Me from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";

const Home = () => {


    return (
        <section className="home container" id="home">
            <div className="intro">
                <img src={Me} alt="" className="home__img" />
                <h1 className="home__name">
                    Pham Huynh Tuong Vy
                </h1>
                <span className="home__education">
                    I'm a <em>second year</em> student at IUT Annecy and I like
                    <Typewriter
                        options={{
                            strings: [' coding', ' developing', ' learning'],
                            autoStart: true,
                            loop: true,
                            
                        }} />
                </span>
                <HeaderSocials />

                <a href="#contact" className="btn">Hire Me</a>
                <ScrollDown />
            </div>
        </section>
    )

}

export default Home;