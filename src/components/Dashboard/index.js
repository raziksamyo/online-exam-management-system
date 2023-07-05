/* eslint-disable react/jsx-no-useless-fragment */
import { Box, Grid } from "@mui/material";
import BasicCard from "coreComponent/basicCard";
import dayWord from "../../context/common";
import img from "../../assets/Images/Dashboard-bg.jpg";

export default function DashboardMain() {
  return (
    <>
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
    </>
  );
}
