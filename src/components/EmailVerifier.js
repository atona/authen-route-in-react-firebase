import React, { useState, useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, CircularProgress } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import MySnackBarContent from "./MySnackBarContent";

import { fireAuth } from "../fireApi";

const useStyles = makeStyles(theme => ({
  button: {
    marginTop: "15px",
    maxWidth: "250px"
  },
  leftIcon: {
    marginRight: theme.spacing(1)
  },
  rightIcon: {
    marginLeft: theme.spacing(1)
  },
  iconSmall: {
    fontSize: 20
  }
}));

export default ({ user, sendEmailVerification }) => {
  const classes = useStyles();
  const [submitError, setSubmitError] = useState({});
  const [submitSuccess, setSubmitSuccess] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [messageOpen, setMessageOpen] = useState(false);
  const { email } = user;

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      const reSendEmailVerification = async () => {
        const user = await fireAuth.currentUser;
        sendEmailVerification(user)
          .then(() => {
            setSubmitting(false);
            setSubmitSuccess({ message: "確認メールを送信しました。" });
            setMessageOpen(true);
          })
          .catch(e => {
            setSubmitting(false);
            setSubmitError(e);
            setMessageOpen(true);
            console.log(e);
          });
      };
      setSubmitting(true);
      reSendEmailVerification();
    },
    [sendEmailVerification]
  );

  const handleClose = () => {
    setSubmitSuccess({});
    setSubmitError({});
    setMessageOpen(false);
  };

  return (
    <>
      <div>まだ登録は完了していません。</div>
      <div>{email} に確認メールを送信しました。</div>
      <div>メールに記載されているURLをクリックすることで、本登録されます。</div>
      {submitError.message && messageOpen ? (
        <MySnackBarContent
          onClose={handleClose}
          variant="error"
          message={submitError.message}
        />
      ) : (
        ""
      )}
      {submitSuccess.message && messageOpen ? (
        <MySnackBarContent
          onClose={handleClose}
          variant="success"
          message={submitSuccess.message}
        />
      ) : (
        ""
      )}
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={onSubmit}
      >
        {submitting ? (
          <CircularProgress
            style={{ color: "#fff" }}
            color={"inherit"}
            size={16}
          />
        ) : (
          <>
            もう一度確認メールを送る
            <SendIcon className={classes.rightIcon}>send</SendIcon>
          </>
        )}
      </Button>
    </>
  );
};
