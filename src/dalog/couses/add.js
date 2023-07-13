import {
  Grid,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
  Typography,
  IconButton,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Box,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { FileDocumentEdit } from "mdi-material-ui";
import CloseIcon from "@mui/icons-material/Close";
import MDButton from "components/MDButton";

function Add() {
  const [open, setOpen] = useState(false);
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm();

  const handleClose = () => {
    setOpen(false);
  };
  const onSubmit = (data) => {
    console.log("Data", data);
  };
  return (
    <Box>
      <IconButton
        onClick={() => setOpen(true)}
        startIcon={<FileDocumentEdit />}
        sx={{
          borderRadius: "10px",
          backgroundColor: "#308AEC",
          color: "#FFFFFF",
          fontWeight: "normal !important",
          fontSize: "13px",
          padding: "1px 10px",
          "&:hover": {
            backgroundColor: "#32AADD",
            color: "#FFFFFF",
          },
          "&:focus:not(:hover)": { color: "#FFFFFF", backgroundColor: "#308AEC" },
        }}
      >
        Add Courses
      </IconButton>
      <Dialog
        open={open}
        aria-labelledby="user-view-edit"
        sx={{ "& .MuiPaper-root": { width: "100%", maxWidth: 750, p: [2, 10] } }}
        aria-describedby="user-view-edit-description"
      >
        <Typography variant="h3">Add Courses</Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogContent>
            <IconButton
              sx={{ position: "absolute", right: "1rem", top: "1rem" }}
              onClick={handleClose}
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
                    helperText={errors?.teacherId?.message}
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    label="TeacherName"
                    sx={{ padding: "12px" }}
                  >
                    <MenuItem value="Rahul">Rahul</MenuItem>
                    <MenuItem value="Varun">Varun</MenuItem>
                    <MenuItem value="Mohit">Mohit</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="TITLE"
                  type="text"
                  {...register("title", { required: "Please enter Title " })}
                  onChange={(e) => {
                    setValue(e.target.name, e.target.value);
                  }}
                  error={!!errors.title}
                  helperText={errors.title?.message}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Description"
                  type="text"
                  {...register("description", { required: "Please enter Description " })}
                  onChange={(e) => {
                    setValue(e.target.name, e.target.value);
                  }}
                  error={!!errors.description}
                  helperText={errors.title?.description}
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <MDButton type="submit" variant="contained" color="success">
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
