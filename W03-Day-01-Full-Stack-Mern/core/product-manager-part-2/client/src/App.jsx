import React from 'react';
import './App.css';
import ProductManager from './components/ProductManager';
import ProductDetail from './components/ProductDetail';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <h1>MERN Product Manager</h1> */}
      </header>
      <Router>
        <Switch>
          <Route exact path="/" component={ProductManager} />
          <Route path="/product/:id" component={ProductDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;


