import React from "react";


class CounterClass extends React.Component{

    constructor(){
        super();

        //funtion ekk mehem bind kra gnna onee
        this.increment = this.increment.bind(this)
        //js object ekk
        this.state = {
            number : 0
        }
    }

//funtion
    increment(){
        this.setState({
            number : this.state.number +1
        })
    }

    //render eka athule html code liynne
    render(){
        return(
            <div>
                <h3>class component</h3>
                <h1>Counter = {this.state.number}</h1>

                <button onClick={this.increment}>Increment</button>
                <hr></hr>
            </div>
        )
    }
}

export default CounterClass;
