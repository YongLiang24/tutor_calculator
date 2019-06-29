import React, {Component} from 'react';
import ResultLog from "./ResultLog";

class CalculatorForm extends Component{

  state={firstValue: "", secondValue: "", resultArray: [], divisionSymbol: "\xF7",
arrayClear: true}


  handleInput = (ev)=>{
    this.setState({[ev.target.name]: parseFloat(ev.target.value)})
  }

  handleButton = (ev)=>{
    let results ="";
    if(!this.state.firstValue || !this.state.secondValue){
      alert("please enter a valid number.")
    }
    else{
      switch (ev.target.name){
        case "addition":
        results = `${this.state.firstValue}+ ${this.state.secondValue} = ${this.state.firstValue + this.state.secondValue}`;
        //fetch & update the backend results
        fetch('http://localhost:3000/logs/1',{
        method: 'PATCH',
        headers:{'Content-Type': 'application/json',
          Accept: 'application/json'},
          body: JSON.stringify({results} )
        })
        .then(resp => resp.json())
        .then(json =>{
          this.setState({resultArray: json.results})
        })
        break;

        case "subtraction":
        results = `${this.state.firstValue} - ${this.state.secondValue} = ${this.state.firstValue - this.state.secondValue}`
        fetch('http://localhost:3000/logs/1',{
        method: 'PATCH',
        headers:{'Content-Type': 'application/json',
          Accept: 'application/json'},
          body: JSON.stringify({results} )
        })
        .then(resp => resp.json())
        .then(json =>{
          this.setState({resultArray: json.results})
        })
        break;

        case "multiplication":
        results = `${this.state.firstValue} x ${this.state.secondValue} = ${this.state.firstValue * this.state.secondValue}`
        fetch('http://localhost:3000/logs/1',{
        method: 'PATCH',
        headers:{'Content-Type': 'application/json',
          Accept: 'application/json'},
          body: JSON.stringify({results} )
        })
        .then(resp => resp.json())
        .then(json =>{
          this.setState({resultArray: json.results})
        })
        break;

        case "division":
        results = `${this.state.firstValue} \xF7 ${this.state.secondValue} = ${(this.state.firstValue / this.state.secondValue).toFixed(2)}`
        fetch('http://localhost:3000/logs/1',{
        method: 'PATCH',
        headers:{'Content-Type': 'application/json',
          Accept: 'application/json'},
          body: JSON.stringify({results} )
        })
        .then(resp => resp.json())
        .then(json =>{
          this.setState({resultArray: json.results})
        })
        break;

        default: break
      }
    }
  }

  handleClear = ev =>{
    let isClear = this.state.arrayClear;
    fetch('http://localhost:3000/logs/1',{
    method: 'PATCH',
    headers:{'Content-Type': 'application/json',
      Accept: 'application/json'},
      body: JSON.stringify({isClear} )
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
