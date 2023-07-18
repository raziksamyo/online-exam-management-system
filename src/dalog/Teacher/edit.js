import {
  Grid,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
  IconButton,
  Typography,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";
import MDButton from "components/MDButton";
import { useForm } from "react-hook-form";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";

function Edit({ editData }) {
  const [open, setOpen] = useState(false);
  // const [gender, setGender] = useState("");
  console.log("data", editData);
  const Dob = editData.dob;
  const JoinDate = editData.joinDate;

  const {
    handleSubmit,
    register,
    setValue,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log("Data", data);
  };

  const handleClose = () => {
    setOpen(false);
    reset();
  };
  // const handleChange = (event) => {
  //   setGender(event.target.value);
  // };

  return (
    <Box>
      <Box sx={{ marginBottom: "15px" }}>
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
      </Box>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        sx={{ "& .MuiPaper-root": { width: "100%", maxWidth: 750, p: [2, 3] } }}
      >
        <Typography variant="h3">Edit Teacher Details</Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogContent>
            <IconButton
              sx={{ position: "absolute", right: "1rem", top: "1rem" }}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
            <Grid container spacing={2}>
              <Grid item sm={6}>
                <TextField
                  defaultValue={editData.name}
                  {...register("name", { required: "Please enter a Name" })}
                  fullWidth
                  onChange={(e) => {
                    setValue(e.target.value);
                  }}
                  label="Name"
                  helperText={errors?.name?.message}
                  error={errors?.name}
                />
              </Grid>
              <Grid item sm={6}>
                <TextField
                  defaultValue={editData.contactNumber}
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
                    defaultValue={editData.gender}
                    {...register("gender", { required: "Gender is required" })}
                    onChange={(e) => {
                      setValue("gender", e.target.value);
                    }}
                    sx={{ padding: "12px" }}
                    error={!!errors?.gender}
                  >
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                  </Select>
                  {errors?.gender && (
                    <FormHelperText sx={{ color: "red" }}>{errors?.gender?.message}</FormHelperText>
                  )}
                </FormControl>
              </Grid>
              <Grid item sm={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    {...register("dob")}
                    defaultValue={editData.dob}
                    label="Date of Birth"
                    value={dayjs(Dob)}
                    onChange={(value) => setValue("dob", value)}
                    sx={{ width: "100%" }}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item sm={6}>
                <TextField
                  defaultValue={editData.email}
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
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    {...register("joinDate")}
                    label="Join Date"
                    value={dayjs(JoinDate)}
                    onChange={(value) => setValue("joinDate", value)}
                    sx={{ width: "100%" }}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item sm={6}>
                <TextField
                  defaultValue={editData.experience}
                  fullWidth
                  label="Experience"
                  {...register("experience", { required: "Please filed Experince" })}
                  error={errors?.experience}
                  helperText={errors.experience?.message}
                />
              </Grid>
              <Grid item sm={6}>
                <TextField
                  defaultValue={editData.address}
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
              <Grid item sm={6}>
                <TextField
                  fullWidth
                  type="file"
                  {...register("photo", { required: "Please select a photo" })}
                  error={!!errors.photo}
                  helperText={errors.photo?.message}
                  label="Upload photo"
                />
              </Grid>
              <Grid item sm={12}>
                <TextField
                  {...register("qualification", { required: "Please enter a qualification" })}
                  fullWidth
                  type="text"
                  onChange={(e) => {
                    setValue(e.target.value);
                  }}
                  label="Qualification"
                  helperText={errors?.qualification?.message}
                  error={!!errors.qualification}
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <MDButton type="submit" variant="contained" sx={{ mr: 1 }} color="success">
              Submit
            </MDButton>
            <MDButton variant="contained" color="error" onClick={handleClose}>
              Discard
            </MDButton>
          </DialogActions>
        </form>
      </Dialog>
    </Box>
  );
}
Edit.propTypes = {
  editData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    contactNumber: PropTypes.number.isRequired,
    address: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    dob: PropTypes.string.isRequired,
    joinDate: PropTypes.string.isRequired,
    experience: PropTypes.number.isRequired,
    // Add other properties as needed
  }).isRequired,
};
export default Edit;
