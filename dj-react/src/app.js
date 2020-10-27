import React from "react"
// import Square from "./Square"

class App extends React.Component{
    constructor (){
        super ()
        this.state = {
            colors: ["white", "white", "white", "white"]
        }
        this.handleClickBW = this.handleClickBW.bind(this)
        this.handleClickPurple = this.handleClickPurple.bind(this)
        this.handleClickBlueLeft=this.handleClickBlueLeft.bind(this)
        this.handleClickBlueRight=this.handleClickBlueRight.bind(this)

    }

    handleClickBW(){
        this.setState(prevState => {
            return{
                color: prevState.colors[0]
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
        return (
            <div>
                {/* <Square color={this.state.colors[0]}/>
                <Square color={this.state.colors[1]}/>
                <Square color={this.state.colors[2]}/>
                <Square color={this.state.colors[3]}/> */}
                <button onClick={this.handleClickBW}>Black/White</button>
                <button onClick={this.handleClickPurple}>Purple</button>
                <button onClick={this.handleClickBlueLeft}>Blue Bottom L</button>
                <button onClick={this.handleClickBlueRight}>Blue Bottom R</button>
            </div>
        )
    }
}

export default App