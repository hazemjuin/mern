import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Number from './components/Number';
import Word from './components/Word';
import StyledWord from './components/StyledWord';
// import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/:number(\d+)" component={Number} />
          <Route path="/:word([A-Za-z]+)" component={Word} />
          <Route
            path="/:word([A-Za-z]+)/:color1([A-Za-z]+)/:color2([A-Za-z]+)"
            component={StyledWord}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
