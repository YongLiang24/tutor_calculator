import React, {Component} from 'react';

class ResultLog extends Component{


  render(){
    return(
      <div>
      Result Logs:
      <ul>
      {
        //slice to limit 10 results display
        this.props.resultLog.slice(0,10).map((result, key) =>{
          return <div key={key}>result: {result}</div>
        })
      }
      </ul>
      </div>
    )

  }
}

export default ResultLog;
