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
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import axios from "axios";

function Edit({ editData, list }) {
  const [open, setOpen] = useState(false);
  const { _id } = editData;
  // const [gender, setGender] = useState("");
  console.log("data", editData.qualification);
  const Dob = editData.dob;
  const JoinDate = editData.joinDate;

  const {
    handleSubmit,
    register,
    setValue,
    reset,
    control,
    getValues,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const payload = {
      name: data.name,
      email: data.email,
      gender: data.gender,
      contactNumber: data.contactNumber,
      experience: data.experience,
      dob: data.dob,
      joinDate: data.joinDate,
      password: data.password,
      address: data.address,
      qualification: data.qualification,
    };
    axios
      .post(`http://localhost:5000/api/admin/teacher/update/${_id}`, payload)
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => {
        console.log("errrors", err);
      });
    setOpen(false);
    list();
  };

  const handleClose = () => {
    setOpen(false);
    reset();
  };
  const handleItemChange = (index, value) => {
    const qualifications = [...getValues("qualification")];
    qualifications[index] = value;
    setValue("qualification", qualifications);
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
                    setValue(+e.target.value);
                  }}
                  label="Contact Number"
                  helperText={errors?.contactNumber?.message}
                  error={errors?.contactNumber}
                />
              </Grid>
              <Grid item sm={6}>
                <TextField
                  defaultValue={editData.password}
                  {...register("password", { required: "Please enter a password" })}
                  fullWidth
                  onChange={(e) => {
                    setValue(e.target.value);
                  }}
                  label="Password"
                  helperText={errors?.password?.message}
                  error={errors?.password}
                  type="password"
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
                  onChange={(e) => {
                    setValue(+e.target.value);
                  }}
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
              <Grid item sm={12}>
                <Controller
                  name="qualification"
                  control={control}
                  defaultValue={editData.qualification}
                  render={({ field }) => (
                    <Grid container columnSpacing={2}>
                      {field.value.map((item, index) => (
                        <Grid item xs={6}>
                          <TextField
                            fullWidth
                            value={item}
                            onChange={(e) => handleItemChange(index, e.target.value)}
                          />
                        </Grid>
                      ))}
                    </Grid>
                  )}
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
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    contactNumber: PropTypes.number.isRequired,
    password: PropTypes.number.isRequired,
    address: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    dob: PropTypes.string.isRequired,
    joinDate: PropTypes.string.isRequired,
    experience: PropTypes.number.isRequired,
    qualification: PropTypes.arrayOf(PropTypes.string).isRequired, // Add other properties as needed
  }).isRequired,
  list: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    contactNumber: PropTypes.number.isRequired,
    address: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    dob: PropTypes.string.isRequired,
    joinDate: PropTypes.string.isRequired,
    experience: PropTypes.number.isRequired,
    qualification: PropTypes.arrayOf(PropTypes.string).isRequired,

    // Add other properties as needed
  }).isRequired,
};
export default Edit;
