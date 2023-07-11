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
  Radio,
} from "@mui/material";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { FileDocumentEdit } from "mdi-material-ui";
import CloseIcon from "@mui/icons-material/Close";

// const label = { inputProps: { "aria-label": "Checkbox demo" } };

function AddQuestion() {
  const [open, setOpen] = useState(false);
  const [fields, setFields] = useState([1]);
  console.log("field", fields[0]);
  //   const [nextId, setNextId] = useState(2);
  const [selectedOptions, setSelectedOptions] = useState(["", "", "", ""]);

  const handleOptionChange = (event, index) => {
    const updatedSelectedOptions = [...selectedOptions];
    updatedSelectedOptions[index] = event.target.value;
    console.log("UpdatedOption", updatedSelectedOptions);
    setSelectedOptions(updatedSelectedOptions);
  };
  const {
    handleSubmit,
    register,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  const handleClose = () => {
    setOpen(false);
    setFields([1]);
    reset();
  };
  const onSubmit = (data) => {
    console.log("Data", data);
    reset();
  };
  const handleAddField = () => {
    const newField = 1;
    setFields([...fields, newField]);

    // setNextId(nextId + 1);
  };
  const handleFieldChange = (e) => {
    setValue(e.target.name, e.target.value);
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
          fontSize: "12px",
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
              {fields.map((field, index) => (
                <Grid container spacing={2} marginTop={2}>
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
                      {...register(`questions${index}.question`, {
                        required: "please enter a question",
                      })}
                      onChange={handleFieldChange}
                      error={!!errors?.question}
                      helperText={errors.question?.message}
                    />
                  </Grid>
                  <Grid item xs={12} spacing={2}>
                    <Grid container>
                      <Grid item xs={1}>
                        <Radio
                          name="radio-buttons"
                          onChange={(e) => handleOptionChange(e, index)}
                          value="option1"
                          checked={selectedOptions[index] === "option1"}
                        />
                      </Grid>
                      <Grid item xs={11}>
                        <TextField
                          fullWidth
                          label="Option1"
                          type="text"
                          {...register(`option1${index}.option1`, {
                            required: "Please enter Option1 ",
                          })}
                          onChange={handleFieldChange}
                          error={!!errors.option1}
                          helperText={errors.option1?.message}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container spacing={2}>
                      <Grid item xs={1}>
                        <Radio
                          name="radio-buttons"
                          onChange={(e) => handleOptionChange(e, index)}
                          value="option2"
                          checked={selectedOptions[index] === "option2"}
                        />
                      </Grid>
                      <Grid item xs={11}>
                        <TextField
                          fullWidth
                          label="Option2"
                          type="text"
                          {...register(`option2${index}.option2`, {
                            required: "Please enter Option2",
                          })}
                          onChange={handleFieldChange}
                          error={!!errors.option2}
                          helperText={errors.option2?.message}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container>
                      <Grid item xs={1}>
                        <Radio
                          name="radio-buttons"
                          onChange={(e) => handleOptionChange(e, index)}
                          value="option3"
                          checked={selectedOptions[index] === "option3"}
                        />
                      </Grid>
                      <Grid item xs={11}>
                        <TextField
                          fullWidth
                          label="Option3"
                          type="text"
                          {...register(`option3${index}.option3`, {
                            required: "Please enter Option3 ",
                          })}
                          onChange={handleFieldChange}
                          error={!!errors.option3}
                          helperText={errors.option3?.message}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container spacing={2}>
                      <Grid item xs={1}>
                        <Radio
                          name="radio-buttons"
                          onChange={(e) => handleOptionChange(e, index)}
                          value="option4"
                          checked={selectedOptions[index] === "option4"}
                        />
                      </Grid>
                      <Grid item xs={11}>
                        <TextField
                          fullWidth
                          label="Option4"
                          type="text"
                          {...register(`option4${index}.option4`, {
                            required: "Please enter Option4 ",
                          })}
                          onChange={handleFieldChange}
                          error={!!errors.option4}
                          helperText={errors.option4?.message}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={4}>
                    <IconButton
                      onClick={handleAddField}
                      value={field}
                      color="success"
                      sx={{
                        borderRadius: "10px",
                        backgroundColor: "#308AEC",
                        color: "#FFFFFF",
                        fontWeight: "normal !important",
                        fontSize: "14px",
                        padding: "10px 10px",
                        "&:hover": {
                          backgroundColor: "#32AADD",
                          color: "#FFFFFF",
                        },
                        "&:focus:not(:hover)": { color: "#FFFFFF", backgroundColor: "#308AEC" },
                      }}
                    >
                      add more
                    </IconButton>
                  </Grid>
                </Grid>
              ))}
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
