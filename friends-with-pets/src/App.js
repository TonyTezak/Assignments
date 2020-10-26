import React from "react"
import friendData from "./Components/FriendList"
import Friend from "./Components/Friend"

function App (){
    const friendComponents = friendData.map(friend => <Friend key={friend.id} pets={friend.pets} name={friend.name} friend={friend} />)
    
    return(
        <div>
            {friendComponents}
        </div>
            )
            }

export default App