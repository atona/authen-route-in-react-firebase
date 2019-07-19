import React from "react";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import SignOut from "../components/SignOut";

export default withRouter(props => {
  const user = useSelector(state => state.user);
  const { signOut } = useSelector(state => state.authApi);

  const _props = {
    user,
    signOut,
    ...props
  };

  return <SignOut {..._props} />;
});
