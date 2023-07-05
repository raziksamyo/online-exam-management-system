// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { Grid, Box } from "@mui/material";
import Add from "dalog/Teacher/addTeacher";
import { DataGrid } from "@mui/x-data-grid";
import Delete from "dalog/Teacher/delete";
import Edit from "dalog/Teacher/edit";
import View from "dalog/Teacher/view";
import MDBox from "components/MDBox";

const columns = [
  { flex: 0.01, field: "id", headerName: "#", minWidth: 100 },
  { flex: 0.18, field: "Name", headerName: "Name", minWidth: 150 },
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
  },
  {
    id: 2,
    Name: "Varun Sharma",
    Email: "johndoe@example.com",
    Gender: "Male",
    MobileNo: 9111112345,
    joinDated: "2023-06-01",
  },
  {
    id: 3,
    Name: "Varun Sharma",
    Email: "johndoe@example.com",
    Gender: "Male",
    MobileNo: 9111112345,
    joinDated: "2023-06-01",
  },
  {
    id: 4,
    Name: "Varun Sharma",
    Email: "johndoe@example.com",
    Gender: "Male",
    MobileNo: 9111112345,
    joinDated: "2023-06-01",
  },
  {
    id: 5,
    Name: "Varun Sharma",
    Email: "johndoe@example.com",
    Gender: "Male",
    MobileNo: 9111112345,
    joinDated: "2023-06-01",
  },
  {
    id: 6,
    Name: "Varun Sharma",
    Email: "johndoe@example.com",
    Gender: "Male",
    MobileNo: 9111112345,
    joinDated: "2023-06-01",
  },
];
function Teacher() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Box display="flex" justifyContent="flex-end">
        <Add />
      </Box>
      <Grid container>
        <Grid item xs={12}>
          <DataGrid
            disableRowSelectionOnClick
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

export default Teacher;
