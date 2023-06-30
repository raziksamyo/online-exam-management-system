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
          justify="center"
          alignItems="center"
          spacing={2}
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "88vh",
            width: "100%",
          }}
        >
          {dayWord.map((item) => (
            <Grid item xs={3}>
              <BasicCard heading={item.heading} count={item.count} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
