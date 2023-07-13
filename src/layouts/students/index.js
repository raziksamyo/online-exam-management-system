// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDBox from "components/MDBox";
import * as React from "react";
import { Grid, Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Add from "dalog/student/addStudent";
import Delete from "dalog/Teacher/delete";
import Edit from "dalog/student/edit";
import View from "dalog/student/view";
import Search from "components/Search/Search";

const columns = [
  { flex: 0.01, field: "id", headerName: "#", minWidth: 100 },
  { flex: 0.18, field: "Name", headerName: "Student Name", minWidth: 150 },
  { flex: 0.25, field: "Email", headerName: "Email", minWidth: 200 },
  { flex: 0.17, field: "Gender", headerName: "Gender", minWidth: 120 },
  { flex: 0.17, field: "MobileNo", headerName: "Mobile", minWidth: 200 },
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
    actions: "Edit",
  },
  {
    id: 2,
    Name: "Varun Sharma",
    Email: "johndoe@example.com",
    Gender: "Male",
    MobileNo: 9111112345,
    actions: "Edit",
  },
  {
    id: 3,
    Name: "Varun Sharma",
    Email: "johndoe@example.com",
    Gender: "Male",
    MobileNo: 9111112345,
    actions: "Edit",
  },
  {
    id: 4,
    Name: "Varun Sharma",
    Email: "johndoe@example.com",
    Gender: "Male",
    MobileNo: 9111112345,
    actions: "Edit",
  },
  {
    id: 5,
    Name: "Varun Sharma",
    Email: "johndoe@example.com",
    Gender: "Male",
    MobileNo: 9111112345,
    actions: "Edit",
  },
  {
    id: 6,
    Name: "Varun Sharma",
    Email: "johndoe@example.com",
    Gender: "Male",
    MobileNo: 9111112345,
    actions: "Edit",
  },
];
function Students() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Search />
        </Box>
        <Add />
      </Box>
      <Grid container>
        <Grid item xs={12}>
          <DataGrid
            disableColumnMenu
            disableColumnFilter
            disableColumnSelector
            disableRowSelectionOnClick
            disableSelectionOnClick
            sx={{
              "&.MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
                outline: "none !important",
              },
            }}
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
