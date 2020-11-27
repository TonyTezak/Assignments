import React from "react"

class App extends React.Component{
    constructor (){
        super()
        this.state = {
            num1: 0,
            num2: 0,
            num3: 0,
            num4: 0,
            num5: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }

    

    handleClick(){
        let shakeDice = Math.floor(Math.random) * 6
        this.setState(prevState => {
            return {
                num1: prevState.shakeDice,
                num2: prevState.shakeDice,
                num3: prevState.shakeDice,
                num4: prevState.shakeDice,
                num5: prevState.shakeDice
            }
        })
    }

    render(){
        return(
    <div>
            <h1>
                {this.state.num1}<br></br>
                {this.state.num2}<br></br>
                {this.state.num3}<br></br>
                {this.state.num4}<br></br>
                {this.state.num5}
            </h1>
            <button onClick={this.handleClick}>Roll The Dice!</button>
    </div>
        
        )
    }
}


export default App