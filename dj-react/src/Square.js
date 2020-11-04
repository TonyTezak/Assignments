import React from "react"


function Square(props){
const {color,position}=props
  
return(

    <div>
        <djSquare id={"square" + position} className={"theme-" + color}></djSquare>
    </div>
)
}

export default Square