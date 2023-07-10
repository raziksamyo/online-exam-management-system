// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { Box, Grid } from "@mui/material";
import BasicCard from "coreComponent/basicCard";
import dayWord from "context/common";
import img from "../../assets/Images/Dashboard-bg.jpg";

function Dashboard() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Box>
        <Grid
          container
          // justify="center"
          // alignItems="center"
          // spacing={2}
          sx={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "auto",
            // width: "100%",
          }}
        >
          {dayWord.map((item) => (
            <Grid item xs={12} sm={6} md={4} lg={3} sx={{ p: 1 }}>
              <BasicCard heading={item.heading} count={item.count} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </DashboardLayout>
  );
}

export default Dashboard;
