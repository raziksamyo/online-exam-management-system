// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import MDTypography from "components/MDTypography";
import MDBox from "components/MDBox";
import * as React from "react";
import { Grid } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
// import ConfirmNotification from "dalog/student/delete";
import Add from "dalog/student/addStudent";
import Delete from "dalog/student/delete";
import Edit from "dalog/student/edit";
import View from "dalog/student/view";

// const TableHeaderTypography = styled(MDTypography)(() => ({
//   fontWeight: "bold",
//   fontSize: "1rem",
//   letterSpacing: "0.17px",
//   textAlign: "center",
// }));
// const WhiteIconButton = styled(IconButton)({
//   backgroundColor: "white",
// });

const columns = [
  { flex: 0.01, field: "id", headerName: "#", minWidth: 100 },
  { flex: 0.18, field: "Name", headerName: "Student Name", minWidth: 150 },
  { flex: 0.25, field: "Email", headerName: "Email", minWidth: 200 },
  { flex: 0.17, field: "Gender", headerName: "Gender", minWidth: 120 },
  { flex: 0.17, field: "MobileNo", headerName: "Mobile", minWidth: 200 },
  { flex: 0.18, field: "joinDated", headerName: "Joining Date", width: 200 },
  {
    flex: 0.14,
    field: "action",
    headerName: "Action",
    width: 350,
    renderCell: () => (
      <MDBox sx={{ display: "flex" }}>
        <View />
        <Edit />
        <Delete />
      </MDBox>
    ),
  },
];

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
function Students() {
  // const [open, setOpen] = React.useState(false);
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox display="flex" justifyContent="flex-end">
        <Add />
      </MDBox>
      <Grid container>
        <Grid item xs={12}>
          <DataGrid
            // disableColumnMenu
            // disableColumnFilter
            // disableColumnSelector
            disableRowSelectionOnClick
            // disableSelectionOnClick
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
          />
        </Grid>
      </Grid>
    </DashboardLayout>
  );
}

export default Students;
