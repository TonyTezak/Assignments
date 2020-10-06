import React from "react"

function Vacay(props){
    return(
        <div className="card">
            <h2>{props.vacation.place}</h2>
            <h3>{props.vacation.price}</h3>
            <p>{props.vacation.timeToGo}</p>
        </div>
    )
}

export default Vacay