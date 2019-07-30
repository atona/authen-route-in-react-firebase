import React from "react";
import { useSelector } from "react-redux";
import EmailVerifier from "../components/EmailVerifier";

export default props => {
  const user = useSelector(state => state.user);
  const { sendEmailVerification } = useSelector(state => state.authApi);

  const _props = {
    user,
    sendEmailVerification,
    ...props
  };

  return <EmailVerifier {..._props} />;
};
