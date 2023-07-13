import {
  Grid,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
  DialogTitle,
} from "@mui/material";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import { useForm } from "react-hook-form";
import { useState } from "react";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import CloseIcon from "@mui/icons-material/Close";

function Edit() {
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
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
      <IconButton
        onClick={() => setOpen(true)}
        color="success"
        sx={{
          "&:hover": {
            backgroundColor: "rgba(96, 233, 101, 0.18)",
          },
        }}
      >
        <BorderColorOutlinedIcon />
      </IconButton>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="user-view-edit"
        sx={{ "& .MuiPaper-root": { width: "100%", maxWidth: 700, padding: [2, 3] } }}
        aria-describedby="user-view-edit-description"
      >
        <DialogTitle>Add Personal information for Teacher </DialogTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogContent sx={{ overflow: "hidden" }}>
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
                  defaultValue="Mohit"
                  helperText={errors.firstname?.message}
                  error={errors.firstname}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  {...register("lastname", { required: "Please enter a name" })}
                  fullWidth
                  onChange={(e) => {
                    setValue(e.target.name, e.target.value);
                  }}
                  label="lastName"
                  defaultValue="Mohit"
                  helperText={errors.lastname?.message}
                  error={errors.lastname}
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
                  defaultValue="mg08312@gmail.com"
                  helperText={errors.Email?.message}
                  error={errors?.Email}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  {...register("Address", { required: "Please enter a address" })}
                  fullWidth
                  type="text"
                  defaultValue="162 ambey nagar Sukhilya"
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
                  defaultValue="BTech(Computer Science )"
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
                  defaultValue="9039512378"
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
                  defaultValue="452010"
                  helperText={errors?.PinCode?.message}
                  error={errors?.PinCode}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <MobileDatePicker
                    sx={{ width: "100%" }}
                    defaultValue={dayjs(selectedDate)}
                    label="Select a date"
                    {...register("date", { required: "Date is required" })}
                    onChange={(date) => {
                      setValue("date", date, { shouldValidate: true });
                      setSelectedDate(date);
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        error={!!errors.date}
                        helperText={errors.date?.message}
                      />
                    )}
                  />
                </LocalizationProvider>
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
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  defaultValue="2years"
                  type="text"
                  label="Experince"
                  {...register("experince", { required: "PLease add experience" })}
                  error={!!errors.experince}
                  helperText={errors?.experince?.meassage}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  type="text"
                  label="Gender"
                  defaultValue="Male"
                  {...register("gender", "Please add gender")}
                  error={!!errors.meassage}
                  helperText={errors?.gender?.meassage}
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <MDButton type="submit" variant="contained" sx={{ mr: 1 }} color="success">
              Submit
            </MDButton>
            <MDButton variant="contained" color="error" onClick={() => setOpen(false)}>
              Discard
            </MDButton>
          </DialogActions>
        </form>
      </Dialog>
    </MDBox>
  );
}
export default Edit;
