import React, {Component} from 'react';

class CalculatorForm extends Component{

  state={firstValue: "", secondValue: "", resultArray: []}


  handleInput = (ev)=>{
    this.setState({[ev.target.name]: parseFloat(ev.target.value)})
  }

  handleButton = (ev)=>{
    //console.log(this.state.firstValue, this.state.secondValue)
    //console.log(ev.target.name)
    switch (ev.target.name){
      case "addition":
      const additionArray = this.state.resultArray.slice()//new copy
      additionArray.push(this.state.firstValue + this.state.secondValue)
      this.setState({resultArray: additionArray})
      //console.log(this.state.resultArray)
      break;

      case "subtraction":
      const subtractionArray = this.state.resultArray.slice()
      subtractionArray.push(this.state.firstValue - this.state.secondValue)
      this.setState({resultArray: subtractionArray})
      //console.log(this.state.resultArray)
      break;

      case "multiplication":
      const multiplicationArray = this.state.resultArray.slice()//new copy
      multiplicationArray.push(this.state.firstValue * this.state.secondValue)
      this.setState({resultArray: multiplicationArray})
      //console.log(this.state.resultArray)
      break;

      case "division":
      const divisionArray = this.state.resultArray.slice()//new copy
      divisionArray.push(this.state.firstValue / this.state.secondValue)
      this.setState({resultArray: divisionArray})
      //console.log(this.state.resultArray)
      break;

      default: break
    }
  }
  render(){
    return(
      <div>
      <h1>Tutor Calculator</h1>
      Input 01: <input type="number" placeholder="first number" name="firstValue"
      onChange={this.handleInput} value={this.state.firstValue}/><br/>

      Input 02: <input type="number" placeholder="second number" name="secondValue"
      onChange={this.handleInput} value={this.state.secondValue}/> <br/>

      <button onClick={this.handleButton} name="addition">+</button>{" "}
      <button onClick={this.handleButton} name="subtraction">-</button>{" "}
      <button onClick={this.handleButton} name="multiplication">x</button>{" "}
      <button onClick={this.handleButton} name="division">/</button>
      </div>
    )
  }
}

export default CalculatorForm;
