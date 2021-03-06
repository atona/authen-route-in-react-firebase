import React from "react";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import SignUp from "../components/SignUp";

export default withRouter(props => {
  const user = useSelector(state => state.user);
  const { signUp } = useSelector(state => state.authApi);

  const _props = {
    user,
    signUp,
    ...props
  };

  return <SignUp {..._props} />;
});
