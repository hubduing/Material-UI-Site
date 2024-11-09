// src/components/Header/index.js
import React from "react";
import { AppBar, Container, Toolbar } from "@material-ui/core";
import MenuButton from "../MenuButton";
import Title from "../Title";
import AuthButtons from "../AuthButtons";
const Header = () => {
  return (
    <AppBar position="fixed">
      <Container fixed>
        <Toolbar>
          <MenuButton />
          <Title />
          <div style={{ flexGrow: 1 }} />{" "}
          <AuthButtons />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
