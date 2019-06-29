import React, {Component} from 'react';
import ResultLog from "./ResultLog";

class CalculatorForm extends Component{
//set initial states
  state={firstValue: "", secondValue: "", resultArray: [], divisionSymbol: "\xF7"}

//lifecycle method runs after components are mounted
  componentDidMount(){
    //setInterval call back will call liveUpdateLog every 2 seconds to update data from database
    setInterval(this.liveUpdateLog, 1000)
  }

//this is a live update helper method
liveUpdateLog = () =>{
  fetch("https://tutor-calculator.herokuapp.com/logs")
  .then(resp => resp.json())
  .then(json => {
    this.setState({resultArray: json[0].results})
  })
}

//this method updates the input values
  handleInput = (ev)=>{
    this.setState({[ev.target.name]: parseFloat(ev.target.value)})
  }

//this is a helper method that updates the backend results
  updateLog = (results) =>{
    fetch("https://tutor-calculator.herokuapp.com/logs/1",{
    method: 'PATCH',
    headers:{'Content-Type': 'application/json',
      Accept: 'application/json'},
      body: JSON.stringify({results} )
    })
    .then(resp => resp.json())
    .then(json =>{
      //update the resultArray state
      this.setState({resultArray: json.results})
    })
  }

//this method calculates the two inputs depending on the button clicked
  handleButton = (ev)=>{
    let results ="";
    //validate the controlled inputs
    if(!this.state.firstValue || !this.state.secondValue){
      alert("please enter a valid number.")
    }
    else{
      switch (ev.target.name){
        case "addition":
        //create a string of the result as string
        results = `${this.state.firstValue}+ ${this.state.secondValue} = ${this.state.firstValue + this.state.secondValue}`;
        //call the update result helper method
        this.updateLog(results)
        break;

        case "subtraction":
        results = `${this.state.firstValue} - ${this.state.secondValue} = ${this.state.firstValue - this.state.secondValue}`;
        //call the update result helper method
        this.updateLog(results)
        break;

        case "multiplication":
        results = `${this.state.firstValue} x ${this.state.secondValue} = ${this.state.firstValue * this.state.secondValue}`;
        //call the update result helper method
        this.updateLog(results)
        break;

        case "division":
        results = `${this.state.firstValue} \xF7 ${this.state.secondValue} = ${(this.state.firstValue / this.state.secondValue).toFixed(2)}`;
        //call the update result helper method
        this.updateLog(results)
        break;

        default: break
      }
    }
  }
//this method empties the log list then update the state.resultArray
  handleClear = ev =>{
    let isClear = true;
    fetch("https://tutor-calculator.herokuapp.com/logs/1",{
    method: 'PATCH',
    headers:{'Content-Type': 'application/json',
      Accept: 'application/json'},
      body: JSON.stringify({isClear} )
    })
    .then(resp => resp.json())
    .then(json =>{
      this.setState({resultArray: json.results})
    })
  }

  render(){
    return(
      <div>
      <h1>Tutor Calculator</h1>
      <input type="number" placeholder="first number" name="firstValue"
      onChange={this.handleInput} value={this.state.firstValue} required/><br/>
      <input type="number" placeholder="second number" name="secondValue"
      onChange={this.handleInput} value={this.state.secondValue} required/> <br/><br/>

      <button onClick={this.handleButton} name="addition" className="CB">+</button>{" "}
      <button onClick={this.handleButton} name="subtraction" className="CB">-</button>{" "}
      <button onClick={this.handleButton} name="multiplication" className="CB">x</button>{" "}
      <button onClick={this.handleButton} name="division" className="CB">{this.state.divisionSymbol}</button>
      <hr/>
      <button onClick={this.handleClear} name="clearArray">Clear Logs</button>
      <div id="resultSection" >
      <ResultLog resultLog={this.state.resultArray} />
      </div>
      </div>
    )
  }
}

export default CalculatorForm;
