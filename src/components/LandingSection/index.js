import {
  Box,
  Grid,
  Typography,
  Stack,
  Divider,
  Fade,
  useMediaQuery,
} from "@mui/material";
import NotifyCard1 from "../../assets/notify_card_1.svg";
import NotifyCard2 from "../../assets/notify_card_2.svg";
import NotifyCard3 from "../../assets/notify_card_3.svg";
import Cohorts from "../../assets/Cohorts.svg";
import BellIcon from "../../assets/Bell.svg";
import EyeIcon from "../../assets/Eye.svg";
import LochLogo from "../../assets/LochIcon.svg";
import Testimonial1 from "../../assets/testimonial1.svg";
import Testimonial2 from "../../assets/testimonial2.svg";
import Testimonial3 from "../../assets/testimonial3.svg";
import SlideCarousel from "../SlideCarousel";
import AutoRotateCarousel from "../AutoRotateCarousel";
import { useTheme } from "@mui/styles";

const LandingSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box sx={{ p: { xs: 2, sm: 6 } }}>
      <Grid container spacing={2} sx={{ py: 2 }}>
        {isMobile && (
          <Grid item xs={12} textAlign="right">
            <img src={LochLogo} style={{ maxWidth: 50 }} />
          </Grid>
        )}
        <Grid item xs={12} sm={6}>
          <img src={BellIcon} sx={{ my: 2 }} />
          <Typography variant="h5" gutterBottom sx={{ color: "#fff" }}>
            Get notified when a highly correlated whale makes a move
          </Typography>
          <Typography
            variant="caption"
            sx={{ color: "#f2f2f2b3", lineHeight: 0.6, fontSize: 14 }}
          >
            Find out when a certain whale moves more than any preset amount
            on-chain or when a dormant whale you care about becomes active.
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Stack direction="row" spacing={2}>
            <AutoRotateCarousel
              items={[NotifyCard1, NotifyCard2, NotifyCard3]}
            />
          </Stack>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ pt: 4, pb: 2 }}>
        <Grid item xs={12} sm={6}>
          <img src={Cohorts} style={{ maxHeight: "250px" }} />
        </Grid>
        <Grid item xs={12} sm={6} style={{ textAlign: "right" }}>
          <img src={EyeIcon} sx={{ my: 2 }} />
          <Typography variant="h5" gutterBottom sx={{ color: "#fff" }}>
            Watch what the whales are doing
          </Typography>
          <Typography
            variant="caption"
            sx={{ color: "#f2f2f2b3", fontSize: 14, lineHeight: 0.6 }}
          >
            All whales are not equal. Know exactly what the whales impacting
            YOUR portfolio are doing.
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ py: 2 }}>
        <Grid item xs={12} sm={12}>
          <Typography
            style={{ textAlign: "right" }}
            variant="h6"
            gutterBottom
            sx={{ color: "#fff" }}
          >
            Testimonials
          </Typography>
          <Divider color={"#fff"} />

          <Stack direction="row" spacing={2} sx={{ py: 4 }}>
            {!isMobile && <img src={LochLogo} />}

            <SlideCarousel>
              <img
                src={Testimonial1}
                style={isMobile ? { maxWidth: 200 } : undefined}
              />

              <img
                src={Testimonial2}
                style={isMobile ? { maxWidth: 200 } : undefined}
              />
              <img
                src={Testimonial3}
                style={isMobile ? { maxWidth: 200 } : undefined}
              />
            </SlideCarousel>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LandingSection;
