import React from "react"
import friendData from "./Components/FriendList"
import Friend from "./Components/Friend"

function App (){
    const friendComponents = friendData.map(friends => <Friend key={friends.id} friends={friends} />)
    
    return(
        <div>
            {friendComponents}
        </div>
            )
            }

export default App