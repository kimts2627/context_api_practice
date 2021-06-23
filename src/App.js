import './App.css';
import UserContextProvider from './context';
import Text from './Text';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserContextProvider>
          <Text />
        </UserContextProvider>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
