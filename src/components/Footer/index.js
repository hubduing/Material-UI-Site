import React from "react";
import {
  Typography,
  BottomNavigation,
  BottomNavigationAction,
} from "@material-ui/core";
import { Restore, Favorite, LocationOn, Folder } from "@mui/icons-material";
import style from './Footer.module.scss'

const Footer = ({ value, handleChange }) => (
  <footer className={style.footer}>
    <Typography variant="h6" align="center" gutterBottom >
      Footer
    </Typography>
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={style.root}
    >
      <BottomNavigationAction
        label="Recents"
        value="recents"
        icon={<Restore />}
      />
      <BottomNavigationAction
        label="Favorites"
        value="favorites"
        icon={<Favorite />}
      />
      <BottomNavigationAction
        label="Nearby"
        value="nearby"
        icon={<LocationOn />}
      />
      <BottomNavigationAction label="Folder" value="folder" icon={<Folder />} />
    </BottomNavigation>
    <Typography
      align="center"
      color="textSecondary"
      component="p"
      variant="subtitle1"
    >
      Material UI Site
    </Typography>
  </footer>
);

export default Footer;
