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
    field: "teacherID",
    headerName: "TeacherID",
    minWidth: 150,
  },
  {
    field: "CoursesId",
    headerName: "COURSESID",
    minWidth: 150,
  },
  {
    field: "Titel",
    headerName: "TITLE",
    minWidth: 100,
  },
  {
    field: "description",
    headerName: "Description",
    minWidth: 300,
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

function Courses() {
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

export default Courses;
