import React from "react"

const Square = (props) => {
    return (
        <div className='square' style={{backgroundColor: props.color}}></div>
    )
}

export default Square

// class Square extends React.Component{
//     constructor(props)
//     super(props);
//     this.handleClickBW = this.handleClickBW.bind(this)
// }
// function Square(props){
// const {position,color}=props
  
// return(

//     <div>
//         <djSquare id={"square" + position} className={"theme-" + color}></djSquare>
//     </div>
// )
// }

