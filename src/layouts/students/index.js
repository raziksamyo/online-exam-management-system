// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDBox from "components/MDBox";
import { useState, useEffect } from "react";
import { Grid, Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Add from "dalog/student/addStudent";
import Delete from "dalog/Teacher/delete";
import Edit from "dalog/student/edit";
import View from "dalog/student/view";
import Search from "components/Search/Search";
import axios from "axios";

const defaultColumns = [
  { flex: 0.01, field: "id", headerName: "#", minWidth: 100 },
  { flex: 0.18, field: "name", headerName: "Student Name", minWidth: 150 },
  { flex: 0.25, field: "email", headerName: "Email", minWidth: 200 },
  { flex: 0.17, field: "gender", headerName: "Gender", minWidth: 120 },
  { flex: 0.17, field: "contactNumber", headerName: "Mobile", minWidth: 200 },
];

function Students() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const getDatalistStudent = () => {
    console.log("Enter");
    axios
      .get("http://localhost:5000/api/admin/student/list")
      .then((response) => {
        // Handle the response from the local server
        console.log("Response", response);
        setData(response?.data);
        setLoading(false);
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error("Erros", error);
      });
  };
  const columns = [
    ...defaultColumns,
    {
      flex: 0.14,
      field: "action",
      headerName: "Action",
      width: 350,
      renderCell: (params) => (
        <MDBox sx={{ display: "flex" }}>
          <View data={params.row} />
          <Edit editData={params.row} list={getDatalistStudent} />
          <Delete data={params.row} list={getDatalistStudent} />
        </MDBox>
      ),
    },
  ];
  useEffect(() => {
    getDatalistStudent();
  }, []);
  const transformedData = data.map((row, index) => ({
    ...row,
    id: index + 1,
  }));
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Search />
        </Box>
        <Add />
      </Box>
      <Grid container spacing={6}>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <Grid item xs={12}>
            <DataGrid
              // paginationMode='server'
              rows={transformedData}
              columns={columns}
              disableSelectionOnClick
              disableColumnMenu
              disableColumnFilter
              disableColumnSelector
              disableRowSelectionOnClick
              sx={{
                "&.MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
                  outline: "none !important",
                },
                "&.MuiDataGrid-root .MuiDataGrid-columnHeader:focus-within": {
                  outline: "none !important",
                },
              }}
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
        )}
      </Grid>
    </DashboardLayout>
  );
}

export default Students;
