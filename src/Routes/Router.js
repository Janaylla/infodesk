import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "../screens/HomePage/HomePage";
import AboutPage from "../screens/AboutPage/AboutPage"

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>  
        <Route exact path="/about">
          <AboutPage />
        </Route>      
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
