// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { Box, Grid } from "@mui/material";
import Add from "dalog/Teacher/addTeacher";
import { DataGrid } from "@mui/x-data-grid";
import Delete from "dalog/Teacher/delete";
import Edit from "dalog/Teacher/edit";
import View from "dalog/Teacher/view";
import Search from "components/Search/Search";
import { useEffect, useState } from "react";
import axios from "axios";

function Teachers() {
  const [data, setData] = useState([]);
  const columns = [
    { flex: 0.18, field: "id", headerName: "#", minWidth: 100 },
    { flex: 0.18, field: "name", headerName: "Name", minWidth: 150 },
    { flex: 0.25, field: "email", headerName: "Email", minWidth: 200 },
    { flex: 0.17, field: "gender", headerName: "Gender", minWidth: 120 },
    { flex: 0.17, field: "contactNo", headerName: "Mobile", minWidth: 200 },
    { flex: 0.18, field: "joinDate", headerName: "Joining Date", width: 200 },
    {
      flex: 0.14,
      field: "action",
      headerName: "Action",
      width: 350,
      renderCell: (params) => (
        <Box sx={{ display: "flex" }}>
          <View data={params.row} />
          <Edit editData={params.row} />
          <Delete data={params.row} />
        </Box>
      ),
    },
  ];

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/admin/teacher/list")
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
        <Box>
          <Add />
        </Box>
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

export default Teachers;
