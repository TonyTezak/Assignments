import React from "react"
import "./styles.css"
// import Square from "./Square"

class App extends React.Component{
    constructor (){
        super ()
        this.state = {
            squares:[{position: 1, theme: "white"},{position: 2, theme: "white"},
            {position: 3, theme: "white"},{position: 4, theme: "white"}]
        }
        this.handleClickBW = this.handleClickBW.bind(this)
        this.handleClickPurple = this.handleClickPurple.bind(this)
        this.handleClickBlueLeft=this.handleClickBlueLeft.bind(this)
        this.handleClickBlueRight=this.handleClickBlueRight.bind(this)

    }

    handleClickBW(){
        this.setState(prevState => {
            
            return{
                colors: Square.blackWhite
            }
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
                <button onClick={this.handleClickBW}>Black/White</button>
                <button onClick={this.handleClickPurple}>Purple</button>
                <button onClick={this.handleClickBlueLeft}>Blue Bottom L</button>
                <button onClick={this.handleClickBlueRight}>Blue Bottom R</button>
            </div>
        )
    }
}

export default App