import React from "react";
import Header from "./components/Header";
import styles from "./App.module.scss";
// import Main from "./components/Main";
import {
  Button,
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mainFeaturesPost: {
    position: "relative",
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  mainFeaturesPostContent: {
    position: "relative",
    padding: theme.spacing(3),
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={styles.root}>
      <Header />

      <main>
        <Paper style={classes.mainFeaturesPost}>
          <Container maxWidth="md">
            <Grid>
              <Grid item md={6}>
                <div style={classes.mainFeaturesPostContent}>
                  <Typography
                    component="h1"
                    variant="h3"
                    color="inherit"
                    gutterBottom
                  >
                    Material UI Site
                  </Typography>
                  <Typography variant="h5" color="inherit" paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent vel laoreet mauris, sed tincidunt elit.
                    Pellentesque interdum purus metus, ac maximus ex ullamcorper
                    eu. Ut ac lobortis mi. Mauris vestibulum.
                  </Typography>
                  <Button variant="contained" color="secondary">
                    Learn more
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Paper>
      </main>
      <></>
    </div>
  );
}
export default App;
