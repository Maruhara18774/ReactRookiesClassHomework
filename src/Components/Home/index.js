import React, { Component } from 'react';
import './Home.css';

export class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            time: new Date().toLocaleTimeString(),
            clickCount : 0,
            listClick: [0]
        }
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({ time: new Date().toLocaleTimeString() })
        }, 1000);
        
    }
    ClickGame(){
        const num = this.state.clickCount+1;
        if(num == 15){
            alert("FizzBuzz");
            this.setState({clickCount: 0, listClick: [0]});
        }
        else{
            const newList = [...this.state.listClick,num];
            this.setState({clickCount: num,listClick: newList});
            if(num == 3){
                alert("Fizz");
            }
            if(num == 5){
                alert("Buzz");
            }
        }
        

    }
    render() {
        return (
            <>
                <h2>Welcome to {this.props.name}. It's {this.state.time} </h2>
                <button onClick={() => this.ClickGame()}> Clicky Game</button>
                <p>Num count:</p>
                {this.state.listClick.map((item)=>{
                    return <p className="click-count">{item} </p>
                })}
            </>
        )
    }
}

export default Home
