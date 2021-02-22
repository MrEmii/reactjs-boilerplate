import React from 'react';
import ReactDOM from 'react-dom';
import Route from "../src/router/route"
import Router from "../src/router/router"
import AppHome from './pages/home'
import AppAbout from './pages/about'
import AppError from './pages/error'

const AppRoutes = () => <Router>
  <Route path="/"><AppHome></AppHome></Route>
  <Route path="/about"><AppAbout></AppAbout></Route>
  <Route><AppError></AppError></Route>
</Router>


ReactDOM.render(
  <AppRoutes></AppRoutes>,
  document.getElementById("root")
);

export default AppRoutes;