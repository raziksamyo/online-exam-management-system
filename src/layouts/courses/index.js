import { DataGrid } from "@mui/x-data-grid";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { Box, IconButton } from "@mui/material";
import Add from "dalog/couses/add";
import Edit from "dalog/couses/edit";
import { useState, useEffect } from "react";
import MDButton from "components/MDButton";
// import AddQuestion from "layouts/Addquestion";
import axios from "axios";
import AddQuestion from "dalog/question/addquestion";
import Edits from "dalog/question/edit";
import Delete from "components/Delete";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Search from "components/Search/Search";
import QuizIcon from "@mui/icons-material/Quiz";

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
      <Box sx={{ display: "flex" }}>
        <Edits />
        <Delete />
      </Box>
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
  {
    id: 3,
    Question: "Node js as a runtime enivornment",
    action: "edit",
  },
  {
    id: 4,
    Question: "Node js as a runtime enivornment",
    action: "edit",
  },
  {
    id: 5,
    Question: "Node js as a runtime enivornment",
    action: "edit",
  },
  {
    id: 6,
    Question: "Node js as a runtime enivornment",
    action: "edit",
  },
];
function Courses() {
  const [open, setOpen] = useState(false);

  const courseData = async () => {
    axios
      .get("http://localhost:5000/api/admin/course/list")
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  useEffect(() => {
    courseData();
  }, []);
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
      field: "addquestion",
      headerName: "Question",
      minWidth: 100,
      renderCell: () => (
        <IconButton
          onClick={handelClick}
          color="info"
          sx={{
            "&:hover": {
              backgroundColor: "rgba(96, 233, 101, 0.18)",
            },
          }}
        >
          <QuizIcon />
        </IconButton>
      ),
    },
    {
      field: "actions",
      headerName: "Actions",
      minWidth: 250,
      renderCell: () => (
        <Box sx={{ display: "flex" }}>
          <Delete />
          <Edit />
        </Box>
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
    {
      id: 3,
      teacherID: "Rahul",
      Titel: "Nodejs",
      description: "Nodejs is a runtime environment in JavaScript",
    },
    {
      id: 4,
      teacherID: "Mohit",
      Titel: "React",
      description: "React is a JavaScript library for building user interfaces",
    },
    {
      id: 5,
      teacherID: "Rahul",
      Titel: "Nodejs",
      description: "Nodejs is a runtime environment in JavaScript",
    },
    {
      id: 6,
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
      <Box>
        {open ? (
          <Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", marginBottom: "5px" }}>
              <MDButton
                onClick={handelClick}
                startIcon={<ArrowBackIcon />}
                sx={{
                  borderRadius: "10px",
                  backgroundColor: "#308AEC",
                  color: "#FFFFFF",
                  fontWeight: "normal !important",
                  fontSize: "12px",
                  padding: "1px 10px",
                  "&:hover": {
                    backgroundColor: "#32AADD",
                    color: "#FFFFFF",
                  },
                  "&:focus:not(:hover)": { color: "#FFFFFF", backgroundColor: "#308AEC" },
                }}
              >
                BACK COURSES
              </MDButton>
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
                "&.MuiDataGrid-root .MuiDataGrid-columnHeader:focus-within": {
                  outline: "none !important",
                },
                "&.MuiDataGrid-root .MuiDataGrid-columnHeader:focus": {
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
          </Box>
        ) : (
          <Box>
            <Box sx={{ display: "flex", marginBottom: "5px", justifyContent: "space-between" }}>
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
          </Box>
        )}

        {/* <AddQuestion /> */}
      </Box>
    </DashboardLayout>
  );
}

export default Courses;
