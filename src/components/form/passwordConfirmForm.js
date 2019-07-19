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

export default ({ passwordConfirm, setPasswordConfirm, errors, setErrors }) => {
  const onChangePasswordConfirm = useCallback(
    e => {
      delete errors.passwordConfirm;
      setErrors(errors);
      setPasswordConfirm(e.target.value);
    },
    [errors, setErrors, setPasswordConfirm]
  );

  return (
    <InputForm
      error={"passwordConfirm" in errors && errors.passwordConfirm.length > 0}
      aria-describedby="password-confirm-error"
    >
      <InputLabel htmlFor="password-confirm">Password Confirm</InputLabel>
      <Input
        id="password-confirm"
        type="password"
        value={passwordConfirm}
        onChange={onChangePasswordConfirm}
      />
      <FormHelperText id="password-confirm-error">
        {errors.passwordConfirm}
      </FormHelperText>
    </InputForm>
  );
};
