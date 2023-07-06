import { DataGrid } from "@mui/x-data-grid";
import Delete from "dalog/couses/delete";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { Box, IconButton } from "@mui/material";
import Add from "dalog/couses/add";
import Edit from "dalog/couses/edit";
import AddQuestion from "layouts/Addquestion";

let open = false;
const handelClick = () => {
  open = true;
};
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
    minWidth: 150,
    renderCell: () => (
      <MDBox sx={{ display: "flex" }}>
        <Delete />
        <Edit />
        <IconButton onClick={() => handelClick(open)}>addQuestion</IconButton>
      </MDBox>
    ),
  },
];

const data = [
  {
    id: 1,
    teacherID: "Rahul",
    Titel: "Nodejs",
    description: "Nodejs is a runtime environment in JavaScript",
  },
  {
    id: 2,
    teacherID: "Mohit",
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
          <Add />
        </Box>
        {open ? (
          <MDBox>
            <AddQuestion />
          </MDBox>
        ) : (
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
        )}
      </MDBox>
    </DashboardLayout>
  );
}

export default Courses;
