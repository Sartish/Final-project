import React from "react";
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import user from "./reducers/user";
import { ui } from "./reducers/ui";
import Signin from "./pages/Signin";
import Concepts from "./pages/Concepts";
import About from "./pages/About";
import AddedDescription from "./components/AddedDescription";
import FrontPage from "./pages/FrontPage";
import Descriptions from "./pages/Descriptions";
import ContributeConcept from "./components/ContributeConcept";

const reducer = combineReducers({
  user: user.reducer,
  ui: ui.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component={FrontPage} />
          <Route exact path="/concepts" component={Concepts} />
          <Route path="/newconcept" component={ContributeConcept} />
          <Route path="/signin" component={Signin} />
          <Route path="/concepts/:conceptId" component={Descriptions} />
          <Route
            exact
            path="/contribute/concepts/:conceptId"
            component={AddedDescription}
          />
          <Route path="/about" component={About} />
          <Route path="/contribute" component={AddedDescription} />
          <Route path="/descriptions" component={Descriptions} />
        </Switch>
      </Provider>
    </BrowserRouter>
  );
};
