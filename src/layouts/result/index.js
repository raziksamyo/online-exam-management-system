/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { Grid, Table, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import MDTypography from "components/MDTypography";
import { styled } from "@mui/material/styles";

const TableHeaderTypography = styled(MDTypography)(() => ({
  fontWeight: "bold",
  fontSize: "1rem",
  letterSpacing: "0.17px",
  textAlign: "center",
}));

function Result() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Grid container>
        <Grid item xs={12}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <TableHeaderTypography>#</TableHeaderTypography>
                  </TableCell>
                  <TableCell>
                    <TableHeaderTypography>CoursesId</TableHeaderTypography>
                  </TableCell>
                  <TableCell>
                    <TableHeaderTypography>Student ID </TableHeaderTypography>
                  </TableCell>
                  <TableCell>
                    <TableHeaderTypography>Status</TableHeaderTypography>
                  </TableCell>
                  <TableCell>
                    <TableHeaderTypography>Mark Obtained</TableHeaderTypography>
                  </TableCell>
                </TableRow>
              </TableHead>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
}

export default Result;
