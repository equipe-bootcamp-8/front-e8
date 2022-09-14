import theme from 'assets/styles/theme';
import Navbar from 'components/Navbar';
import Router from 'router';
import { ThemeProvider } from 'styled-components';
import './App.css';

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
    <Navbar/>
    <Router/>
    </ThemeProvider>
    </>
    );
}

export default App;
