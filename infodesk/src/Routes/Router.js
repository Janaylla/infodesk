import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "../screens/HomePage/HomePage";
import AboutPage from "../screens/AboutPage/AboutPage";
import VideoPage from "../screens/VideoPage/VideoPage";
import VideosPage from "../screens/VideosPage/VideosPage";
import Find from "../screens/FindPage/FindPage"

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
        <Route exact path="/find">
          <Find />
        </Route>
        <Route exact path="/videos">
          <VideosPage />
        </Route>  
        <Route path="/videos/:video">
          <VideoPage />
        </Route> 
         
        <Route>
         <div>
           Pagina não encontrada
         </div>
        </Route>      
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
