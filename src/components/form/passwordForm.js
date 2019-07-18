import React, { useCallback } from "react";
import styled from "styled-components";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText
} from "@material-ui/core";

const InputForm = styled(FormControl)`
  && {
    margin: 15px;
  }
`;

export default ({ password, setPassword, errors, setErrors }) => {
  const onChangePassword = useCallback(
    e => {
      if (e.target.value.length <= 0) {
        setErrors({ ...errors, password: "Required." });
      } else if (e.target.value.length < 6) {
        setErrors({ ...errors, password: "Too Short." });
      } else if (e.target.value.length > 20) {
        setErrors({ ...errors, password: "Too Long." });
      } else if (
        !/^[a-zA-Z0-9+\-=@^!#$%&'()[\]{}<>?_']+$/.test(e.target.value)
      ) {
        setErrors({ ...errors, password: "Invalid Password." });
      } else {
        delete errors.password;
        setErrors(errors);
      }
      setPassword(e.target.value);
    },
    [setPassword, errors, setErrors]
  );

  return (
    <InputForm
      error={"password" in errors && errors.password.length > 0}
      aria-describedby="password-error"
    >
      <InputLabel htmlFor="password">Password</InputLabel>
      <Input
        id="password"
        type="password"
        value={password}
        onChange={onChangePassword}
      />
      <FormHelperText id="password-error">{errors.password}</FormHelperText>
    </InputForm>
  );
};
