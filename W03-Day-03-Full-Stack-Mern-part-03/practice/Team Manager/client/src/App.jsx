import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PlayerList from './components/PlayerList';
import AddPlayer from './components/AddPlayer';
import EditPlayer from './components/EditPlayer';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={PlayerList} />
        <Route path="/add-player" component={AddPlayer} />
        <Route path="/edit-player/:id" component={EditPlayer} />
      </Switch>
    </Router>
  );
}

export default App;

