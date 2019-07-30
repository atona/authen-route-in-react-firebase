import React from "react";
import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import MyMenu from "../containers/MyMenu";
import AppDrawer from "../components/AppDrawer";

const MenuArea = styled.div`
  flex-grow: 1;
`;

const NaviArea = styled.div``;

export default () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <AppDrawer />
          <MenuArea />
          <NaviArea>
            <MyMenu />
          </NaviArea>
        </Toolbar>
      </AppBar>
    </>
  );
};
