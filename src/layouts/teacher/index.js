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
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import MDBox from "components/MDBox";
import * as React from "react";
import { styled } from "@mui/material/styles";
import { Grid, Table, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

const TableHeaderTypography = styled(MDTypography)(() => ({
  fontWeight: "bold",
  fontSize: "1rem",
  letterSpacing: "0.17px",
  textAlign: "center",
}));

const rows = [
  {
    id: 1,
    Name: "Varun Sharma",
    Email: "johndoe@example.com",
    Gender: "Male",
    MobileNo: 9111112345,
    joinDated: "2023-06-01",
    actions: "Edit",
  },
  {
    id: 1,
    Name: "Varun Sharma",
    Email: "johndoe@example.com",
    Gender: "Male",
    MobileNo: 9111112345,
    joinDated: "2023-06-01",
    actions: "Edit",
  },
  {
    id: 1,
    Name: "Varun Sharma",
    Email: "johndoe@example.com",
    Gender: "Male",
    MobileNo: 9111112345,
    joinDated: "2023-06-01",
    actions: "Edit",
  },
  {
    id: 1,
    Name: "Varun Sharma",
    Email: "johndoe@example.com",
    Gender: "Male",
    MobileNo: 9111112345,
    joinDated: "2023-06-01",
    actions: "Edit",
  },
  {
    id: 1,
    Name: "Varun Sharma",
    Email: "johndoe@example.com",
    Gender: "Male",
    MobileNo: 9111112345,
    joinDated: "2023-06-01",
    actions: "Edit",
  },
  {
    id: 1,
    Name: "Varun Sharma",
    Email: "johndoe@example.com",
    Gender: "Male",
    MobileNo: 9111112345,
    joinDated: "2023-06-01",
    actions: "Edit",
  },
];
function Teacher() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox display="flex" justifyContent="flex-end">
        <MDButton variant="contined" sx={{ textAlign: "end" }}>
          Add teacher
        </MDButton>
      </MDBox>
      <Grid container>
        <Grid item xs={12}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ width: "5%" }}>
                    <TableHeaderTypography>#</TableHeaderTypography>
                  </TableCell>
                  <TableCell sx={{ width: "10%" }}>
                    <TableHeaderTypography>Name</TableHeaderTypography>
                  </TableCell>
                  <TableCell sx={{ width: "15%" }}>
                    <TableHeaderTypography>Email</TableHeaderTypography>
                  </TableCell>
                  <TableCell sx={{ width: "5%" }}>
                    <TableHeaderTypography>Gender</TableHeaderTypography>
                  </TableCell>
                  <TableCell sx={{ width: "15%" }}>
                    <TableHeaderTypography>Mobile</TableHeaderTypography>
                  </TableCell>
                  <TableCell sx={{ width: "15%" }}>
                    <TableHeaderTypography>Joining Date</TableHeaderTypography>
                  </TableCell>
                  <TableCell sx={{ width: "20%" }}>
                    <TableHeaderTypography>Action</TableHeaderTypography>
                  </TableCell>
                </TableRow>
                {rows.map((row) => (
                  <TableRow>
                    <TableCell sx={{ fontWeight: 100 }}>{row.id}</TableCell>
                    <TableCell sx={{ fontWeight: 100 }}>{row.Name}</TableCell>
                    <TableCell sx={{ fontWeight: 100 }}>{row.Email}</TableCell>
                    <TableCell sx={{ fontWeight: 100 }}>{row.Gender}</TableCell>
                    <TableCell sx={{ fontWeight: 100 }}>{row.MobileNo}</TableCell>
                    <TableCell sx={{ fontWeight: 100 }}>{row.joinDated}</TableCell>
                    <TableCell>
                      <IconButton aria-label="view">
                        <VisibilityIcon />
                      </IconButton>
                      <IconButton aria-label="delete">
                        <DeleteIcon />
                      </IconButton>
                      <IconButton aria-label="Edit">
                        <ModeEditIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableHead>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
}

export default Teacher;
