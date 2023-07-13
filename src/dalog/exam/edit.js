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
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import CloseIcon from "@mui/icons-material/Close";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

function Edit() {
  const [open, setOpen] = useState(false);
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
        sx={{ "& .MuiPaper-root": { width: "100%", maxWidth: 750, p: [2, 10] } }}
        aria-describedby="user-view-edit-description"
      >
        <Typography variant="h3">Exam details</Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogContent>
            <IconButton
              sx={{ position: "absolute", right: "1rem", top: "1rem" }}
              onClick={() => setOpen(false)}
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
                  {errors?.coursesName && (
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
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <MobileTimePicker
                    label="endTime"
                    {...register("endtime", { required: " end time is required" })}
                    onChange={(endtime) => setValue("endtime", endtime, { shouldValidate: true })}
                    value={watch("endtime")}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        error={!!errors.endtime}
                        helperText={errors?.endtime?.message}
                      />
                    )}
                  />
                  {errors?.endtime && (
                    <FormHelperText sx={{ color: "red" }}>
                      {errors?.endtime?.message}
                    </FormHelperText>
                  )}
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
            <MDButton variant="contained" color="error" onClick={() => setOpen(false)}>
              Discard
            </MDButton>
          </DialogActions>
        </form>
      </Dialog>
    </Box>
  );
}
export default Edit;
