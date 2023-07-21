import { Grid, Dialog, IconButton, Box, Typography } from "@mui/material";
import { useState } from "react";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import PropTypes from "prop-types";
import profileImage from "../../assets/Images/profile-icon.jpg";

function View({ data }) {
  const [open, setOpen] = useState(false);

  const handelview = () => {
    setOpen(true);
    console.log("Data", data);
  };
  return (
    <Box>
      <IconButton
        onClick={handelview}
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
              <Typography sx={{ fontWeight: 200 }}>{data.name}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h5">Contact No :-</Typography>
              <Typography sx={{ fontWeight: 200 }}>{data.contactNumber}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h5">Gender :-</Typography>
              <Typography sx={{ fontWeight: 200 }}>{data.gender}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h5">DOB :-</Typography>
              <Typography sx={{ fontWeight: 200 }}>{data.dob}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h5">Qualification :-</Typography>
              <Typography sx={{ fontWeight: 200 }}>{data.qualification}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h5">Joining Date:-</Typography>
              <Typography sx={{ fontWeight: 200 }}>{data.joinDate}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h5">Email ID :- </Typography>
              <Typography sx={{ fontWeight: 200 }}>{data.email}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h5">Experience :- </Typography>
              <Typography sx={{ fontWeight: 200 }}>{data.experience}yrs</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5">Address :</Typography>
              <Typography sx={{ fontWeight: 200 }}>{data.address}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Dialog>
    </Box>
  );
}
View.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    contactNumber: PropTypes.number.isRequired,
    address: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    dob: PropTypes.string.isRequired,
    joinDate: PropTypes.string.isRequired,
    experience: PropTypes.number.isRequired,
    qualification: PropTypes.arrayOf(PropTypes.string).isRequired,

    // Add other properties as needed
  }).isRequired,
};
export default View;
