import {BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import './App.css';

import Header from './layouts/header/Header'
import Footer from './layouts/footer/Footer';

const App = ()=>{
  return(
    <Router>
      <Header />
      <h1>Hola mundo</h1>
      <Footer />
    </Router>
    
  )
}
{/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
}*/}

export default App;
