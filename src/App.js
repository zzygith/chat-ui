import { ThemeProvider } from 'styled-components';
import ChatApp from './components/ChatApp'
import theme from './theme'
import './App.css'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ChatApp/>
    </ThemeProvider>
  );
}

export default App;
