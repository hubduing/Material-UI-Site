import React, { useState } from "react";
import { Button } from "@material-ui/core";
import Box from "@mui/material/Box";
import AuthDialog from "../AuthDialog";

const AuthButtons = () => {
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLoginSuccess = (token) => {
    setLoggedIn(true);
    localStorage.setItem("token", token);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    localStorage.removeItem("token");
  };

  return (
    <>
      <Box mr={3}>
        <Button
          color="inherit"
          variant="outlined"
          onClick={loggedIn ? handleLogout : () => setOpenLogin(true)}
        >
          {loggedIn ? "Log Out" : "Log In"}
        </Button>
      </Box>

      {!loggedIn && (
        <Button
          color="secondary"
          variant="contained"
          onClick={() => setOpenSignup(true)}
          style={{ marginRight: "16px" }}
        >
          Sign Up
        </Button>
      )}

      <AuthDialog
        open={openLogin}
        onClose={() => setOpenLogin(false)}
        onSubmit={handleLoginSuccess}
        title="Log In"
        isSignup={false}
      />

      <AuthDialog
        open={openSignup}
        onClose={() => setOpenSignup(false)}
        onSubmit={handleLoginSuccess}
        title="Sign Up"
        isSignup={true}
      />
    </>
  );
};

export default AuthButtons;
