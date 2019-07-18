import React from "react";
import { useSelector } from "react-redux";
import MyMenu from "../components/MyMenu";

export default props => {
  const initialize = useSelector(state => state.initialize);
  const user = useSelector(state => state.user);
  const { signOut } = useSelector(state => state.authApi);

  const _props = {
    user,
    initialize,
    signOut,
    ...props
  };

  return <MyMenu {..._props} />;
};
