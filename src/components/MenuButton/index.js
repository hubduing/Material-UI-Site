import React from "react";
import { IconButton } from "@material-ui/core";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "./MenuButton.module.scss";
const MenuButton = () => {
  return (
    <IconButton
      edge="start"
      color="inherit"
      aria-label="menu"
      className={styles.menuButton}
    >
      <MenuIcon />
    </IconButton>
  );
};
export default MenuButton;
