import React from "react";
import "./resume.css";

import Data from './Data';
import Card from './Card';


const Resume = () => {
    return (

        <section className="resume container section" id="resume">
            <h2 className="section__title">Experience</h2>

            <div className="resume__container grid">
                <div className="timeline grid">
                    {Data.map((val, id) => {
                        if (val.category === "education") {
                            return ( <Card key={id} icon={val.icon} title={val.title} date={val.date} desc={val.desc} company={val.company} /> )
                        }
                    })}
                </div>

                <div className="timeline grid">
                    {Data.map((val, id) => {
                        if (val.category === "work") {
                            return ( <Card key={id} icon={val.icon} title={val.title} date={val.date} desc={val.desc} company={val.company} /> )
                        }
                    })}
                </div>


            </div>
        </section>

    )

}

export default Resume;