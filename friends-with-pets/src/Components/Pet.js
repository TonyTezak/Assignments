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
            <h2>Name: {props.friends.name}</h2>
            <h3>Age: {props.friends.age}</h3>
            <p>Pet: {props.friends.pets["name"]}</p>
            <p>Pet Breed: {props.friends.pets["breed"]}</p>
        </div>

    )
    }

    export default Pet


        
    
