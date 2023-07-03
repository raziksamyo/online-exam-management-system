import { Grid, Dialog, DialogContent, IconButton, Card } from "@mui/material";
import MDTypography from "components/MDTypography";
import MDBox from "components/MDBox";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function View() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <MDBox>
      <IconButton onClick={() => setOpen(true)}>
        <VisibilityIcon />
      </IconButton>
      <Dialog
        onClose={() => setOpen(false)}
        fullWidth
        maxWidth="md"
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          "& .MuiPaper-root": { width: "100%", alignItems: "center" },
        }}
      >
        <DialogContent sx={{ width: "100%" }}>
          <Card>
            <Grid container>
              <Grid item xs={12} sm={5} sx={{ height: isMobile ? "50vh" : "30vh" }}>
                <img
                  style={{
                    width: "100%",
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "cover",
                    borderRadius: "50%",
                    overflow: "hidden",
                    padding: "10px",
                  }}
                  src="https://media.istockphoto.com/id/1311423416/photo/home-interior-background-with-green-sofa-table-and-decor-in-living-room.jpg?s=1024x1024&w=is&k=20&c=GJWlfgsBKM1hSVLGIK0QOgnHzYXV6JVDGxdC-ry_gxI="
                  alt="mediaphoto"
                />
              </Grid>
              <Grid item xs={12} sm={7}>
                <MDTypography>
                  <b>ID:</b> 111
                </MDTypography>
                <MDTypography>
                  <b>Name:</b> Varun Sharma
                </MDTypography>
                <MDTypography>
                  <b>MobileNo:</b> 9012322891
                </MDTypography>
                <MDTypography>
                  <b>Address:</b> 162 Ambey nagar sukhilya
                </MDTypography>
                <MDTypography>
                  <b>Pincode:</b> 452010
                </MDTypography>
                <MDTypography>
                  <b>Gmail:</b> varunsharma@gmail.com
                </MDTypography>
                <MDTypography>
                  <b>Qualification:</b> B.Tech(Computer)
                </MDTypography>
                <MDTypography>
                  <b>JoinDate:</b> 19-06-2023
                </MDTypography>
              </Grid>
            </Grid>
          </Card>
        </DialogContent>
      </Dialog>
    </MDBox>
  );
}
export default View;
