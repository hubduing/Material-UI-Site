import React from "react";
import { Container, Grid, Paper, Button, Typography } from "@material-ui/core";
import styles from "./Main.module.scss";
const Main = () => {
  return (
    <main>
      <Paper style={styles.mainFeaturesPost}>
        <Container maxWidth="md">
          <Grid>
            <Grid item md={6}>
              <div style={styles.mainFeaturesPostContent}>
                <Typography component="h1" variant="h3" color="inherit" gutterBottom>
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
};
export default Main;
