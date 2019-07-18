import React from "react";
import { useSelector } from "react-redux";
import Profile from "../components/Profile";

export default props => {
  const user = useSelector(state => state.user);

  const _props = {
    user,
    ...props
  };

  return <Profile {..._props} />;
};
