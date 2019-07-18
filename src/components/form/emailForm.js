import React, { useCallback } from "react";
import { isEmail } from "validator";
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

export default ({ email, setEmail, errors, setErrors }) => {
  const onChangeEmail = useCallback(
    e => {
      if (e.target.value.length <= 0) {
        setErrors({ ...errors, email: "Required." });
      } else if (!isEmail(e.target.value)) {
        setErrors({ ...errors, email: "Invalid Email." });
      } else {
        delete errors.email;
        setErrors(errors);
      }
      setEmail(e.target.value);
    },
    [errors, setEmail, setErrors]
  );

  return (
    <InputForm
      error={"email" in errors && errors.email.length > 0}
      aria-describedby="email-error"
    >
      <InputLabel htmlFor="email">Email Address</InputLabel>
      <Input id="email" type="email" value={email} onChange={onChangeEmail} />
      <FormHelperText id="email-error">{errors.email}</FormHelperText>
    </InputForm>
  );
};
