import { DataGrid } from "@mui/x-data-grid";
import Delete from "components/Delete";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { Box } from "@mui/material";
import Add from "dalog/exam/add";
import Edit from "dalog/exam/edit";
import Search from "components/Search/Search";
import axios from "axios";
import { useState, useEffect } from "react";

const defaultColumn = [
  {
    field: "id",
    headerName: "#",
    minWidth: 70,
  },
  {
    field: "title",
    headerName: "EXAMTITLE",
    minWidth: 150,
  },
  {
    field: "date",
    headerName: "DATE",
    minWidth: 100,
  },
  {
    field: "starttime",
    headerName: "STARTTIME",
    minWidth: 100,
  },
  {
    field: "duration",
    headerName: "DURATION",
    minWidth: 50,
  },
  {
    field: "totalquestion",
    headerName: "TOTALQUESTION",
    minWidth: 50,
  },
  {
    field: "marks",
    headerName: "MARKS",
    minWidth: 50,
  },
];

// const data = [
//   {
//     id: 1,
//     examTitle: "nodejs",
//     date: "30-07-2023",
//     StartTime: "12pm",
//     Duration: "1hrs",
//     TotalQuestion: 10,
//     Marks: 50,
//   },
//   {
//     id: 2,
//     examTitle: "Reactjs",
//     date: "30-07-2023",
//     StartTime: "12pm",
//     Duration: "1hrs",
//     TotalQuestion: 10,
//     Marks: 150,
//   },
//   // Add more data rows as needed
// ];

function Exams() {
  // const classes = useStyles();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getDataExam = () => {
    axios
      .get("http://localhost:5000/api/admin/exam/list")
      .then((res) => {
        console.log("res", res.data);
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  const columns = [
    ...defaultColumn,
    {
      field: "actions",
      headerName: "Actions",
      minWidth: 130,
      renderCell: (params) => (
        <MDBox sx={{ display: "flex" }}>
          <Delete deleteData={params.row} list={getDataExam} />
          <Edit editData={params.row} edit={getDataExam} />
        </MDBox>
      ),
    },
  ];
  useEffect(() => {
    getDataExam();
  }, []);
  const transformedData = data.map((row, index) => ({
    ...row,
    id: index + 1,
  }));
  console.log("transdata", transformedData);
  return (
    <DashboardLayout>
      <DashboardNavbar />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <MDBox>
          <Box sx={{ display: "flex", justifyContent: "space-between", marginBottom: "5px" }}>
            <Box>
              <Search />
            </Box>
            <Add examData={transformedData[3]?.courseData[0]} />
          </Box>
          <DataGrid
            rows={transformedData}
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
        </MDBox>
      )}
    </DashboardLayout>
  );
}

export default Exams;
