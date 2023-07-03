import {
  Grid,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
  IconButton,
  DialogTitle,
} from "@mui/material";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import { useForm } from "react-hook-form";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

function Add() {
  const [open, setOpen] = useState(false);
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log("Data", data);
  };
  return (
    <MDBox>
      <MDButton onClick={() => setOpen(true)}>Add Teacher</MDButton>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="user-view-edit"
        sx={{ "& .MuiPaper-root": { width: "100%", maxWidth: 750, p: [2, 3] } }}
        aria-describedby="user-view-edit-description"
      >
        <DialogTitle>Add Teacher profile </DialogTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogContent>
            <IconButton
              sx={{ position: "absolute", right: "1rem", top: "1rem" }}
              onClick={() => setOpen(false)}
            >
              <CloseIcon />
            </IconButton>
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
                  {...register("Qualification", { required: "Please enter a qualificaton" })}
                  fullWidth
                  type="text"
                  onChange={(e) => {
                    setValue(e.target.name, e.target.value);
                  }}
                  label="Qualification"
                  helperText={errors?.Qualification?.message}
                  error={errors.Qualification}
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
                  {...register("PinCode", { required: "Please enter Pincode" })}
                  fullWidth
                  onChange={(e) => {
                    if (+e.target.value < 0) e.target.value = 0;
                    setValue(e.target.name, e.target.value);
                  }}
                  type="number"
                  label="Pincode"
                  helperText={errors?.PinCode?.message}
                  error={errors?.PinCode}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  {...register("JoinDate", { required: "Please enter Date" })}
                  fullWidth
                  type="Date"
                  onChange={(e) => {
                    setValue(e.target.name, e.target.value);
                  }}
                  helperText={errors?.JoinDate?.message}
                  error={errors?.JoinDate}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Experience"
                  type="text"
                  {...register("experience", { required: "Please filed experince " })}
                  error={!!errors.experience}
                  helperText={errors.experience?.message}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  type="Date"
                  {...register("dob", { required: "Please enter dob " })}
                  error={!!errors.dob}
                  helperText={errors.dob?.message}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  type="file"
                  {...register("photo", { required: "Please select a photo" })}
                  error={!!errors.photo}
                  helperText={errors.photo?.message}
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <MDButton type="submit" variant="contained" sx={{ mr: 1 }} color="success">
              Submit
            </MDButton>
            <MDButton variant="outlined" color="secondary" onClick={() => setOpen(false)}>
              Discard
            </MDButton>
          </DialogActions>
        </form>
      </Dialog>
    </MDBox>
  );
}
export default Add;
