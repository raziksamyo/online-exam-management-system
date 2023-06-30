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

function ConfirmNotification(props) {
  console.log("props", props);
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
// ConfirmNotification.propTypes = {
//   Item: PropTypes.any.isRequired,
//   RowsNo: PropTypes.any.isRequired,
// };
export default ConfirmNotification;