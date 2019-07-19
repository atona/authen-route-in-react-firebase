import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Home from "./Home";
import Public from "./Public";
import Profile from "../containers/Profile";
import AuthProvider from "../providers/AuthProvider";
import SignIn from "../containers/SignIn";
import SignUp from "../containers/SignUp";
import ProtectedRoute from "../Routers/PrivateRoute";
import AppBar from "./AppBar";

const Main = styled.div`
  & {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: whitesmoke;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
`;

const Wrapper = styled.div`
  width: 100%;
`;

const App = () => {
  return (
    <AuthProvider>
      <Main>
        <BrowserRouter>
          <Wrapper>
            <AppBar />
            <Switch>
              <Route path="/" exact render={() => <Home />} />
              <Route path="/signin" exact render={() => <SignIn />} />
              <Route path="/signup" exact render={() => <SignUp />} />
              <Route path="/public" exact render={() => <Public />} />
              <ProtectedRoute path="/users/:id" render={() => <Profile />} />
            </Switch>
          </Wrapper>
        </BrowserRouter>
      </Main>
    </AuthProvider>
  );
};

export default App;
