import React, { useState, useCallback } from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import MySnackBarContent from "./MySnackBarContent";
import EmailForm from "./form/emailForm";
import PasswordForm from "./form/passwordForm";
import PasswordConfirmForm from "./form/passwordConfirmForm";

import { Button, Typography, CircularProgress } from "@material-ui/core";

const Contents = styled.div`
  & {
    width: 50%;
    background-color: white;
    border-radius: 10px;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
    margin: 10% auto 0;
    padding: 40px 0 0;
    display: flex;
    flex-direction: column;
    text-align: center;
  }
`;

const PageTitle = styled.div`
  & {
    padding: 15px 10%;
  }
`;

const Form = styled.form`
  & {
    flex: 1;
    padding: 20px;
    display: flex;
    flex-direction: column;
  }
`;

export default ({ user, signUp }) => {
  const { uid } = user;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [messageOpen, setMessageOpen] = useState(false);

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      let currentErrors = errors;
      if (email.length <= 0) {
        currentErrors = { ...currentErrors, email: "Required." };
      }
      if (password.length <= 0) {
        currentErrors = { ...currentErrors, password: "Required." };
      }
      if (password !== passwordConfirm) {
        currentErrors = {
          ...currentErrors,
          passwordConfirm: "Does not match the password."
        };
      }
      if (Object.keys(currentErrors).length > 0) {
        setErrors(currentErrors);
        return;
      }
      setSubmitting(true);
      signUp(email, password).catch(e => {
        console.error(e.code, e.message);
        setSubmitting(false);
        setSubmitError(e);
        setMessageOpen(true);
      });
    },
    [email, password, passwordConfirm, errors, signUp]
  );

  const handleClose = () => {
    setMessageOpen(false);
  };

  return uid ? (
    <Redirect to={`/users/${uid}`} />
  ) : (
    <>
      <Contents>
        <PageTitle>
          <Typography variant="h2">SignUp</Typography>
        </PageTitle>
        <Form onSubmit={onSubmit}>
          {submitError.message && messageOpen ? (
            <MySnackBarContent
              onClose={handleClose}
              variant="error"
              message={submitError.message}
            />
          ) : (
            ""
          )}
          <EmailForm {...{ email, setEmail, errors, setErrors }} />
          <PasswordForm {...{ password, setPassword, errors, setErrors }} />
          <PasswordConfirmForm
            {...{
              passwordConfirm,
              setPasswordConfirm,
              errors,
              setErrors
            }}
          />
          <Button
            type={"submit"}
            fullWidth
            variant={"contained"}
            color={"primary"}
            disabled={Object.keys(errors).length > 0}
            // onClick={onSubmit}
          >
            {submitting ? (
              <CircularProgress
                style={{ color: "#fff" }}
                color={"inherit"}
                size={16}
              />
            ) : (
              "Submit"
            )}
          </Button>
        </Form>
      </Contents>
    </>
  );
};
