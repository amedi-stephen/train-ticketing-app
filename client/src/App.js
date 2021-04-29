import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage";
import Stations from "./components/Stations";
import Stories from "./components/Stories";
import Contacts from "./components/Contacts";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
        </div>

        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/stations" component={Stations} />
          <Route path="/stories" component={Stories} />
          <Route path="/contacts" component={Contacts} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
