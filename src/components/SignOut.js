import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export default ({ history }) => {
  const { signOut } = useSelector(state => state.authApi);

  useEffect(() => {
    if (signOut) {
      signOut().then(() => {
        history.push("/signIn");
      });
    }
  }, [signOut, history]);

  return <></>;
};
