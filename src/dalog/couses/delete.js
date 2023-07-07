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

function Delete() {
  const [isOpen, setIsOpen] = React.useState(false);
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
          <Button variant="contained" onClick={() => setIsOpen(false)} color="error">
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

export default Delete;
