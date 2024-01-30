import React , {Component} from 'react'
import PropTypes from 'prop-types';

export default class Counter extends Component{
    constructor(props){
        super(props);
        const {counter} = this.props;
        this.state = {
            counter: counter,
        }
        this.onCounterPlus= this.onCounterPlus.bind(this);
        this.onCounterMinus= this.onCounterMinus.bind(this);
    }
    onCounterPlus(){
        const {max} = this.props;
        const {counter} = this.state;
        this.setState({counter: (max >= counter+1) ? counter+1 : counter})
    }
    onCounterMinus(){
        const {min} = this.props;
        const {counter} = this.state;
        this.setState({counter: (min <= counter - 1) ? counter-1 : counter})
    }
    render(){
        const {counter} = this.state;
   
        return(
            <div>
                <p>Counter : {counter}</p>
                <button onClick= {this.onCounterPlus}>+</button>
                <button onClick= {this.onCounterMinus}>-</button>
            </div>
        )
    }
} 

Counter.propTypes = {
    counter: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number,
  };