import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";
import LoginPage from "./Pages/LoginPage/LoginPage";
import PersonalInfoPage from "./Pages/PersonalInfoPage/PersonalInfoPage";
import SelectInterestPage from "./Pages/SelectInterestPage/SelectInterestPage";
import FriendsPage from "./Pages/FriendsPage/FriendsPage";

const App: React.FC = () => {
  let routes = (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <Route path="/selectinterests" exact component={SelectInterestPage} />
        <Route path="/personalInformation" exact component={PersonalInfoPage} />
        <Route path="/friendlists" exact component={FriendsPage} />
        <Route path="/" render={() => <h1>Nothing to see here!!!</h1>} />
      </Switch>
    </BrowserRouter>
  );
  return <div>{routes}</div>;
};

export default App;
