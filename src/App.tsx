
import theme from 'assets/styles/theme';

import Router from 'router';
import { ThemeProvider } from 'styled-components';
import './App.css';



function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;

