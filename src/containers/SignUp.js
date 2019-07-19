import React from "react";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import SignUp from "../components/SignUp";

export default withRouter(props => {
  const user = useSelector(state => state.user);
  const { signIn, signUp } = useSelector(state => state.authApi);

  const _props = {
    user,
    signIn,
    signUp,
    ...props
  };

  return <SignUp {..._props} />;
});
