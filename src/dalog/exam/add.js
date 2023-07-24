import * as React from "react";
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
  Button,
  Box,
  FormHelperText,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import MDButton from "components/MDButton";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { FileDocumentEdit } from "mdi-material-ui";
import CloseIcon from "@mui/icons-material/Close";
import { PropTypes } from "prop-types";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import axios from "axios";

function Add({ examData }) {
  const [open, setOpen] = useState(false);
  console.log("exam", examData);
  // const { _id, title } = !examData;

  const { _id, title } = examData;
  // console.log("id", _id);
  // console.log("id", _id);
  // console.log("title", title);
  const {
    handleSubmit,
    register,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  const handleClose = () => {
    setOpen(false);
    reset();
  };
  const onSubmit = (data) => {
    console.log("Data", data);
    const payload = {
      date: data.date,
      starttime: data.starttime,
      title: data.examTitle,
      courseId: data.coursesName,
      marks: Number(data.mark),
      totalquestion: Number(data.totalquestion),
      duration: Number(data.duration),
    };
    axios
      .post("http://localhost:5000/api/admin/exam/add", payload)
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => {
        console.log("err", err);
      });
    reset();
  };
  return (
    <Box>
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
        Add Exam
      </Button>

      <Dialog
        open={open}
        aria-labelledby="user-view-edit"
        sx={{ "& .MuiPaper-root": { width: "100%", maxWidth: 750, p: [2, 3] } }}
        aria-describedby="user-view-edit-description"
      >
        <Typography variant="h3">Add Examination</Typography>
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
                  <InputLabel id="demo-simple-select-label">CourseName</InputLabel>
                  <Select
                    {...register("coursesName", { required: "PLease selected Stundent Name" })}
                    error={errors?.coursesName}
                    helperText={errors?.coursesName?.message}
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    sx={{ padding: "12px" }}
                    label="CourseName"
                    onChange={(e) => {
                      setValue("courseName", e.target.value);
                    }}
                  >
                    <MenuItem value={_id}>{title}</MenuItem>
                  </Select>
                  {errors.coursesName && (
                    <FormHelperText sx={{ color: "red" }}>
                      {errors?.coursesName?.message}
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Exam Title"
                  fullWidth
                  {...register("examTitle", { required: "Please enter examination name" })}
                  onChange={(e) => {
                    setValue("examTitle", e.target.value);
                  }}
                  helperText={errors?.examTitle?.message}
                  error={errors?.examTitle}
                />
              </Grid>
              <Grid item sm={4} xs={12}>
                <FormControl>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      label="Createdate"
                      {...register("date", { required: "Date is required" })}
                      onChange={(date) => {
                        setValue("date", date, { shouldValidate: true });
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          error={!!errors?.date}
                          helperText={errors?.date?.message}
                        />
                      )}
                    />
                  </LocalizationProvider>
                  {errors?.date && (
                    <FormHelperText sx={{ color: "red" }}>{errors?.date?.message}</FormHelperText>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="TOTALQuestion"
                  type="number"
                  {...register("totalquestion", { required: "Please enter Description " })}
                  onChange={(e) => {
                    setValue(e.target.name, +e.target.value);
                  }}
                  error={!!errors.totalquestion}
                  helperText={errors?.totalquestion?.message}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <MobileTimePicker
                    label="startTime"
                    {...register("starttime", { required: "Time is required" })}
                    onChange={(starttime) =>
                      setValue("starttime", starttime, { shouldValidate: true })
                    }
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        error={!!errors.date}
                        helperText={errors?.date?.message}
                      />
                    )}
                  />
                  {errors?.starttime && (
                    <FormHelperText sx={{ color: "red" }}>
                      {errors?.starttime?.message}
                    </FormHelperText>
                  )}
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="ScheduleTime"
                  type="number"
                  {...register("duration", { required: "Please enter Description " })}
                  onChange={(e) => {
                    setValue(e.target.name, +e.target.value);
                  }}
                  error={!!errors.duration}
                  helperText={errors?.duration?.message}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="Marks"
                  type="number"
                  {...register("mark", { required: "Please enter Description " })}
                  onChange={(e) => {
                    setValue(e.target.name, +e.target.value);
                  }}
                  error={!!errors.mark}
                  helperText={errors?.mark?.message}
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
Add.propTypes = {
  examData: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    // Add other properties as needed
  }).isRequired,
};
export default Add;
