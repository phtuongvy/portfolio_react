import React from 'react'

const Card = (props) => {
    return (
        <div className="timeline__item">
            <i className={props.icon}></i>
            <span className="timeline__date">{props.date}</span>
            <h3 className="timeline__title">{props.title}</h3>
            <h4 className="timeline__company">{props.company}</h4>
            <p className="timeline__text">{props.desc}</p>
        </div>
    )
}

export default Card
