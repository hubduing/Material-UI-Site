import React from "react";
import { Typography } from "@material-ui/core";
import styles from "./Title.module.scss";
const Title = () => {
  return (
    <Typography variant="h6" className={styles.title}>
      Material UI-Site
    </Typography>
  );
};
export default Title;
