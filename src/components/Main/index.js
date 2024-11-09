import React from "react";
import { Button, Container, Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
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
    padding: theme.spacing(9),
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0, .3)",
  },
}));
function Main() {
  const classes = useStyles();
  return (
    <main>
      <Paper
        className={classes.mainFeaturesPost}
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1730407401172-aeed1b1ace5b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
        }}
      >
        <Container maxWidth="lg">
          <div className={classes.overlay} />
          <Grid>
            <Grid item md={6}>
              <div className={classes.mainFeaturesPostContent}>
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
                  Praesent vel laoreet mauris, sed tincidunt elit. Pellentesque
                  interdum purus metus, ac maximus ex ullamcorper eu. Ut ac
                  lobortis mi. Mauris vestibulum.
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
  );
}
export default Main;
