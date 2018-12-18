import React from "react"
import "./Card.css"

const Card = props => (
    <div role="img" className="card mr-2 mt-2">
        <img className="card-img-top character" alt="character" src={props.image} onClick={()=> props.scoreCheck(props.name)}/>
    </div>
);

export default Card;