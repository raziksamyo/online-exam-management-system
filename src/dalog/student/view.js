import { Grid, Dialog, IconButton, Card, Box, Typography } from "@mui/material";
import MDBox from "components/MDBox";
import { useState } from "react";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import profileImage from "../../assets/Images/profile-icon.jpg";

function View() {
  const [open, setOpen] = useState(false);
  return (
    <MDBox>
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
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          "& .MuiPaper-root": { width: "100%", alignItems: "center" },
        }}
      >
        <Card>
          <Typography variant="h2" sx={{ mt: 3 }}>
            Student Details
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
            <Grid xs={12}>
              <Box sx={{ display: "flex", justifyContent: "space-around", mb: 2 }}>
                <Grid xs={5} sx={{ pb: 1 }}>
                  <Typography sx={{ fontWeight: 500 }}>
                    Name :<Typography sx={{ fontWeight: 200 }}>Varun Sharma</Typography>
                  </Typography>
                </Grid>
                <Grid xs={3} sx={{ pb: 1 }}>
                  <Typography sx={{ fontWeight: 500 }}>
                    MobileNo :<Typography sx={{ fontWeight: 200 }}>9012322891</Typography>
                  </Typography>
                </Grid>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-around", mb: 2 }}>
                <Grid xs={5} sx={{ pb: 1 }}>
                  <Typography sx={{ fontWeight: 500 }}>
                    Gender :<Typography sx={{ fontWeight: 200 }}>Male</Typography>
                  </Typography>
                </Grid>
                <Grid xs={3} sx={{ pb: 1 }}>
                  <Typography sx={{ fontWeight: 500 }}>
                    Education :<Typography sx={{ fontWeight: 200 }}>BCA</Typography>
                  </Typography>
                </Grid>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-around", mb: 2 }}>
                <Grid xs={5} sx={{ pb: 1 }}>
                  <Typography sx={{ fontWeight: 500 }}>
                    Email :<Typography sx={{ fontWeight: 200 }}>varunsharma@gmail.com</Typography>
                  </Typography>
                </Grid>
                <Grid xs={3} sx={{ pb: 1 }}>
                  <Typography sx={{ fontWeight: 500 }}>
                    DOB :<Typography sx={{ fontWeight: 200 }}>19-06-2023</Typography>
                  </Typography>
                </Grid>
              </Box>

              <Box sx={{ display: "flex", ml: 5 }}>
                <Grid xs={12} sx={{ pb: 1 }}>
                  <Typography sx={{ fontWeight: 500 }}>
                    Address :
                    <Typography sx={{ fontWeight: 200 }}>
                      96 , A Green Park CoLony Dhar Road Indore , Indore (M.P)
                    </Typography>
                  </Typography>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Card>
      </Dialog>
    </MDBox>
  );
}
export default View;
