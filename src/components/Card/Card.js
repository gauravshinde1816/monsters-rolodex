import React from 'react'
import './Card.css'
function Card(props) {
    return (
        <div className="card-container">
            <img src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} alt="" />
            <h2>{props.monster.name}</h2>
            <h4>{props.monster.email}</h4>

        </div >
    )
}

export default Card;