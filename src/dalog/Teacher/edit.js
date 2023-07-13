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
  Box,
  Button,
} from "@mui/material";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import { useForm } from "react-hook-form";
import { useState } from "react";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import CloseIcon from "@mui/icons-material/Close";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

function Edit() {
  const [open, setOpen] = useState(false);
  const [gender, setGender] = useState("");
  const [fields, setFields] = useState([{ id: 1, value: "" }]);
  const [nextId, setNextId] = useState(2);

  const {
    handleSubmit,
    register,
    setValue,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log("Data", data);
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

  const handleChange = (event) => {
    setGender(event.target.value);
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
        sx={{ "& .MuiPaper-root": { width: "100%", maxWidth: 750, padding: [2, 3] } }}
      >
        <Typography variant="h3">Edit Teacher Details</Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogContent sx={{ overflow: "hidden" }}>
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
