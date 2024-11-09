import React from "react";
import Header from "./components/Header";
import styles from "./App.module.scss";
import Main from "./components/Main";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  
}));
function App() {
  const classes = useStyles();
  return (
    <div className={styles.root}>
      <Header />
      <Main/>
      <>
        
      </>
    </div>
  );
}
export default App;
