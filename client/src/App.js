import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage";
import Stations from "./components/Stations";
import Stories from "./components/Stories";
import Contacts from "./components/Contacts";
import TrainPage from "./components/TrainPage";
import ConfirmTicket from "./components/ConfirmTicket";
import PaymentForm from "./components/PaymentForm";
import store from "./store";
// import TrainContainer from "./components/TrainContainer";

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
          <Route path="/trains" component={TrainPage} />
          <Route path="/ticket" component={ConfirmTicket} />
          <Route path="/pay" component={PaymentForm} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
