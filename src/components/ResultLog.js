import React, {Component} from 'react';

class ResultLog extends Component{


  render(){
    return(
      <div>
      Result Logs:
      <ul>
      {
        this.props.resultLog.map((result, key) =>{
          return <li key={key}>result: {result}</li>
        })
      }
      </ul>
      </div>
    )

  }
}

export default ResultLog;
