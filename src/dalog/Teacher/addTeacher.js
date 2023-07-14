import {
  Grid,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
  IconButton,
  Typography,
  Box,
  Button,
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
import { FileDocumentEdit } from "mdi-material-ui";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

function Add() {
  const [open, setOpen] = useState(false);
  const [gender, setGender] = useState("");
  const [fields, setFields] = useState([{ id: 1, value: "" }]);
  const [nextId, setNextId] = useState(2);
  const {
    handleSubmit,
    register,
    setValue,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log("Data", data);
    reset();
  };

  const handleClose = () => {
    setOpen(false);
    reset();
  };

  const handleAddField = () => {
    const newField = { id: nextId, value: "" };
    setFields([...fields, newField]);
    setNextId(nextId + 1);
  };

  const handleFieldChange = (id, event) => {
    const updatedFields = fields.map((field) =>
      field.id === id ? { ...field, value: event.target.value } : field
    );
    setFields(updatedFields);
  };
  const handeldatechange = (selectedDate) => {
    setValue("DOB", selectedDate);
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
          Add Teacher
        </Button>
      </Box>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        sx={{ "& .MuiPaper-root": { width: "100%", maxWidth: 750, p: [2, 3] } }}
      >
        <Typography variant="h3">Add Teacher Details</Typography>
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
                  <Select
                    label="Age"
                    value={gender}
                    {...register("Gender", { required: "Gender is required" })}
                    onChange={handleChange}
                    sx={{ padding: "12px" }}
                    error={!!errors?.Gender}
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
                  <FormControl error={!!errors.DOB} fullWidth>
                    <DatePicker
                      {...register("DOB", { required: "Enter a date" })}
                      label="Date of Birth"
                      value={watch("DOB")}
                      onChange={handeldatechange}
                      renderInput={(params) => <TextField {...params} />}
                    />
                    {errors.DOB && <FormHelperText>{errors.DOB.message}</FormHelperText>}
                  </FormControl>
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
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    {...register("joinDate")}
                    label="Join Date"
                    value={watch("joinDate")}
                    onChange={(value) => setValue("joinDate", value)}
                    sx={{ width: "100%" }}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item sm={6}>
                <TextField
                  fullWidth
                  label="Experience"
                  {...register("experience", { required: "Please filed Experince" })}
                  error={errors?.experience}
                  helperText={errors.experience?.message}
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
              <Grid item sm={6}>
                <TextField
                  fullWidth
                  type="file"
                  {...register("photo", { required: "Please select a photo" })}
                  error={!!errors.photo}
                  helperText={errors.photo?.message}
                  label="upload photo"
                />
              </Grid>
              <Grid item sm={12}>
                {fields.map((field) => (
                  <Box sx={{ display: "flex" }}>
                    <Box key={field.id}>
                      <TextField
                        sx={{
                          width: { sm: 200, md: 300, lg: 560 },
                          mb: 2,
                        }}
                        type="text"
                        value={field.value}
                        label="Qualifications"
                        onChange={(event) => handleFieldChange(field.id, event)}
                      />
                    </Box>
                    <Box>
                      {field.value ? <Button onClick={handleAddField}>Add Field</Button> : ""}
                    </Box>
                  </Box>
                ))}
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
