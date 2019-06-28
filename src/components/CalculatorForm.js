import React, {Component} from 'react';

class CalculatorForm extends Component{

  state={firstValue: "", secondValue: ""}


  handleInput = (ev)=>{
    this.setState({[ev.target.name]: ev.target.value})
  }

  handleButton = (ev)=>{
    //console.log(this.state.firstValue, this.state.secondValue)
  }
  render(){
    return(
      <div>
      <h1>Tutor Calculator</h1>
      First Number: <input type="number" placeholder="first number" name="firstValue"
      onChange={this.handleInput} value={this.state.firstValue}/><br/>

      Second Number: <input type="number" placeholder="second number" name="secondValue"
      onChange={this.handleInput} value={this.state.secondValue}/> <br/>

      <button onClick={this.handleButton}>+</button>{" "}
      <button onClick={this.handleButton}>-</button>
      </div>
    )
  }
}

export default CalculatorForm;
