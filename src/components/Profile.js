import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import Todos from "../containers/Todos";

export default ({ user, match }) => {
  const { uid, emailVerified } = user;

  const isVailed = () => {
    return uid && uid === match.params.id ? true : false;
  };

  useEffect(() => {}, []);

  return !isVailed() ? (
    <Redirect to="/signin" />
  ) : emailVerified ? (
    <>
      <Todos />
    </>
  ) : (
    <div>Not Verified Email</div>
  );
};
