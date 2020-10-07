import React from "react"

function Vacay(props){
    return(
        <div style={{height: "350px", 
                    width: "350px", 
                    backgroundColor: "aquamarine", 
                    color: "blue", 
                    border: "1px solid green", 
                    marginBottom: "10px",
                    textAlign: "center",
                    }}>
            <h2>{props.vacation.place}</h2>
            <h3>${props.vacation.price}.00</h3>
            <p>Best Time To Go: {props.vacation.timeToGo}</p>
            <img style={{width: "250px"}}src={props.vacation.url}/>
        </div>
    )
}

export default Vacay