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
import ConfirmNotification from "dalog/student/delete";
import View from "dalog/student/view";
import Edit from "dalog/student/edit";
import Added from "dalog/student/addStudent";

const TableHeaderTypography = styled(MDTypography)(() => ({
  fontWeight: "bold",
  fontSize: "1rem",
  letterSpacing: "0.17px",
  textAlign: "center",
}));
// const WhiteIconButton = styled(IconButton)({
//   backgroundColor: "white",
// });
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
    id: 2,
    Name: "Varun Sharma",
    Email: "johndoe@example.com",
    Gender: "Male",
    MobileNo: 9111112345,
    joinDated: "2023-06-01",
    actions: "Edit",
  },
  {
    id: 3,
    Name: "Varun Sharma",
    Email: "johndoe@example.com",
    Gender: "Male",
    MobileNo: 9111112345,
    joinDated: "2023-06-01",
    actions: "Edit",
  },
  {
    id: 4,
    Name: "Varun Sharma",
    Email: "johndoe@example.com",
    Gender: "Male",
    MobileNo: 9111112345,
    joinDated: "2023-06-01",
    actions: "Edit",
  },
  {
    id: 5,
    Name: "Varun Sharma",
    Email: "johndoe@example.com",
    Gender: "Male",
    MobileNo: 9111112345,
    joinDated: "2023-06-01",
    actions: "Edit",
  },
  {
    id: 6,
    Name: "Varun Sharma",
    Email: "johndoe@example.com",
    Gender: "Male",
    MobileNo: 9111112345,
    joinDated: "2023-06-01",
    actions: "Edit",
  },
];
function Student() {
  // const [open, setOpen] = React.useState(false);
  const data = rows;
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox display="flex" justifyContent="flex-end">
        <MDButton variant="contined" sx={{ textAlign: "end" }}>
          <Added />
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
                {rows.map((row, index) => (
                  <TableRow>
                    <TableCell sx={{ fontWeight: 100 }}>{row.id}</TableCell>
                    <TableCell sx={{ fontWeight: 100 }}>{row.Name}</TableCell>
                    <TableCell sx={{ fontWeight: 100 }}>{row.Email}</TableCell>
                    <TableCell sx={{ fontWeight: 100 }}>{row.Gender}</TableCell>
                    <TableCell sx={{ fontWeight: 100 }}>{row.MobileNo}</TableCell>
                    <TableCell sx={{ fontWeight: 100 }}>{row.joinDated}</TableCell>
                    <TableCell sx={{ display: "flex" }}>
                      <View />
                      <ConfirmNotification row={data} index={index} />
                      <Edit />
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

export default Student;
