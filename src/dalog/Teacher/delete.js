import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
  IconButton,
  DialogTitle,
} from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import MDBox from "components/MDBox";
import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined";
import CloseIcon from "@mui/icons-material/Close";
import MDButton from "components/MDButton";
import PropTypes from "prop-types";
import axios from "axios";

function DeleteTeacher({ data, list }) {
  console.log("Data", data);
  const { _id } = data;

  const [isOpen, setIsOpen] = useState(false);
  const handelClick = () => {
    axios.delete(`http://localhost:5000/api/admin/teacher/delete/${_id}`, data).then((res) => {
      console.log("Res", res);
    });
    setIsOpen(false);
    list();
  };
  return (
    <MDBox>
      <IconButton
        onClick={() => setIsOpen(true)}
        color="error"
        sx={{
          "&:hover": {
            backgroundColor: "rgba(255, 0, 0, 0.1)",
          },
        }}
      >
        <DeleteOutlineOutlinedIcon />
      </IconButton>
      <Dialog
        onClose={() => setIsOpen(false)}
        open={isOpen}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle sx={{ textAlign: "center", color: "orange", fontSize: "42px" }}>
          <ReportProblemOutlinedIcon />
        </DialogTitle>
        <DialogContent>
          <IconButton
            sx={{ position: "absolute", right: "1rem", top: "1rem" }}
            onClick={() => setIsOpen(false)}
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h6">Are you sure you want to delete this user?</Typography>
          <Typography variant="subtitle2">You can &apos; undo this operation</Typography>
        </DialogContent>
        <DialogActions>
          <MDButton variant="contained" onClick={() => setIsOpen(false)}>
            No
          </MDButton>
          <MDButton variant="contained" color="error" onClick={handelClick}>
            Yes
          </MDButton>
        </DialogActions>
      </Dialog>
    </MDBox>
  );
}

DeleteTeacher.propTypes = {
  data: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    contactNumber: PropTypes.number.isRequired,
    address: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    dob: PropTypes.string.isRequired,
    joinDate: PropTypes.string.isRequired,
    experience: PropTypes.number.isRequired,
    qualification: PropTypes.arrayOf(PropTypes.string).isRequired,

    // Add other properties as needed
  }).isRequired,
  list: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    contactNumber: PropTypes.number.isRequired,
    address: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    dob: PropTypes.string.isRequired,
    joinDate: PropTypes.string.isRequired,
    experience: PropTypes.number.isRequired,
    qualification: PropTypes.arrayOf(PropTypes.string).isRequired,

    // Add other properties as needed
  }).isRequired,
};
export default DeleteTeacher;
