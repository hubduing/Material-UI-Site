import React from "react";
import { Container, Paper, Typography, Button, Grid } from "@material-ui/core";

const MainHead = ({ classes, urlImage }) => (
  <Paper
    className={classes.mainFeaturesPost}
    style={{ backgroundImage: `url(${urlImage})` }}
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              vel laoreet mauris, sed tincidunt elit.
            </Typography>
            <Button variant="contained" color="secondary">
              Learn more
            </Button>
          </div>
        </Grid>
      </Grid>
    </Container>
  </Paper>
);

export default MainHead;
