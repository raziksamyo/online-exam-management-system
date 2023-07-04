import { DataGrid } from "@mui/x-data-grid";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

const columns = [
  {
    field: "id",
    headerName: "#",
    width: 70,
  },
  {
    field: "teacherID",
    headerName: "TeacherID",
    width: 150,
  },
  {
    field: "CoursesId",
    headerName: "COURSESID",
    width: 150,
  },
  {
    field: "Titel",
    headerName: "TITLE",
    width: 100,
  },
  {
    field: "description",
    headerName: "Description",
    width: 300,
  },
  {
    field: "actions",
    headerName: "Actions",
    width: 130,
    renderCell: () => (
      <MDBox>
        <IconButton>
          <DeleteIcon />
        </IconButton>
        <IconButton>
          <EditIcon />
        </IconButton>
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
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <DataGrid rows={data} columns={columns} />
    </DashboardLayout>
  );
}

export default Courses;
