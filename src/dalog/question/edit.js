import {
  Grid,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
  DialogTitle,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
  Radio,
} from "@mui/material";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import { useForm } from "react-hook-form";
import { useState } from "react";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";

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
        <DialogTitle>Edit question</DialogTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogContent>
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
                  <Grid item xs={2}>
                    <Radio
                      name="radio-buttons"
                      onChange={(e) => handleChange(e)}
                      value="option1"
                      checked={selectedValue === "option1"}
                    />
                  </Grid>
                  <Grid item xs={10}>
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
                  <Grid item xs={2}>
                    <Radio
                      name="radio-buttons"
                      onChange={(e) => handleChange(e)}
                      value="option2"
                      checked={selectedValue === "option2"}
                    />
                  </Grid>
                  <Grid item xs={10}>
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
                  <Grid item xs={2}>
                    <Radio
                      name="radio-buttons"
                      onChange={(e) => handleChange(e)}
                      value="option3"
                      checked={selectedValue === "option3"}
                    />
                  </Grid>
                  <Grid item xs={10}>
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
                  <Grid item xs={2}>
                    <Radio
                      name="radio-buttons"
                      onChange={(e) => handleChange(e)}
                      value="option4"
                      checked={selectedValue === "option4"}
                    />
                  </Grid>
                  <Grid item xs={10}>
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
            <MDButton variant="contained" color="error" onClick={() => setOpen(false)}>
              Discard
            </MDButton>
          </DialogActions>
        </form>
      </Dialog>
    </MDBox>
  );
}
export default Edits;
