import React from "react";
import "./about.css";

import Me from '../../assets/me.png';


const About = () => {
    return (
        <section className="about container section " id="about">
            <h2 className="section__title">
                About Me
            </h2>

            <div className="about__container grid">
                <img src={Me} alt="avatar me" className="about__img" />
                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about_description">
                            I am a Vietnamese second-year university student in computer science at the University of Savoy, France. Web development and creating video games are my passions, and I have always been looking forward to enhancing my abilities.
                            So, I would like to develop my knowledge through professional experience in this field.
                        </p>
                        <a href="" className="btn">Download CV</a>
                    </div>

                    <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">HTML</h3>
                                <span className="skills__number html">90%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage"></span>

                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">CSS</h3>
                                <span className="skills__number html">90%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage"></span>

                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">JavaScript</h3>
                                <span className="skills__number html">85%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage"></span>

                            </div>
                        </div>



                    </div>

                </div>
            </div>



        </section>
    )

}

export default About;