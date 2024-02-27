import React, {Component} from 'react'

export default class CounterClassFunction extends Component {
    constructor(props){
        super(props);
        this.state={
            count:1
        };
    }
    render(){
        return (
            <div>
                <p>CounterPlus: {this.state.count}</p>
                <button onClick={() => this.setState({count: this.state.count + 1})} className="block">Plus</button> 
                <button onClick={() => this.setState({count: this.state.count - 1})}>Minus</button> 
            </div>
        )
    }
}
