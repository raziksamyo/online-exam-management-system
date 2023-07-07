import {
  Grid,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
  DialogTitle,
  IconButton,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { FileDocumentEdit } from "mdi-material-ui";
import CloseIcon from "@mui/icons-material/Close";

function AddQuestion() {
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
  const handelAdd = () => {};
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
        Add Question
      </MDButton>
      <Dialog
        open={open}
        aria-labelledby="user-view-edit"
        sx={{ "& .MuiPaper-root": { width: "100%", maxWidth: 750, p: [2, 10] } }}
        aria-describedby="user-view-edit-description"
      >
        <DialogTitle sx={{ textAlign: "center" }}>Add Question</DialogTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogContent>
            <IconButton
              sx={{ position: "absolute", right: "1rem", top: "1rem" }}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-helper-label">CourseName</InputLabel>
                  <Select
                    {...register("courseName", { required: "PLease selected option" })}
                    error={errors?.courseName}
                    helperText={errors?.courseName?.message}
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    label="CourseName"
                    sx={{ padding: "12px" }}
                  >
                    <MenuItem value="Nodejs">Nodejs</MenuItem>
                    <MenuItem value="Reactjs">Reactjs</MenuItem>
                    <MenuItem value="Javascript">Javascript</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Question"
                  type="text"
                  {...register("question", { required: "please enter a question" })}
                  onChange={(e) => {
                    setValue(e.target.name, e.target.value);
                  }}
                  error={!!errors?.question}
                  helperText={errors.question?.message}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Option1"
                  type="text"
                  {...register("option1", { required: "Please enter Option1 " })}
                  onChange={(e) => {
                    setValue(e.target.name, e.target.value);
                  }}
                  error={!!errors.option1}
                  helperText={errors.option1?.message}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Option2"
                  type="text"
                  {...register("option2", { required: "Please enter Option2" })}
                  onChange={(e) => {
                    setValue(e.target.name, e.target.value);
                  }}
                  error={!!errors.option2}
                  helperText={errors.option2?.message}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Option3"
                  type="text"
                  {...register("option3", { required: "Please enter Option3 " })}
                  onChange={(e) => {
                    setValue(e.target.name, e.target.value);
                  }}
                  error={!!errors.option3}
                  helperText={errors.option3?.message}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Option4"
                  type="text"
                  {...register("option4", { required: "Please enter Option4 " })}
                  onChange={(e) => {
                    setValue(e.target.name, e.target.value);
                  }}
                  error={!!errors.option4}
                  helperText={errors.option4?.message}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Answer"
                  type="text"
                  {...register("Answer", { required: "Please enter Answer" })}
                  onChange={(e) => {
                    setValue(e.target.name, e.target.value);
                  }}
                  error={!!errors.Answer}
                  helperText={errors.Answer?.message}
                />
              </Grid>
              <Grid item xs={4}>
                <IconButton onClick={handelAdd}>Add more</IconButton>
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <MDButton type="submit" variant="contained" sx={{ mr: 1 }} color="success">
              Save
            </MDButton>
          </DialogActions>
        </form>
      </Dialog>
    </MDBox>
  );
}
export default AddQuestion;
