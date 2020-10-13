import React from "react"
// import friendData from "./FriendList"
import Pet from "./Pet"
        
function Friend (props){
            const petComponents = props.friends.pets.map(pet => <Pet key={pet} breed={pet.breed} name={pet.name} />)
            return(

            <div style={{height: "350px", 
                    width: "350px", 
                    backgroundColor: "green", 
                    color: "antiquewhite", 
                    border: "1px solid green", 
                    marginBottom: "10px",
                    textAlign: "center",
                    }}>
                        <h3>{props.friends.name}</h3>
                        <h3>{props.friends.age}</h3>
                        {petComponents}
                </div>

            )
        }
  

export default Friend