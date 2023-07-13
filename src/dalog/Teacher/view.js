import { Grid, Dialog, IconButton, Box, Typography } from "@mui/material";
import { useState } from "react";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import profileImage from "../../assets/Images/profile-icon.jpg";

function View() {
  const [open, setOpen] = useState(false);
  return (
    <Box>
      <IconButton
        onClick={() => setOpen(true)}
        color="info"
        sx={{
          "&:hover": {
            backgroundColor: "rgba(178, 205, 241, 0.62)",
          },
        }}
      >
        <RemoveRedEyeOutlinedIcon />
      </IconButton>
      <Dialog
        onClose={() => setOpen(false)}
        open={open}
        sx={{
          "& .MuiPaper-root": { width: "100%", alignItems: "center" },
        }}
      >
        <Typography variant="h3" sx={{ mt: 3 }}>
          Teacher Details
        </Typography>
        <Grid container sx={{ p: 2 }}>
          <Grid container item justifyContent="center" alignItems="center" xs={12} sx={{ p: 2 }}>
            <img
              src={profileImage}
              alt="mediaphoto"
              style={{
                borderRadius: "50%",
                width: "200px",
                height: "200px",
              }}
            />
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography variant="h5">Name :-</Typography>
              <Typography sx={{ fontWeight: 200 }}>Varun Sharma</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h5">Contact No :-</Typography>
              <Typography sx={{ fontWeight: 200 }}>9012322891</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h5">Gender :-</Typography>
              <Typography sx={{ fontWeight: 200 }}>Male</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h5">DOB :-</Typography>
              <Typography sx={{ fontWeight: 200 }}>19-06-2023</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h5">Qualification :-</Typography>
              <Typography sx={{ fontWeight: 200 }}>BCA, MCA, B.Tech</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h5">Joining Date:-</Typography>
              <Typography sx={{ fontWeight: 200 }}>19-06-2023</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h5">Email ID :- </Typography>
              <Typography sx={{ fontWeight: 200 }}>varunsharma@gmail.com</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h5">Experience :- </Typography>
              <Typography sx={{ fontWeight: 200 }}>2 yrs</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5">Address :</Typography>
              <Typography sx={{ fontWeight: 200 }}>
                96 , A Green Park CoLony Dhar Road Indore , Indore (M.P)
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Dialog>
    </Box>
  );
}
export default View;
