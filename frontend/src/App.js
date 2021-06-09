import React from "react";
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import user from "./reducers/user";
import concepts from "./reducers/concepts";
import Signin from "./pages/Signin";
import Concepts from "./pages/Concepts";
import Description from "./pages/Description";
import Home from "./pages/Home";
import About from "./pages/About";
import AddedDescription from "./components/AddedDescription";

const reducer = combineReducers({
  user: user.reducer,
  concepts: concepts.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signin" component={Signin} />
          <Route exact path="/concepts" component={Concepts} />
          <Route path="/concepts/:conceptId" component={Description} />
          {/* <Route exact path="/concepts/descriptions" component={Description} /> */}

          <Route exact path="/contribute/concepts/:conceptId"component={AddedDescription}/>
          <Route path="/about" component={About} />
          <Route path="/contribute" component={AddedDescription} />
          <div>hej appen</div>
        </Switch>
      </Provider>
    </BrowserRouter>
  );
};
