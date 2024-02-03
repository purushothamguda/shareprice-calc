import React from 'react';
import './App.css';
import ProfitLossCalc from './components/ProfitLossCalc';
import GridExample from './components/ag-grid/GridExample';
import EmployeeForm from './components/forms/EmployeeForm';
import { ThemeProvider } from '@emotion/react';
import theme from './theme';
import { CssBaseline } from '@mui/material';
import RouteMain from './routes/RouteMain';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <CssBaseline/>
        <RouteMain/>
        {/* <ProfitLossCalc />
        <div>
          <GridExample />
        </div>
        <div>
          <EmployeeForm />
        </div> */}
      </div>
    </ThemeProvider>

  );
}

export default App;
