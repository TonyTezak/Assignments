import React from "react"

function Pet (props){
    return(

<div style={{height: "350px", 
                    width: "350px", 
                    backgroundColor: "aquamarine", 
                    color: "blue", 
                    border: "1px solid green", 
                    marginBottom: "10px",
                    textAlign: "center",
                    }}>
            <h2>Name: {props.friends.age}</h2>
            <h3>Age: {props.friends.age}.00</h3>
            <p>Pet(s): {props.friends.pet}</p>
        </div>

    )
    }

    export default Pet


        
    
