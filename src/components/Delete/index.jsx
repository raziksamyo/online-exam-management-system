import React from "react";
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

function Delete(props) {
  console.log("props", props);
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
        <DeleteOutlineOutlinedIcon />
      </IconButton>
      <Dialog
        onClose={() => setIsOpen(false)}
        open={isOpen}
        sx={{ "& .MuiPaper-root": { width: "100%", maxWidth: 430, padding: [2, 3] } }}
      >
        <DialogTitle sx={{ textAlign: "center", color: "orange", fontSize: "50px" }}>
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
          <MDButton variant="contained" color="success" onClick={() => setIsOpen(false)}>
            No
          </MDButton>
          <MDButton variant="contained" color="error">
            Yes
          </MDButton>
        </DialogActions>
      </Dialog>
    </MDBox>
  );
}
// ConfirmNotification.propTypes = {
//   Item: PropTypes.any.isRequired,
//   RowsNo: PropTypes.any.isRequired,
// };
export default Delete;
