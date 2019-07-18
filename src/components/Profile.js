import React from "react";
import { withRouter, Redirect } from "react-router-dom";
import Todos from "../containers/Todos";

const Profile = ({ user }) => {
  const { uid } = user;

  return !uid ? (
    <Redirect to="/signin" />
  ) : (
    <>
      <Todos />
    </>
  );
};

export default withRouter(Profile);
