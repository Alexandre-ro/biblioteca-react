import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./pages/Login/Index";
import Book from './pages/Book/Book';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route patch="/book" component={Book} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
