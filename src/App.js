import React from 'react';
import './App.css';
import CalculatorForm from "./components/CalculatorForm";
import ResultLog from "./components/ResultLog";

function App() {
  return (
    <div className="App">
      <header className="App-header">

      <CalculatorForm />
      <br/>
      <ResultLog />
      </header>
    </div>
  );
}

export default App;
