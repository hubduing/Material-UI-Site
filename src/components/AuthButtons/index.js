import React from "react";
import { Button } from "@material-ui/core";
import Box from "@mui/material/Box";
const AuthButtons = () => {
  return (
    <>
      <Box mr={3}>
        <Button color="inherit" variant="outlined">
          Log In
        </Button>
      </Box>
      <Button color="secondary" variant="contained">
        Sign Up
      </Button>
    </>
  );
};
export default AuthButtons;
