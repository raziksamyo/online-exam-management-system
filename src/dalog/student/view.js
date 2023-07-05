import { Grid, Dialog, DialogContent, IconButton, Card } from "@mui/material";
import MDTypography from "components/MDTypography";
import MDBox from "components/MDBox";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useState } from "react";

function View() {
  const [open, setOpen] = useState(false);
  return (
    <MDBox>
      <IconButton onClick={() => setOpen(true)}>
        <VisibilityIcon />
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
        <DialogContent sx={{ width: "100%" }}>
          <Card sx={{ width: "100%" }}>
            <Grid container>
              <Grid item xs={5}>
                <img
                  style={{ width: "90%", height: "150px" }}
                  src="https://media.istockphoto.com/id/1311423416/photo/home-interior-background-with-green-sofa-table-and-decor-in-living-room.jpg?s=1024x1024&w=is&k=20&c=GJWlfgsBKM1hSVLGIK0QOgnHzYXV6JVDGxdC-ry_gxI="
                  alt="mediaphoto"
                />
                <MDTypography>ID:111</MDTypography>
                <MDTypography>Name:Varun Sharma</MDTypography>
                <MDTypography>MobileNo:9012322891</MDTypography>
              </Grid>
              <Grid item xs={7}>
                <MDTypography>Address:162 Ambey nagar sukhilya</MDTypography>
                <MDTypography>Pincode:452010</MDTypography>
                <MDTypography>Gmail:varunsharma@gmail.com</MDTypography>
                <MDTypography>Qualification:B.Tech(Computer)</MDTypography>
                <MDTypography>JoinDate:19-06-2023</MDTypography>
                <MDTypography>Password:Mohit@123</MDTypography>
              </Grid>
            </Grid>
          </Card>
        </DialogContent>
      </Dialog>
    </MDBox>
  );
}
export default View;
