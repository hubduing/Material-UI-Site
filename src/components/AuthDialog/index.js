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
import { validateEmail, validatePassword } from "../../utils/validation";

const AuthDialog = ({ open, onClose, onSubmit, title, isSignup }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
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
    if (isSignup && password !== confirmPassword) {
      setError("Пароли не совпадают.");
      return;
    }
    setError("");

    const url = isSignup
      ? "http://localhost:5000/api/register"
      : "http://localhost:5000/api/login";
    const body = { email, password };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();

      if (response.ok) {
        onSubmit(data.token);
        onClose();
      } else {
        setError(
          data.error || (isSignup ? "Ошибка регистрации" : "Ошибка входа")
        );
      }
    } catch {
      setError("Ошибка сети");
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {isSignup ? "Sign up to create an account" : "Log in to see video"}
        </DialogContentText>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <TextField
          autoFocus
          margin="dense"
          label="Email address"
          type="email"
          fullWidth
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Password"
          type="password"
          fullWidth
          onChange={(e) => setPassword(e.target.value)}
        />
        {isSignup && (
          <TextField
            margin="dense"
            label="Confirm Password"
            type="password"
            fullWidth
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          {isSignup ? "Sign Up" : "Log In"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AuthDialog;
