import React from "react"
// import colorData from "./colorData"
import Square from "./Square"

class App extends React.Component{
    constructor (){
        super ()
        this.state = {
            colors: Square
        }
        this.handleClickBW = this.handleClickBW.bind(this)
        this.handleClickPurple = this.handleClickPurple.bind(this)
        this.handleClickBlueLeft=this.handleClickBlueLeft.bind(this)
        this.handleClickBlueRight=this.handleClickBlueRight.bind(this)

    }

    handleClickBW(){
        this.setState(prevState => {
            return{
                color: prevState.colors
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

        const colorSquares = this.state.colors.map(color => <Square key={Square.id} color={color}/>)  

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