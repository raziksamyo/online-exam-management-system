/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import SchoolIcon from "@mui/icons-material/School";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
import LibraryBooksRoundedIcon from "@mui/icons-material/LibraryBooksRounded";
import MDTypography from "components/MDTypography";
import "./basicCard.css";
// import MDBox from "components/MDBox";
// import contained from "assets/theme/components/button/contained";
// import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";

export default function BasicCard(props) {
  const { heading, count } = props;

  // const useStyles = makeStyles({
  //   cardContainer: {
  //     boxShadow: "0px 4px 8px rgba(26, 115, 232, 0.2)",
  //     display: "flex",
  //     flexDirection: "column",
  //     height: "25%",
  //   },
  // });

  // const classes = useStyles();

  return (
    <Card>
      <CardContent>
        <Grid container>
          <Grid item justifyContent="left" alignItems="left" xs={12}>
            <Grid container>
              <Grid
                item
                sx={{
                  backgroundColor: "#e4edfa",
                  borderRadius: 4,
                  p: 3,
                }}
              >
                {heading === "Total Teachers" ? (
                  <GroupsRoundedIcon fontSize="large" className="teacher" />
                ) : heading === "Total Students" ? (
                  <SchoolIcon fontSize="large" className="teacher" />
                ) : heading === "Total Courses" ? (
                  <LibraryBooksRoundedIcon fontSize="large" className="teacher" />
                ) : (
                  <BorderColorRoundedIcon fontSize="large" className="teacher" />
                )}
              </Grid>
            </Grid>
          </Grid>
          <Grid item container justifyContent="right" alignItems="right" xs={12}>
            <MDTypography color="text.secondary" variant="h3">
              {count}
            </MDTypography>
          </Grid>

          <Grid item container justifyContent="right" alignItems="right" xs={12}>
            <MDTypography sx={{ mt: 2, fontSize: 14 }} color="text.secondary" gutterBottom>
              {heading}
            </MDTypography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
