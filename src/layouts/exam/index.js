import { DataGrid } from "@mui/x-data-grid";
import Delete from "dalog/couses/delete";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { Box } from "@mui/material";
import Addeds from "dalog/couses/add";
import Edit from "dalog/couses/edit";

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
    field: "CoursesID",
    headerName: "COURSESID",
    minWidth: 150,
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
    CoursesID: 12345506,
    examTitle: "nodejs",
    date: "30-07-2023",
    StartTime: "12pm",
    Duration: "1hrs",
    TotalQuestion: 10,
    Marks: 50,
  },
  {
    id: 2,
    CoursesID: 12345506,
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
        <Box sx={{ display: "flex", justifyContent: "flex-end", marginBottom: "5px" }}>
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
        />
      </MDBox>
    </DashboardLayout>
  );
}

export default Exams;
