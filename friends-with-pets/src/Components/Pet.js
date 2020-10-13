import React from "react"

function Pet (props){
    return(
<div style={{height: "350px", 
                    width: "350px", 
                    backgroundColor: "yellow", 
                    color: "blue", 
                    border: "1px solid green", 
                    marginBottom: "10px",
                    textAlign: "center",
                    }}>
            <h3>{props.name}</h3>
            <h3>{props.breed}</h3>
        </div>

    )
    }

    export default Pet


        
    
