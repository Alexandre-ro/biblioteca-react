import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./pages/Login/Index";
import Book from './pages/Book/Book';
import NewBook from "./pages/Book/NewBook";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/book" exact component={Book} />
        <Route path="/book/novo" exact component={NewBook} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
