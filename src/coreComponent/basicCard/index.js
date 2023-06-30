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
import MDBox from "components/MDBox";
import contained from "assets/theme/components/button/contained";
import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";

export default function BasicCard(props) {
  const { heading, count } = props;

  const useStyles = makeStyles({
    cardContainer: {
      boxShadow: "0px 4px 8px rgba(26, 115, 232, 0.2)",
      height: "30vh",
    },
  });

  const classes = useStyles();
  return (
    <Card className={classes.cardContainer}>
      <CardContent>
        <Grid container>
          <Grid item container justifyContent="center" alignItems="center" xs={12}>
            <MDBox
              variant={contained}
              bgColor="#e4edfa"
              borderRadius="50%"
              sx={{
                width: 90,
                height: 90,
                fontSize: "46px",
                padding: "18px",
              }}
            >
              {heading === "Total Teachers" ? (
                <GroupsRoundedIcon className="teacher" />
              ) : heading === "Total Students" ? (
                <SchoolIcon className="teacher" />
              ) : heading === "Total Courses" ? (
                <LibraryBooksRoundedIcon className="teacher" />
              ) : (
                <BorderColorRoundedIcon className="teacher" />
              )}
            </MDBox>
          </Grid>
          <Grid item container justifyContent="center" alignItems="center" xs={12}>
            <MDTypography color="text.secondary" variant="h3">
              {count}
            </MDTypography>
          </Grid>

          <Grid item container justifyContent="center" alignItems="center" xs={12}>
            <MDTypography sx={{ mt: 2, fontSize: 14 }} color="text.secondary" gutterBottom>
              {heading}
            </MDTypography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
