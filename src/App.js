import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Home />
      </ChakraProvider>

    </div>
  );
}

export default App;
