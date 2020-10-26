import React from "react"

class App extends React.Component{
    constructor (){
        super ()
        this.state = {
            colors: ["white", "white", "white", "white"]
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.setState(prevState => {
            return{
                colors: prevState
            }
        })
    }

    render(){
        return (
            <div>
                <Square color={this.state.colors[0]}/>
                <Square color={this.state.colors[1]}/>
                <Square color={this.state.colors[2]}/>
                <Square color={this.state.colors[3]}/>
                <button onClick={this.handleClick}>Black/White</button>
            </div>
        )
    }
}

export default App