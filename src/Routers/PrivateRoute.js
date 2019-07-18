import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import styled from "styled-components";

const Loading = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const PrivateRoute = ({ render, ...rest }) => {
  const user = useSelector(state => state.user);
  const initialize = useSelector(state => state.initialize);

  const { uid } = user;

  useEffect(() => {
    // console.log(uid, initialize);
  }, [uid, initialize]);

  return !initialize ? (
    // <div>Loading</div>
    <Loading>
      <CircularProgress />
    </Loading>
  ) : (
    <Route
      {...rest}
      render={
        uid
          ? render
          : props => (
              <Redirect
                to={{
                  pathname: "/signin",
                  state: { from: props.location }
                }}
              />
            )
      }
    />
  );
};

export default PrivateRoute;
