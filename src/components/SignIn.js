import React, { useState, useCallback } from "react";
import { Redirect } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import MySnackBarContent from "./MySnackBarContent";
import EmailForm from "./form/emailForm";
import PasswordForm from "./form/passwordForm";

import { Button, Typography, CircularProgress } from "@material-ui/core";

import Contents from "../components/Contents";

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

export default ({ user, signIn }) => {
  const { uid } = user;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
      if (Object.keys(currentErrors).length > 0) {
        setErrors(currentErrors);
        return;
      }
      setSubmitting(true);
      signIn(email, password).catch(e => {
        console.error(e.code, e.message);
        setSubmitting(false);
        setSubmitError(e);
        setMessageOpen(true);
      });
    },
    [email, password, errors, signIn]
  );

  const handleClose = () => {
    setMessageOpen(false);
  };

  return uid ? (
    <Redirect to={`/users/${uid}`} />
  ) : (
    <>
      <ThemeProvider theme={{ size: "small" }}>
        <Contents>
          <PageTitle>
            <Typography variant="h2">SignIn</Typography>
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
            <Button
              type={"submit"}
              fullWidth
              variant={"contained"}
              color={"primary"}
              disabled={Object.keys(errors).length > 0}
              // onClick={onSubmit}
            >
              {/* {mode === modes.signin ? "Sign In" : "Sign Up"} */}
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
      </ThemeProvider>
    </>
  );
};
