import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ListAuthors from './components/ListAuthors';
import AuthorForm from './components/AuthorForm';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={ListAuthors} />
          <Route path="/add" component={AuthorForm} />
          <Route path="/edit/:id" component={AuthorForm} />
          {/* Add a route for handling unrecognized author IDs (bonus feature) */}
          {/* You can create a separate component for this */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
