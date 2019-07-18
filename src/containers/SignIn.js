import React from "react";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import SignIn from "../components/SignIn";

export default withRouter(props => {
  const user = useSelector(state => state.user);
  const { signIn } = useSelector(state => state.authApi);

  const _props = {
    user,
    signIn,
    ...props
  };

  return <SignIn {..._props} />;
});
