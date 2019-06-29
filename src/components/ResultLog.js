import React, {Component} from 'react';

class ResultLog extends Component{
  componentDidMount(){
    //this checks the database whether the table is empty
    fetch("https://tutor-calculator.herokuapp.com/logs")
    .then(resp => resp.json())
    .then(json=>{
    //if the table is empty, then create one object(array) so results can be store there
      if(json.length <1){

        fetch("https://tutor-calculator.herokuapp.com/logs",{
          method: "POST"
        })}})
  }
  render(){
    return(
      <div>
      Result Logs:
      <ul>
      {
        //slice to limit 10 results display and reverse the array so last item in is the first item out (Stack Structure)
        this.props.resultLog.reverse().slice(0,10).map((result, key) =>{
          return <div key={key}>result: {result}</div>
        })
      }
      </ul>
      </div>
    )
  }
}

export default ResultLog;
