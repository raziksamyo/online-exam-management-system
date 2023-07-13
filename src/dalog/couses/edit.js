import {
  Grid,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
  TextField,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
  Box,
  FormHelperText,
} from "@mui/material";
import MDButton from "components/MDButton";
import { useForm } from "react-hook-form";
import { useState } from "react";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import CloseIcon from "@mui/icons-material/Close";

function Edit() {
  const [open, setOpen] = useState(false);
  const {
    handleSubmit,
    register,
    setValue,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log("Data", data);
    reset();
  };
  const handelClose = () => {
    setOpen(false);
    reset();
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
        aria-labelledby="user-view-edit"
        sx={{ "& .MuiPaper-root": { width: "100%", maxWidth: 750, p: [2, 3] } }}
        aria-describedby="user-view-edit-description"
      >
        <Typography variant="h3">Edit Courses </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogContent>
            <IconButton
              sx={{ position: "absolute", right: "1rem", top: "1rem" }}
              onClick={handelClose}
            >
              <CloseIcon />
            </IconButton>
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
                  {errors?.teacherId && (
                    <FormHelperText sx={{ color: "red" }}>
                      {errors?.teacherId?.message}
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  {...register("Title", { required: "Please enter Title " })}
                  fullWidth
                  onChange={(e) => {
                    setValue(e.target.value);
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
                    setValue(e.target.value);
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
            <MDButton variant="contained" color="error" onClick={handelClose}>
              Discard
            </MDButton>
          </DialogActions>
        </form>
      </Dialog>
    </Box>
  );
}
export default Edit;
