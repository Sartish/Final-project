import React from "react";
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import user from "./reducers/user";
import Signin from "./pages/Signin";
import Concepts from "./pages/Concepts";
import Description from "./pages/Description";
import Home from "./pages/Home";
import About from "./pages/About";
import Contribute from "./pages/Contribute";

const reducer = combineReducers({
  user: user.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/concepts" component={Concepts} />
          <Route path="/concepts/:conceptId" component={Description} />
          {/* <Route exact path="/concepts/descriptions" component={Description} /> */}
          <Route exact path="/about" component={About} />
          <Route exact path="/contribute" component={Contribute} />
          <div>hej appen</div>
        </Switch>
      </Provider>
    </BrowserRouter>
  );
};
