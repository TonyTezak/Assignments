import React from "react"
import "./styles.css"
import Square from "./Square"

class App extends React.Component{
    constructor (){
        super ()
        this.handleClickBW = this.handleClickBW.bind(this)
        this.handleClickPurple = this.handleClickPurple.bind(this)
        this.handleClickBlueLeft=this.handleClickBlueLeft.bind(this)
        this.handleClickBlueRight=this.handleClickBlueRight.bind(this)
        this.state = {
            squares:[
            {position: 1, theme: "white"},
            {position: 2, theme: "white"},
            {position: 3, theme: "white"},
            {position: 4, theme: "white"}]
        }
        

    }

    handleClickBW(){
        this.setState(prevState => {
            
            return (
            [{position: {gridColumn: 2/3, gridRow: 2/3}, theme: ".theme-black"}]
            )
        })
    }
    

    handleClickPurple(){
        this.setState(prevState => {
            return{
                colors: prevState
            }
        })
    }

    handleClickBlueLeft(){
        this.setState(prevState => {
            return{
                colors: prevState
            }
        })
    }

    handleClickBlueRight(){
        this.setState(prevState => {
            return{
                colors: prevState
            }
        })
    }

    render(){
        
        const colorSquares = this.state.squares.map(square => <Square key={square.position} color={square.color} position={square.position}/>)  

        return (
            <div>
                {colorSquares}
                <djSquare id={"square1"+ {gridColumn:2/3, gridRow:2/3}} className={"theme-" + {backgroundColor: ".theme-black"}}></djSquare>
                <djSquare></djSquare>
                <djSquare></djSquare>
                <djSquare></djSquare>
                <button onClick={this.handleClickBW}>Black/White</button>
                <button onClick={this.handleClickPurple}>Purple</button>
                <button onClick={this.handleClickBlueLeft}>Blue Bottom L</button>
                <button onClick={this.handleClickBlueRight}>Blue Bottom R</button>
            </div>
        )
    }
}

export default App