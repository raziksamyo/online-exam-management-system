import {
  Grid,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
  Typography,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
  Radio,
  Box,
  FormHelperText,
} from "@mui/material";
import MDButton from "components/MDButton";
import { useForm } from "react-hook-form";
import { useState } from "react";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import CloseIcon from "@mui/icons-material/Close";

function Edits() {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
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
        <Typography variant="h3">Edit question</Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogContent>
            <IconButton
              sx={{ position: "absolute", right: "1rem", top: "1rem" }}
              onClick={handelClose}
            >
              <CloseIcon />
            </IconButton>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-helper-label">CoursesName</InputLabel>
                  <Select
                    {...register("CoursesName", { required: "PLease selected Courses Name" })}
                    error={errors?.teacherId}
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    sx={{ padding: "12px" }}
                    label="CourseName"
                  >
                    <MenuItem value="Nodejs">Nodejs</MenuItem>
                    <MenuItem value="Reactjs">Reactjs</MenuItem>
                    <MenuItem value="Javascript">Javascript</MenuItem>
                  </Select>
                  {errors.CoursesName && (
                    <FormHelperText sx={{ color: "red" }}>
                      {errors?.CoursesName?.message}
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  {...register("question", { required: "Please add question  " })}
                  fullWidth
                  onChange={(e) => {
                    setValue(e.target.name, e.target.value);
                  }}
                  label="Question"
                  helperText={errors?.question?.message}
                  error={errors?.question}
                />
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={2}>
                  <Grid item xs={1}>
                    <Radio
                      name="radio-buttons"
                      onChange={(e) => handleChange(e)}
                      value="option1"
                      checked={selectedValue === "option1"}
                    />
                  </Grid>
                  <Grid item xs={11}>
                    <TextField
                      {...register("option1", { required: "Please enter option1" })}
                      fullWidth
                      type="text"
                      onChange={(e) => {
                        setValue(e.target.name, e.target.value);
                      }}
                      label="option"
                      helperText={errors.option1?.message}
                      error={errors?.option1}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={2}>
                  <Grid item xs={1}>
                    <Radio
                      name="radio-buttons"
                      onChange={(e) => handleChange(e)}
                      value="option2"
                      checked={selectedValue === "option2"}
                    />
                  </Grid>
                  <Grid item xs={11}>
                    <TextField
                      {...register("option2", { required: "Please enter option2" })}
                      fullWidth
                      type="text"
                      onChange={(e) => {
                        setValue(e.target.name, e.target.value);
                      }}
                      label="option"
                      helperText={errors.option2?.message}
                      error={errors?.option2}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={2}>
                  <Grid item xs={1}>
                    <Radio
                      name="radio-buttons"
                      onChange={(e) => handleChange(e)}
                      value="option3"
                      checked={selectedValue === "option3"}
                    />
                  </Grid>
                  <Grid item xs={11}>
                    <TextField
                      {...register("option3", { required: "Please enter option3" })}
                      fullWidth
                      type="text"
                      onChange={(e) => {
                        setValue(e.target.name, e.target.value);
                      }}
                      label="option"
                      helperText={errors?.option3?.message}
                      error={errors?.option3}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={2}>
                  <Grid item xs={1}>
                    <Radio
                      name="radio-buttons"
                      onChange={(e) => handleChange(e)}
                      value="option4"
                      checked={selectedValue === "option4"}
                    />
                  </Grid>
                  <Grid item xs={11}>
                    <TextField
                      {...register("option4", { required: "Please enter option4" })}
                      fullWidth
                      type="text"
                      onChange={(e) => {
                        setValue(e.target.name, e.target.value);
                      }}
                      label="option"
                      helperText={errors?.option4?.message}
                      error={errors?.option4}
                    />
                  </Grid>
                </Grid>
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
export default Edits;
