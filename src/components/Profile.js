import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import Todos from "../containers/Todos";
import Contents from "../components/Contents";

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
      <Contents>
        <Todos />
      </Contents>
    </>
  ) : (
    <>
      <Contents>
        <div>Not Verified Email</div>
      </Contents>
    </>
  );
};
