import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import LandingSection from "../components/LandingSection";

const LoginContainer = () => {
  return (
    <Grid container spacing={0} sx={{ background: "#000" }}>
      <Grid
        item
        xs={12}
        sm={7}
        sx={{
          // background:
          //   "linear-gradient(to left bottom, rgba(0, 0, 0, 0), rgba(47, 21, 208, 1), rgba(31, 169, 17, 0.81) )",
          background:
            "linear-gradient(to right top, rgba(31, 169, 17, 0.81), rgba(47, 21, 208, 1), rgba(0, 0, 0, 0))",
        }}
      >
        <LandingSection />
      </Grid>
      <Grid
        item
        sx={{
          background: "#fff",
          position: { xs: "relative", sm: "fixed" },

          right: 0,
          width: "inherit",
        }}
        xs={12}
        sm={5}
        alignItems="center"
        justifyContent="center"
      >
        <Outlet />
      </Grid>
    </Grid>
  );
};

export default LoginContainer;
