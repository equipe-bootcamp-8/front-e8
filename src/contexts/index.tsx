import theme from 'assets/styles/theme';
import { ReactNode } from 'react'
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { AuthProvider } from './auth';
import { CategoryProvider } from './categories';
import { ProductProvider } from './products';

interface ProviderProps{
    children: ReactNode;
}

const Providers = ({children}: ProviderProps) => {
  return (
    <BrowserRouter>
    <ThemeProvider theme={theme}>
        <AuthProvider>
            <ProductProvider>
              <CategoryProvider>
              {children}
              </CategoryProvider>
            </ProductProvider>
        </AuthProvider>
    </ThemeProvider>
    </BrowserRouter>
  )
}

export default Providers