import React from "react"
import Square from "./Square"
import "./styles.css"


class App extends React.Component {
    constructor (){
        super ()

        this.state = {
            squares: ['white', 'black', 'black', 'white']
        }
    }

    handleClickBW = () => {
        //this.setState(({squares}) => ({squares: squares.map(square => square !== 'white' ? 'white' : 'black')}))
       
        this.setState(prevState => {
            return {
                squares: prevState.squares.map(square => {
                    if(square !== 'white') {
                        return 'white'
                    }else {
                        return 'black'
                    }
                })
            }
        })


    }

    handleClickPurple = () => {
        this.setState(prevState => {
            return{
                squares: prevState.squares.map((square, i) => {
                    if (i <2){
                        return 'purple'
                    }else{
                        return square
                    }
                })
            }
        })
    }

    handleClickBlueLeft = () => {
        this.setState(prevState => {
            return{
                squares: prevState.squares.map((square, i) => {
                    if (i === 2){
                        return 'blue'
                    }else{
                        return square
                    }
                })
            }
        })
    }

    handleClickBlueRight = () => {
        this.setState(prevState => {
            return{
                squares: prevState.squares.map((square, i) => {
                    if (i === 3){
                        return 'blue'
                    }else{
                        return square
                    }
                })
            }
        })
    }

    render(){
        
        const colorSquares = this.state.squares.map(square => <Square color={square}/>)
            
        return (
            <div>
                <div className='squareContainer'>
                    {colorSquares}
                </div>
                <button onClick={this.handleClickBW}>Black/White</button>
                <button onClick={this.handleClickPurple}>Purple</button>
                <button onClick={this.handleClickBlueLeft}>Blue Bottom L</button>
                <button onClick={this.handleClickBlueRight}>Blue Bottom R</button>
            </div>
        )
    }
}

export default App