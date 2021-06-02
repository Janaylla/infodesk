import React from "react";
import "./App.css";
import Router from "./Routes/Router";
import GlobalState from "./global/GlobalState";

const App = () => {
  return (
    <div className="App">
  
        <GlobalState>
          <Router />
        </GlobalState>
    </div>
  );
};

export default App;
