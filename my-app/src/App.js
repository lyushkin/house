import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/header/Header";
import Main from "./pages/main/Main";
import Map from "./pages/toMap/Map";

function App() {
  return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route exact path="/login">
              Auth Page
            </Route>
            <Route exact path="/map">
            </Route>
          </Switch>
        </Router>
      </div>
  );
}

export default App;
