import { DataGrid } from "@mui/x-data-grid";
import Delete from "components/Delete";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { Box } from "@mui/material";
import Add from "dalog/exam/add";
import Edit from "dalog/exam/edit";
import Search from "components/Search/Search";

const columns = [
  {
    field: "id",
    headerName: "#",
    minWidth: 70,
  },
  {
    field: "examTitle",
    headerName: "EXAMTITLE",
    minWidth: 150,
  },
  {
    field: "date",
    headerName: "DATE",
    minWidth: 100,
  },
  {
    field: "StartTime",
    headerName: "STARTTIME",
    minWidth: 100,
  },
  {
    field: "Duration",
    headerName: "DURATION",
    minWidth: 50,
  },
  {
    field: "TotalQuestion",
    headerName: "TOTALQUESTION",
    minWidth: 50,
  },
  {
    field: "Marks",
    headerName: "MARKS",
    minWidth: 50,
  },
  {
    field: "actions",
    headerName: "Actions",
    minWidth: 130,
    renderCell: () => (
      <MDBox sx={{ display: "flex" }}>
        <Delete />
        <Edit />
      </MDBox>
    ),
  },
];

const data = [
  {
    id: 1,
    examTitle: "nodejs",
    date: "30-07-2023",
    StartTime: "12pm",
    Duration: "1hrs",
    TotalQuestion: 10,
    Marks: 50,
  },
  {
    id: 2,
    examTitle: "Reactjs",
    date: "30-07-2023",
    StartTime: "12pm",
    Duration: "1hrs",
    TotalQuestion: 10,
    Marks: 150,
  },
  // Add more data rows as needed
];

function Exams() {
  // const classes = useStyles();
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox>
        <Box sx={{ display: "flex", justifyContent: "space-between", marginBottom: "5px" }}>
          <Box>
            <Search />
          </Box>
          <Add />
        </Box>

        <DataGrid
          rows={data}
          columns={columns}
          disableColumnMenu
          disableColumnFilter
          disableSelectionOnClick
          disableRowSelectionOnClick
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

export default Exams;
