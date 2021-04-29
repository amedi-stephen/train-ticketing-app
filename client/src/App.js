import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>App</h1>
      </div>
    </Provider>
  );
};

export default App;
