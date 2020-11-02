import React from "react";
import { Switch, Route } from "react-router-dom";
import { Auth } from "./views/Auth";
import { Username } from "./views/User";
import { Users } from "./views/Users";
import { Nav } from "./components/Nav/Nav";
import { PrivateRoute, AnonRoute } from "./components/Routes/Routes";

function App() {
  return (
    <React.Fragment>
      <Nav />
      <Switch>
        <PrivateRoute path="/user/:id" component={Username} />
        <PrivateRoute exact path="/users" component={Users} />
        <AnonRoute exact path="/" component={Auth} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
