// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDTypography from "components/MDTypography";
import * as React from "react";
import { styled } from "@mui/material/styles";
import { Grid, Table, TableCell, TableContainer, TableHead, TableRow, Box } from "@mui/material";
import ConfirmNotification from "dalog/Teacher/delete";
import View from "dalog/Teacher/view";
import Edit from "dalog/Teacher/edit";
import Add from "dalog/Teacher/addTeacher";

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
];
function Teachers() {
  // const [open, setOpen] = React.useState(false);
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Box display="flex" justifyContent="flex-end">
        <Add />
      </Box>
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
                    <TableCell sx={{ fontWeight: 100 }}>{index + 1}</TableCell>
                    <TableCell sx={{ fontWeight: 100 }}>{row.Name}</TableCell>
                    <TableCell sx={{ fontWeight: 100 }}>{row.Email}</TableCell>
                    <TableCell sx={{ fontWeight: 100 }}>{row.Gender}</TableCell>
                    <TableCell sx={{ fontWeight: 100 }}>{row.MobileNo}</TableCell>
                    <TableCell sx={{ fontWeight: 100 }}>{row.joinDated}</TableCell>
                    <TableCell sx={{ display: "flex" }}>
                      <View />
                      <ConfirmNotification row={rows} index={index} />
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

export default Teachers;
