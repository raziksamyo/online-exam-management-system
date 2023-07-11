import { DataGrid } from "@mui/x-data-grid";
import Delete from "dalog/couses/delete";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { Box } from "@mui/material";
import Addeds from "dalog/Result/add";
import Search from "components/Search/Search";

// import { makeStyles } from "@mui/styles";

// const useStyles = makeStyles({
//   headerCell: {
//     fontSize: "14px",
//     outline: "none",
//   },
// });

const columns = [
  {
    field: "id",
    headerName: "#",
    minWidth: 70,
  },
  {
    field: "CoursesId",
    headerName: "COURSESID",
    minWidth: 150,
  },
  {
    field: "StudentId",
    headerName: "STUDENTID",
    minWidth: 150,
  },
  {
    field: "Status",
    headerName: "STATUS",
    minWidth: 150,
  },
  {
    field: "MarksObtained",
    headerName: "MARKSOBTAINED",
    minWidth: 150,
  },
  {
    field: "actions",
    headerName: "Actions",
    minWidth: 150,
    renderCell: () => (
      <MDBox sx={{ display: "flex" }}>
        <Delete />
      </MDBox>
    ),
  },
];

const data = [
  {
    id: 1,
    teacherID: 12345678061,
    CoursesId: 12345506,
    Titel: "Nodejs",
    description: "Nodejs is a runtime environment in JavaScript",
  },
  {
    id: 2,
    teacherID: 12345678062,
    CoursesId: 12345507,
    Titel: "React",
    description: "React is a JavaScript library for building user interfaces",
  },
  // Add more data rows as needed
];

function Results() {
  // const classes = useStyles();
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox>
        <Box sx={{ display: "flex", justifyContent: "space-between", marginBottom: "5px" }}>
          <Box>
            <Search />
          </Box>
          <Addeds />
        </Box>

        <DataGrid
          rows={data}
          columns={columns}
          disableColumnMenu
          disableColumnFilter
          disableSelectionOnClick
          disableRowSelectionOnClick
          disableVirtualization
          sx={{
            "&.MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
              outline: "none !important",
            },
          }}
        />
      </MDBox>
    </DashboardLayout>
  );
}

export default Results;
