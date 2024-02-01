import React from 'react';
import './App.css';
import ProfitLossCalc from './components/ProfitLossCalc';
import GridExample from './components/ag-grid/GridExample';

function App() {
  return (
    <div className="App">
      <ProfitLossCalc />
      <div>
        <GridExample />
      </div>
    </div>
  );
}

export default App;
