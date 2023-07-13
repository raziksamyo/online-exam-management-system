import {
  Grid,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
  IconButton,
  Typography,
  IconButton,
} from "@mui/material";
import MDButton from "components/MDButton";
import { useForm } from "react-hook-form";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { FileDocumentEdit } from "mdi-material-ui";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import CloseIcon from "@mui/icons-material/Close";

function Add() {
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
  };

  const handleClose = () => {
    setOpen(false);
    reset();
  };

  const handleChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <Box>
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
        sx={{ "& .MuiPaper-root": { width: "100%", maxWidth: 750, p: [2, 3] } }}
      >
        <Typography variant="h5" textAlign="center">
          Add Student
        </Typography>
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
                  <Select label="Age" value={gender} onChange={handleChange}>
                    <MenuItem value={10}>Male</MenuItem>
                    <MenuItem value={20}>Female</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item sm={6}>
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
                  label="Higher Qualification"
                  {...register("qualifications", { required: "Please filed Higher Qualification" })}
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
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <MobileDatePicker
                    sx={{ width: "100%" }}
                    label="Select DOB "
                    {...register("date", { required: "Date is required" })}
                    onChange={(date) => {
                      setValue("date", date, { shouldValidate: true });
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
export default Add;
