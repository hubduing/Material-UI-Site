import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@material-ui/core";
import Box from "@mui/material/Box";

const AuthButtons = () => {
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleClickOpenLogin = () => {
    setOpenLogin(true);
    setError("");
  };

  const handleCloseLogin = () => {
    setOpenLogin(false);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    localStorage.removeItem("token"); 
  };

  const handleClickOpenSignup = () => {
    setOpenSignup(true);
    setError("");
  };

  const handleCloseSignup = () => {
    setOpenSignup(false);
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,20}$/;
    return passwordRegex.test(password);
  };

  const validateLogin = () => {
    if (!validateEmail(email)) {
      setError("Введите корректный адрес электронной почты.");
      return false;
    }
    if (!validatePassword(password)) {
      setError(
        "Пароль должен содержать 6-20 символов, включая буквы, цифры и специальные знаки."
      );
      return false;
    }
    setError("");
    return true;
  };

  const handleLogin = async () => {
    if (validateLogin()) {
      try {
        const response = await fetch("http://localhost:5000/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (response.ok) {
          setLoggedIn(true);
          localStorage.setItem("token", data.token);
          setOpenLogin(false);
        } else {
          setError(data.error || "Ошибка входа");
        }
      } catch (error) {
        setError("Ошибка сети");
      }
    }
  };

  const handleSignup = async () => {
    if (!validateEmail(email)) {
      setError("Введите корректный адрес электронной почты.");
      return;
    }
    if (!validatePassword(password)) {
      setError(
        "Пароль должен содержать 6-20 символов, включая буквы, цифры и специальные знаки."
      );
      return;
    }
    if (password !== confirmPassword) {
      setError("Пароли не совпадают.");
      return;
    }
    setError("");

    try {
      const response = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setOpenSignup(false);
      } else {
        setError(data.error || "Ошибка регистрации");
      }
    } catch (error) {
      setError("Ошибка сети");
    }
  };

  return (
    <>
      <Box mr={3}>
        <Button
          color="inherit"
          variant="outlined"
          onClick={loggedIn ? handleLogout : handleClickOpenLogin}
        >
          {loggedIn ? "Log Out" : "Log In"}
        </Button>
        <Dialog
          open={openLogin}
          onClose={handleCloseLogin}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Log in</DialogTitle>
          <DialogContent>
            <DialogContentText>Log in to see video</DialogContentText>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email address"
              type="email"
              fullWidth
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="dense"
              id="pass"
              label="Password"
              type="password"
              fullWidth
              onChange={(e) => setPassword(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseLogin} color="primary">
              Cancel
            </Button>
            <Button onClick={handleLogin} color="primary">
              Log in
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
      <Button
        color="secondary"
        variant="contained"
        onClick={handleClickOpenSignup}
        style={{ marginRight: "16px" }}
      >
        Sign Up
      </Button>
      <Dialog
        open={openSignup}
        onClose={handleCloseSignup}
        aria-labelledby="form-dialog-title-signup"
      >
        <DialogTitle id="form-dialog-title-signup">Sign Up</DialogTitle>
        <DialogContent>
          <DialogContentText>Sign up to create an account</DialogContentText>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <TextField
            autoFocus
            margin="dense"
            id="signup-email"
            label="Email address"
            type="email"
            fullWidth
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="dense"
            id="signup-password"
            label="Password"
            type="password"
            fullWidth
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            margin="dense"
            id="signup-confirm-password"
            label="Confirm Password"
            type="password"
            fullWidth
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseSignup} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSignup} color="primary">
            Sign Up
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AuthButtons;
