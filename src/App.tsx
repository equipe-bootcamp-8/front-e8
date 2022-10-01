import { Toaster } from "react-hot-toast";
import theme from 'assets/styles/theme';

import Router from 'router';
import { ThemeProvider } from 'styled-components';
import './App.css';



function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
      <Toaster position="bottom-center" reverseOrder={false} />
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;

