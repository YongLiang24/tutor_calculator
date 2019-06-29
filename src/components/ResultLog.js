import React, {Component} from 'react';

class ResultLog extends Component{

  // componentDidMount(){
  //
  //   fetch("http://localhost:3000/logs")
  //   .then(resp => resp.json())
  //   .then(json=>{
  //     console.log(json)
  //   })
  // }

  render(){
    return(
      <div>
      Result Logs:
      <ul>
      {
        //slice to limit 10 results display
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
