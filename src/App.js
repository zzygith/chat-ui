import { ThemeProvider } from 'styled-components';
import ChatApp from './components/ChatApp'
import theme from './theme'
import './App.css'
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <ChatApp/>
      </ThemeProvider>
    </BrowserRouter>

  );
}

export default App;
