import { Grid, Dialog, DialogContent, IconButton, Card, Box, Typography } from "@mui/material";
import MDBox from "components/MDBox";
import { useState } from "react";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import profileImage from "../../assets/Images/pro.jpg";

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
        <DialogContent sx={{ width: "100%", bgcolor: "#f0f2f5" }}>
          <Card>
            <Grid container sx={{ p: 2 }}>
              <Grid
                container
                item
                justifyContent="center"
                alignItems="center"
                xs={12}
                sx={{ p: 2 }}
              >
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
                <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                  <Grid xs={5} sx={{ pb: 2 }}>
                    <Typography>
                      <b>Name:</b>
                      Varun Sharma
                    </Typography>
                  </Grid>
                  <Grid xs={5} sx={{ pb: 2 }}>
                    <Typography>
                      <b>MobileNo:</b>
                      9012322891
                    </Typography>
                  </Grid>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                  <Grid xs={5} sx={{ pb: 2 }}>
                    <Typography>
                      <b>Qualification:</b>
                      BCA, MCA, B.Tech...
                    </Typography>
                  </Grid>
                  <Grid xs={5} sx={{ pb: 2 }}>
                    <Typography>
                      <b>Pincode:</b>
                      452010
                    </Typography>
                  </Grid>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                  <Grid xs={5} sx={{ pb: 1 }}>
                    <Typography>
                      <b>Gmail:</b>
                      varunsharma@gmail.com
                    </Typography>
                  </Grid>
                  <Grid xs={5} sx={{ pb: 1 }}>
                    <Typography>
                      <b>JoinDate:</b>
                      19-06-2023
                    </Typography>
                  </Grid>
                </Box>

                <Box sx={{ display: "flex" }}>
                  <Grid xs={10} sx={{ pb: 1, ml: 2 }}>
                    <Typography>
                      <b>Address:</b>
                      162 Ambey nagar sukhilyasajdicwqbfj WJKDSAKJC,MES FKJB
                    </Typography>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Card>
        </DialogContent>
      </Dialog>
    </MDBox>
  );
}
export default View;
