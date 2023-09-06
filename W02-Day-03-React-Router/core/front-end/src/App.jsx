import React from "react";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Form from "./components/Form";
import PeopleComponent from "./components/PeopleComponent";
import PlanetComponent from "./components/PlanetComponet";

function App() {
  return (
    <BrowserRouter>
      <h1>Luke API-walker</h1>
      <Form />
      <Switch>
        <Route path="/people/:id">
          <PeopleComponent />
        </Route>
        <Route path="/planets/:id">
          <PlanetComponent />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
