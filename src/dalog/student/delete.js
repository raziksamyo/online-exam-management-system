import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import MDBox from "components/MDBox";
import PropTypes from "prop-types";

function ConfirmNotification({ row, index }) {
  console.log("props", index);
  console.log("Rows", row);
  //   console.log("Index", index);
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <MDBox>
      <IconButton onClick={() => setIsOpen(true)}>
        <DeleteIcon />
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
          <Button variant="contained" onClick={() => setIsOpen(false)}>
            No
          </Button>
          <Button variant="contained" color="error">
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </MDBox>
  );
}
const objectShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  Name: PropTypes.string.isRequired,
  Email: PropTypes.number.isRequired,
  Gender: PropTypes.string.isRequired,
  MobileNo: PropTypes.number.isRequired,
  joinDated: PropTypes.joinDated.isRequired,
  // Add more properties as needed
});

ConfirmNotification.propTypes = {
  row: PropTypes.arrayOf(objectShape).isRequired,
  index: PropTypes.number.isRequired,
};

export default ConfirmNotification;
