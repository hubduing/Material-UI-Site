import React from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";

const Content = ({ classes }) => (
  <div className={classes.mainContent}>
    <Container maxWidth="md">
      <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
        Material UI Site
      </Typography>
      <Typography variant="h5" align="center" color="textSecondary" paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ducimus
        quam, fugit facilis mollitia vitae dolor laborum doloribus similique
        quod.
      </Typography>
      <div className={classes.mainButtons}>
        <Grid container spacing={4} justify="center">
          <Grid item>
            <Button variant="contained" color="primary">
              Super start
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="primary">
              Learn More
            </Button>
          </Grid>
        </Grid>
      </div>
    </Container>
  </div>
);

export default Content;
