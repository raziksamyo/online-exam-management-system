import * as React from "react";
import {
  Grid,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
  DialogTitle,
  IconButton,
  FormLabel,
  MenuItem,
  Select,
  FormControl,
} from "@mui/material";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { FileDocumentEdit } from "mdi-material-ui";
import CloseIcon from "@mui/icons-material/Close";

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
    <MDBox>
      <MDButton
        onClick={() => setOpen(true)}
        startIcon={<FileDocumentEdit />}
        sx={{
          borderRadius: "10px",
          backgroundColor: "#308AEC",
          color: "#FFFFFF",
          fontWeight: "normal !important",
          fontSize: "10px",
          padding: "1px 10px",
          "&:hover": {
            backgroundColor: "#32AADD",
            color: "#FFFFFF",
          },
          "&:focus:not(:hover)": { color: "#FFFFFF", backgroundColor: "#308AEC" },
        }}
      >
        AddExam
      </MDButton>
      <Dialog
        open={open}
        aria-labelledby="user-view-edit"
        sx={{ "& .MuiPaper-root": { width: "100%", maxWidth: 850, p: [2, 10] } }}
        aria-describedby="user-view-edit-description"
      >
        <DialogTitle sx={{ textAlign: "center" }}>Add Examination</DialogTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogContent>
            <IconButton
              sx={{ position: "absolute", right: "1rem", top: "1rem" }}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <FormControl fullWidth>
                  <FormLabel>CoursesName</FormLabel>
                  <Select
                    {...register("studentId", { required: "PLease selected Stundent Name" })}
                    error={errors?.studentId}
                    helperText={errors?.studentId?.message}
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    sx={{ padding: "12px" }}
                  >
                    <MenuItem value="Nodejs">Nodejs</MenuItem>
                    <MenuItem>Reactjs</MenuItem>
                    <MenuItem>Javascript</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormLabel>Exam TITLE</FormLabel>
                <TextField
                  fullWidth
                  {...register("examTitle", { required: "Please enter examination name" })}
                  onChange={(e) => {
                    setValue(e.target.name, e.target.value);
                  }}
                  helperText={errors?.examTitle?.message}
                  error={errors?.examTitle}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormLabel>ExamDate</FormLabel>
                <TextField
                  fullWidth
                  type="date"
                  {...register("date", { required: "Please enter date " })}
                  onChange={(e) => {
                    setValue(e.target.name, e.target.value);
                  }}
                  error={!!errors.date}
                  helperText={errors?.date?.message}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormLabel>Description</FormLabel>
                <TextField
                  fullWidth
                  label="TOTALQuestion"
                  type="text"
                  {...register("totalquestion", { required: "Please enter Description " })}
                  onChange={(e) => {
                    setValue(e.target.name, e.target.value);
                  }}
                  error={!!errors.totalquestion}
                  helperText={errors?.totalquestion?.message}
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <MDButton type="submit" variant="contained" sx={{ mr: 1 }} color="success">
              Submit
            </MDButton>
            <MDButton variant="outlined" color="secondary" onClick={handleClose}>
              Discard
            </MDButton>
          </DialogActions>
        </form>
      </Dialog>
    </MDBox>
  );
}
export default Add;
