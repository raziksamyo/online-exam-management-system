import {
  Grid,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
} from "@mui/material";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import { useForm } from "react-hook-form";
import { useState } from "react";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";

function Edit() {
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
        sx={{ "& .MuiPaper-root": { width: "100%", maxWidth: 750, p: [2, 10] } }}
        aria-describedby="user-view-edit-description"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogContent>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-helper-label">TeacherName</InputLabel>
                  <Select
                    {...register("teacherId", { required: "PLease selected Teacher Name" })}
                    error={errors?.teacherId}
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    sx={{ padding: "12px" }}
                    label="TeacherName"
                  >
                    <MenuItem value="Rahul">Rahul</MenuItem>
                    <MenuItem value="Varun">Varun</MenuItem>
                    <MenuItem value="Mohit">Mohit</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  {...register("Title", { required: "Please enter Title " })}
                  fullWidth
                  onChange={(e) => {
                    setValue(e.target.name, e.target.value);
                  }}
                  label="TITLE"
                  helperText={errors.Title?.message}
                  error={errors?.Title}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  {...register("Description", { required: "Please enter a Description" })}
                  fullWidth
                  type="text"
                  onChange={(e) => {
                    setValue(e.target.name, e.target.value);
                  }}
                  label="Description"
                  helperText={errors.Description?.message}
                  error={errors?.Description}
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
export default Edit;
