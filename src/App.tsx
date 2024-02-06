import React from 'react';
import './App.css';
import { ThemeProvider } from '@emotion/react';
import theme from './theme';
import { CssBaseline } from '@mui/material';
import RouteMain from './routes/RouteMain';
import useAuth from './customHooks/useAuth';
import Footer from './layout/Footer';
import Header from './layout/Header';

function App() {
  useAuth();
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <CssBaseline />
        <Header />
        <main style={{margin:'0px 58.3333px'}}>
          <RouteMain />
        </main>
        <Footer />
      </div>
    </ThemeProvider>

  );
}

export default App;

{/* <ProfitLossCalc />
        <div>
          <GridExample />
        </div>
        <div>
          <EmployeeForm />
        </div> */}