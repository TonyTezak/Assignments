import React from "react"
import Pet from "./Pet"
import friendData from "./FriendList"

        function Friend (props){
            const petComponents = friendData.map(friends => <Pet key={friends.id} pets={friends} />)
            
            return(
                <div>
                    {petComponents}
                </div>
            )
            }
        // <div style={{height: "350px", 
        //             width: "350px", 
        //             backgroundColor: "aquamarine", 
        //             color: "blue", 
        //             border: "1px solid green", 
        //             marginBottom: "10px",
        //             textAlign: "center",
        //             }}>
        //     <h2>Name: {props.friends.age}</h2>
        //     <h3>Age: {props.friends.age}.00</h3>
        //     <p>Pet(s): {props.friends.pet}</p>
        //     <img style={{width: "250px"}}src={props.vacation.url}/>
        // </div>

  

export default Friend