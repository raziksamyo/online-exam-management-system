import {
  Grid,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  Box,
} from "@mui/material";
import MDButton from "components/MDButton";
import { useForm } from "react-hook-form";
import { useState } from "react";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import CloseIcon from "@mui/icons-material/Close";

function Edit() {
  const [open, setOpen] = useState(false);
  const [gender, setGender] = useState("");
  const {
    handleSubmit,
    register,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log("Data", data);
    reset();
  };

  const handleChange = (event) => {
    setGender(event.target.value);
  };
  return (
    <Box>
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
        sx={{ "& .MuiPaper-root": { width: "100%", maxWidth: 750, padding: [2, 3] } }}
      >
        <Typography varaint="h5">Edit student Details</Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogContent>
            <IconButton
              sx={{ position: "absolute", right: "1rem", top: "1rem" }}
              onClick={() => setOpen(false)}
            >
              <CloseIcon />
            </IconButton>
            <Grid container spacing={2}>
              <Grid item sm={6}>
                <TextField
                  {...register("Name", { required: "Please enter a Frist Name" })}
                  fullWidth
                  onChange={(e) => {
                    setValue(e.target.value);
                  }}
                  label="Name"
                  helperText={errors?.Name?.message}
                  error={errors?.Name}
                />
              </Grid>
              <Grid item sm={6}>
                <TextField
                  {...register("contactNumber", { required: "Please enter a Contact Number" })}
                  fullWidth
                  onChange={(e) => {
                    setValue(e.target.value);
                  }}
                  label="Contact Number"
                  helperText={errors?.contactNumber?.message}
                  error={errors?.contactNumber}
                />
              </Grid>
              <Grid item sm={6}>
                <FormControl fullWidth>
                  <InputLabel>Gender</InputLabel>
                  <Select
                    label="Age"
                    {...register("Gender", { required: "PLease selected Gender" })}
                    error={errors?.Gender}
                    helperText={errors?.Gender?.message}
                    value={gender}
                    onChange={handleChange}
                    sx={{ padding: "12px" }}
                  >
                    <MenuItem value={10}>Male</MenuItem>
                    <MenuItem value={20}>Female</MenuItem>
                  </Select>
                  {errors?.Gender && (
                    <FormHelperText sx={{ color: "red" }}>{errors?.Gender?.message}</FormHelperText>
                  )}
                </FormControl>
              </Grid>
              <Grid item sm={6}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    {...register("joining")}
                    label="Join Date"
                    value={watch("joining")}
                    onChange={(value) => setValue("joining", value)}
                    sx={{ width: "100%" }}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item sm={6}>
                <TextField
                  {...register("email", { required: "Please enter Email ID" })}
                  fullWidth
                  onChange={(e) => {
                    setValue(e.target.value);
                  }}
                  label="Email ID"
                  helperText={errors.email?.message}
                  error={errors?.email}
                />
              </Grid>
              <Grid item sm={6}>
                <TextField
                  fullWidth
                  label="Hight Qualifications"
                  {...register("qualifications", { required: "Please filed Hight Qualifications" })}
                  error={errors?.qualifications}
                  helperText={errors.qualifications?.message}
                />
              </Grid>
              <Grid item sm={6}>
                <TextField
                  {...register("address", { required: "Please enter a Address" })}
                  fullWidth
                  type="text"
                  onChange={(e) => {
                    setValue(e.target.value);
                  }}
                  label="Address"
                  helperText={errors.address?.message}
                  error={errors.address}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    {...register("dob")}
                    label="Date of Birth"
                    value={watch("dob")}
                    onChange={(value) => setValue("dob", value)}
                    sx={{ width: "100%" }}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  {...register("education", { required: "Please enter a Education" })}
                  fullWidth
                  defaultValue="BTech(Computer Science )"
                  type="text"
                  onChange={(e) => {
                    setValue(e.target.name, e.target.value);
                  }}
                  label="Education"
                  helperText={errors?.education?.message}
                  error={errors.education}
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
    </Box>
  );
}
export default Edit;
