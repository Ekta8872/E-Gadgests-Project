import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <Box style={Styles.container} sx={{ marginTop: "10rem" }}>
      <Stack direction="row" sx={{ padding: "5rem" }} spacing={25}>
        <Box>
          <Typography variant="h5" sx={{ color: "white", fontWeight: "bold" }}>
            Get In Touch
          </Typography>
          <Stack direction="row" spacing={2} sx={{ width: "23vw", mt: 2 }}>
            <PlaceIcon sx={{ color: "white" }} />
            <Typography sx={{ color: "white" }}>
              Vaishali Marg, Vaishali Nagar, Jaipur , 302021 Rajasthan
            </Typography>
          </Stack>
          <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
            <CallIcon sx={{ color: "white" }} />
            <Typography sx={{ color: "white" }}> 91+ 7340446336</Typography>
          </Stack>
          <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
            <EmailIcon sx={{ color: "white" }} />
            <Typography sx={{ color: "white" }}>
              {" "}
              ektakumari8872@gmail.com
            </Typography>
          </Stack>
        </Box>
        <Box>
          <Typography variant="h6" sx={{ color: "white", fontWeight: "bold" }}>
            Information
          </Typography>
          <Stack spacing={2} sx={{ mt: 2 }}>
            <Typography sx={{ color: "white" }}>My Account</Typography>
            <Typography sx={{ color: "white" }}>WishList</Typography>
            <Typography sx={{ color: "white" }}>Cart</Typography>
            <Typography sx={{ color: "white" }}>SignUp</Typography>
          </Stack>
        </Box>
        <Box sx={{ float: "right" }}>
          <Typography
            variant="h6"
            sx={{ color: "white", fontWeight: "bold", mb: 2 }}
          >
            For Any Queries
          </Typography>
          <Button
            variant="outlined"
            sx={{
              color: "white",
              padding: 2,
              border: "1px solid white",
              width: "15vw",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            Contact Us Now !
          </Button>
        </Box>
      </Stack>
      <Box sx={{ backgroundColor: "#0f0f0f", mb: 0, p: 2 }}>
        <Typography sx={{ color: "white", pl: 6 }}>
          Designed By : Ekta Kumari , Nisha Yadav
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;

const Styles = {
  container: {
    backgroundColor: "black",
    height: "400px",
  },
};
