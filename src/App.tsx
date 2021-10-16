import Calculator from './components/calculator/Calculator';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './Styles/global.styled';
import { theme } from './Styles/theme';
export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Calculator />
    </ThemeProvider>
  );
};
