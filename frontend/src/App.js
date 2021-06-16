import React from "react";
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import user from "./reducers/user";
import concepts from "./reducers/concepts";
import Signin from "./pages/Signin";
import Concepts from "./pages/Concepts";
import About from "./pages/About";
import AddedDescription from "./components/AddedDescription";
import FrontPage from "./pages/FrontPage";

import Descriptions from "./pages/Descriptions";
import SearchConcept from "./components/SearchConcept";
import ContributeConcept from "./components/ContributeConcept";

const reducer = combineReducers({
  user: user.reducer,
  concepts: concepts.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component={FrontPage} />
          <Route exact path="/concepts" component={Concepts} />
          <Route path="/signin" component={Signin} />
          <Route path="/concepts/:conceptId" component={Descriptions} />
          {/* <Route exact path="/concepts/descriptions" component={Description} /> */}

          <Route
            exact
            path="/contribute/concepts/:conceptId"
            component={AddedDescription}
          />
          <Route path="/about" component={About} />
          <Route path="/contribute" component={AddedDescription} />

          <Route path="/newconcept" component={ContributeConcept} />

          <Route path="/descriptions" component={Descriptions} />

          <Route path="/search" component={SearchConcept} />
          <div>hej appen</div>
        </Switch>
      </Provider>
    </BrowserRouter>
  );
};
