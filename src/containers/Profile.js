import React from "react";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import Profile from "../components/Profile";

export default withRouter(props => {
  const user = useSelector(state => state.user);

  const _props = {
    user,
    ...props
  };

  return <Profile {..._props} />;
});
