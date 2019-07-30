import React from "react";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import Profile from "../components/Profile";

export default withRouter(props => {
  const user = useSelector(state => state.user);
  const { sendEmailVerification } = useSelector(state => state.authApi);

  const _props = {
    user,
    sendEmailVerification,
    ...props
  };

  return <Profile {..._props} />;
});
