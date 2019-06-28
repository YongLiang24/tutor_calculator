import React, {Component} from 'react';

class CalculatorForm extends Component{

  constructor(){
    super()
    this.state={firstValue: 0, secondValue: 0}
  }

  render(){
    return(
      <div>
      First Number: <input type="number" placeholder="first number"/>
      </div>
    )
  }
}

export default CalculatorForm;
