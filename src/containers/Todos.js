import React from "react";
import Todos from "../components/Todos";

export default props => {
  const _props = {
    ...props
  };

  return <Todos {..._props} />;
};
