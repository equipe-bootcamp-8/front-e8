import dark from 'assets/styles/dark';
import light from 'assets/styles/light';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePeristedState from '../utils/'
import Footer from '.';

const DarkMode = () => {
  const [theme, setTheme] = usePeristedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Footer toggleTheme={toggleTheme} />
      </div>
    </ThemeProvider>
  );
}

export default DarkMode;