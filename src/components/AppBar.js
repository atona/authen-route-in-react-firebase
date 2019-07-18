import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import MyMenu from "../containers/MyMenu";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  link: {
    color: "#fff",
    textDecoration: "none"
  }
}));

const MenuArea = styled.div`
  flex-grow: 1;
`;

const NaviArea = styled.div``;

export default () => {
  const classes = useStyles();

  const user = useSelector(state => state.user);

  const { uid } = user;

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
          <MenuArea>
            <Button color="inherit">
              <Link to="/" className={classes.link}>
                Home
              </Link>
            </Button>
            <Button color="inherit">
              <Link to="/public" className={classes.link}>
                Public
              </Link>
            </Button>
            <Button color="inherit">
              <Link to={`/users/${uid}`} className={classes.link}>
                Profile
              </Link>
            </Button>
          </MenuArea>
          <NaviArea>
            <MyMenu />
          </NaviArea>
        </Toolbar>
      </AppBar>
    </>
  );
};
