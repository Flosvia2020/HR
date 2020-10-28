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
          <Route exact  path="/signup" component={SignUp} />
        <Route exact path="/main" component={Main} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/mypage" component={MyPage} />
      </Router>
    </div>
  );
};
