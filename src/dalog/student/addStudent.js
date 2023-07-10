import {
  Grid,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
  Button,
  Box,
  Typography,
} from "@mui/material";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { FileDocumentEdit } from "mdi-material-ui";

function Add() {
  const [open, setOpen] = useState(false);
  const {
    handleSubmit,
    register,
    reset,
    setValue,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log("Data", data);
  };
  const handleDiscard = () => {
    setOpen(false);
    reset();
  };
  return (
    <MDBox>
      <Box sx={{ marginBottom: "15px" }}>
        <Button
          onClick={() => setOpen(true)}
          startIcon={<FileDocumentEdit />}
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
            "&:focus:not(:hover)": { color: "#FFFFFF" },
          }}
        >
          Add Student
        </Button>
      </Box>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="user-view-edit"
        sx={{ "& .MuiPaper-root": { width: "100%", maxWidth: 750, p: [2, 10] } }}
        aria-describedby="user-view-edit-description"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Typography variant="h2" textAlign="center">
            Add Student
          </Typography>
          <DialogContent>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  {...register("name", { required: "Please enter a name" })}
                  fullWidth
                  onChange={(e) => {
                    setValue(e.target.name, e.target.value);
                  }}
                  label="Name"
                  helperText={errors.name?.message}
                  error={errors.name}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  {...register("Email", { required: "Please enter email id " })}
                  fullWidth
                  onChange={(e) => {
                    setValue(e.target.name, e.target.value);
                  }}
                  label="Email ID"
                  helperText={errors.Email?.message}
                  error={errors?.Email}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  {...register("MobileNo", { required: "Please enter a mobile No" })}
                  fullWidth
                  onChange={(e) => {
                    if (+e.target.value < 0) e.target.value = 0;
                    setValue(e.target.name, e.target.value);
                  }}
                  type="number"
                  label="Contact Number"
                  helperText={errors?.MobileNo?.message}
                  error={errors?.MobileNo}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  {...register("Gender", { required: "Please enter gender(M/F)" })}
                  fullWidth
                  type="text"
                  onChange={(e) => {
                    setValue(e.target.name, e.target.value);
                  }}
                  label="Gender"
                  helperText={errors.Gender?.message}
                  error={errors.Gender}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  {...register("Address", { required: "Please enter a address" })}
                  fullWidth
                  type="text"
                  onChange={(e) => {
                    setValue(e.target.name, e.target.value);
                  }}
                  label="Address"
                  helperText={errors.Address?.message}
                  error={errors.Address}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="DOB"
                  type="Date"
                  {...register("dob", { required: "Please enter dob " })}
                  error={!!errors.dob}
                  helperText={errors.dob?.message}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  {...register("education", { required: "Please enter a Education" })}
                  fullWidth
                  onChange={(e) => {
                    if (+e.target.value < 0) e.target.value = 0;
                    setValue(e.target.name, e.target.value);
                  }}
                  type="number"
                  label="Education"
                  helperText={errors?.education?.message}
                  error={errors?.education}
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <MDButton type="submit" variant="contained" color="success" sx={{ mr: 1 }}>
              Submit
            </MDButton>
            <MDButton variant="contained" color="error" onClick={handleDiscard}>
              Discard
            </MDButton>
          </DialogActions>
        </form>
      </Dialog>
    </MDBox>
  );
}
export default Add;
