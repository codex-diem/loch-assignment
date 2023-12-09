import { Stack, TextField, Button, Typography } from "@mui/material";
import { useState } from "react";
import { isValidEmail } from "../helpers/string.validation";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [showError, setShowError] = useState(false);

  const handleClick = (e) => {
    e && e.preventDefault();

    const errors = getErrors(email);
    if (Object.keys(errors).length > 0) {
      !showError && setShowError(true);
      console.log(errors);
      return;
    }

    window.location.replace("https://app.loch.one/welcome");
    console.log(email);
  };

  const getErrors = (email) => {
    const errors = {};
    if (!email) {
      errors.email = "Enter email";
    } else if (!isValidEmail(email)) {
      errors.email = "Please enter a valid email";
    }
    return errors;
  };

  const errors = showError ? getErrors(email) : {};

  return (
    <Stack
      direction="column"
      spacing={4}
      justifyContent="center"
      alignItems="center"
      sx={{
        height: "100vh",
        display: "flex",
        margin: "auto",
        padding: { xs: 2, sm: 16 },
      }}
    >
      <Typography
        variant="h6"
        sx={{ color: "#B0B1B3", fontSize: "39px", lineHeight: "46.8px" }}
      >
        Sign up for exclusive access.
      </Typography>
      <TextField
        fullWidth={true}
        placeholder="Email Address"
        label="Your email address"
        value={email}
        error={!!errors.email}
        helperText={errors.email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <Button
        fullWidth={true}
        size="large"
        onClick={handleClick}
        variant="contained"
        sx={{
          borderRadius: 1,
          height: 60,
          bgcolor: "#19191A",
          color: "fff",
          textTransform: "none",
        }}
      >
        Get started
      </Button>

      <Typography
        variant="caption"
        sx={{ fontSize: "16px", color: "#19191A", fontWeight: 500 }}
      >
        You’ll receive an email with an invite link to join.
      </Typography>
    </Stack>
  );
};

export default LoginPage;
