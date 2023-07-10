import { DataGrid } from "@mui/x-data-grid";
import Delete from "dalog/couses/delete";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { Box, IconButton } from "@mui/material";
import Add from "dalog/couses/add";
import Edit from "dalog/couses/edit";
import { useState } from "react";
// import AddQuestion from "layouts/Addquestion";
import { FileDocumentEdit } from "mdi-material-ui";
import AddQuestion from "dalog/question/addquestion";
import Edits from "dalog/question/edit";
import Deletes from "dalog/question/delete";

const Columns = [
  {
    field: "id",
    headerName: "#",
    minWidth: 50,
  },
  {
    field: "Question",
    headerName: "Question",
    minWidth: 300,
  },
  {
    filed: "action",
    headerName: "Action",
    minWidth: 200,
    renderCell: () => (
      <MDBox sx={{ display: "flex" }}>
        <Edits />
        <Deletes />
      </MDBox>
    ),
  },
];

const Rows = [
  {
    id: 1,
    Question: "Node js as a runtime enivornment",
    action: "edit",
  },
  {
    id: 2,
    Question: "Node js as a runtime enivornment",
    action: "edit",
  },
];
function Courses() {
  const [open, setOpen] = useState(false);
  const handelClick = () => {
    setOpen(!open);
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
      minWidth: 250,
      renderCell: () => (
        <MDBox sx={{ display: "flex" }}>
          <Delete />
          <Edit />
          <IconButton
            onClick={handelClick}
            startIcon={<FileDocumentEdit />}
            sx={{
              borderRadius: "10px",
              backgroundColor: "#308AEC",
              color: "#FFFFFF",
              fontWeight: "normal !important",
              fontSize: "10px",
              padding: "1px 10px",
              "&:hover": {
                backgroundColor: "#32AADD",
                color: "#FFFFFF",
              },
              "&:focus:not(:hover)": { color: "#FFFFFF", backgroundColor: "#308AEC" },
            }}
          >
            AddQuestion
          </IconButton>
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
  // const classes = useStyles();
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox>
        {open ? (
          <MDBox>
            <Box sx={{ display: "flex", justifyContent: "space-between", marginBottom: "5px" }}>
              <IconButton
                onClick={handelClick}
                startIcon={<FileDocumentEdit />}
                sx={{
                  borderRadius: "10px",
                  backgroundColor: "#308AEC",
                  color: "#FFFFFF",
                  fontWeight: "normal !important",
                  fontSize: "14px",
                  padding: "15px 20px",
                  "&:hover": {
                    backgroundColor: "#32AADD",
                    color: "#FFFFFF",
                  },
                  "&:focus:not(:hover)": { color: "#FFFFFF", backgroundColor: "#308AEC" },
                }}
              >
                BackCourses
              </IconButton>
              <AddQuestion />
            </Box>
            <DataGrid
              rows={Rows}
              columns={Columns}
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
        ) : (
          <Box>
            <Box sx={{ display: "flex", justifyContent: "flex-end", marginBottom: "5px" }}>
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
          </Box>
        )}

        {/* <AddQuestion /> */}
      </MDBox>
    </DashboardLayout>
  );
}

export default Courses;
