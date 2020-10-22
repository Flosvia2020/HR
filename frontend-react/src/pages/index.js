import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Login } from "./Login";
import { SignUp } from "./SignUp";
import { Main } from "./Main";
import { MyPage } from "./MyPage";

export const Index = () => {
  return (
    <div>
      <Router>
        <Route exact path="/main" component={Main} />
        <Route path="/signin" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/profile" component={MyPage} />
      </Router>
    </div>
  );
};
