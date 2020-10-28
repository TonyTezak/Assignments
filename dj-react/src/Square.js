import React from "react"


function Square(props){
const {position,color}=props
  
return(

    <div id ={"square" + position} className={"theme-" + color}>
        
    </div>
)
}

export default Square