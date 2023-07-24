import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";

function Delete({ deleteData }) {
  console.log("deleta", deleteData);
  const [isOpen, setIsOpen] = React.useState(false);
  const { _id } = deleteData;
  const handelDelete = () => {
    axios
      .post(`http://localhost:5000/api/admin/exam/delete/${_id}`)
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => {
        console.log("res", err);
      });
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
        <DialogContent>
          <Typography variant="h6">Are you sure you want to delete this user?</Typography>
          <Typography variant="subtitle2">You can &apos; undo this operation</Typography>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={() => setIsOpen(false)} color="error">
            No
          </Button>
          <MDButton variant="contained" color="error" onClick={handelDelete}>
            Yes
          </MDButton>
        </DialogActions>
      </Dialog>
    </MDBox>
  );
}
Delete.propTypes = {
  deleteData: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    // Add other properties as needed
  }).isRequired,
};
export default Delete;
