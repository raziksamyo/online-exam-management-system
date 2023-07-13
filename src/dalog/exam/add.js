import * as React from "react";
import dayjs from "dayjs";
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
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import MDButton from "components/MDButton";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { FileDocumentEdit } from "mdi-material-ui";
import CloseIcon from "@mui/icons-material/Close";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";

function padZero(number) {
  return number.toString().padStart(2, "0");
}
function getCurrentTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Format the time as desired (e.g., HH:MM:SS)
  const formattedTime = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;

  return formattedTime;
}

const currentTime = getCurrentTime();
console.log("cureent", currentTime);
function Add() {
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
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
                  >
                    <MenuItem value="Nodejs">Nodejs</MenuItem>
                    <MenuItem>Reactjs</MenuItem>
                    <MenuItem>Javascript</MenuItem>
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
                    setValue(e.target.name, e.target.value);
                  }}
                  helperText={errors?.examTitle?.message}
                  error={errors?.examTitle}
                />
              </Grid>
              <Grid item sm={4} xs={12}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <MobileDatePicker
                    defaultValue={dayjs(selectedDate)}
                    label="Select a date"
                    {...register("date", { required: "Date is required" })}
                    onChange={(date) => {
                      setValue("date", date, { shouldValidate: true });
                      setSelectedDate(date);
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        error={!!errors.date}
                        helperText={errors?.date?.message}
                      />
                    )}
                  />
                </LocalizationProvider>
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
                <LocalizationProvider dateAdapter={AdapterDayjs}>
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
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <MobileTimePicker
                    defaultValue={dayjs("2022-04-17T15:30")}
                    label="endTime"
                    {...register("endtime", { required: "Time is required" })}
                    onChange={(endTime) => setValue("endtime", endTime, { shouldValidate: true })}
                  />
                </LocalizationProvider>
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
export default Add;
