import React from "react"
import friendData from "./FriendList"
import Pet from "./Pet"
        
function Friend (){
            const petComponents = friendData.map(friends => <Pet key={friends.id} friends={friends} />)
            return(
                <div>
                    {petComponents}
                </div>
        
            )
        }
  

export default Friend