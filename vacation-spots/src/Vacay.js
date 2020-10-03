import React from "react"

function Vacay(props){
    return(
        <div>
            <h2>{props.vacation.place} - {props.vacation.price}</h2>
            <p>{props.vacation.time}</p>
        </div>
    )
}

export default Vacay