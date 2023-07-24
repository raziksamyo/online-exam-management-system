import {
  Grid,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
  IconButton,
  Typography,
  Box,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";
import MDButton from "components/MDButton";
import dayjs from "dayjs";
import { useForm, useFieldArray } from "react-hook-form";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { FileDocumentEdit } from "mdi-material-ui";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import axios from "axios";

function Add() {
  const [open, setOpen] = useState(false);
  const [gender, setGender] = useState("");
  const {
    handleSubmit,
    register,
    setValue,
    reset,
    control,
    watch,
    formState: { errors },
  } = useForm();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "qualification",
  });
  const onSubmit = (data) => {
    console.log("data", data);
    const filterQualification = data.qualification.map((item) => item.name);
    // console.log("qualification", qualification);
    const payload = {
      name: data.name,
      contactNumber: Number(data.contactNumber),
      gender: data.gender,
      email: data.email,
      password: Number(data.password),
      experience: Number(data.experience),
      joinDate: data.joinDate,
      dob: data.dob,
      qualification: filterQualification,
      address: data.address,
    };
    console.log("Payload", payload);
    axios
      .post("http://localhost:5000/api/admin/teacher/add", payload)
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => {
        console.log("errrors", err);
      });
    console.log("Payload", payload);
    reset();
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
    reset();
  };

  // const handleAddField = () => {
  //   const newField = { id: nextId, value: "" };
  //   setFields([...fields, newField]);
  //   setNextId(nextId + 1);
  //   setQualification(newField.value);
  // };

  // const handleFieldChange = (id, event) => {
  //   const updatedFields = fields.map((field) =>
  //     field.id === id ? { ...field, value: event.target.value } : field
  //   );
  //   setFields(updatedFields);
  // };

  const handleChange = (event) => {
    setGender(event.target.value);
  };
  return (
    <Box>
      <Box sx={{ marginBottom: "15px" }}>
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
          Add Teacher
        </Button>
      </Box>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        sx={{ "& .MuiPaper-root": { width: "100%", maxWidth: 750, p: [2, 3] } }}
      >
        <Typography variant="h3">Add Teacher Details</Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogContent>
            <IconButton
              sx={{ position: "absolute", right: "1rem", top: "1rem" }}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
            <Grid container spacing={2}>
              <Grid item sm={6}>
                <TextField
                  {...register("name", { required: "Please enter a Name" })}
                  fullWidth
                  onChange={(e) => {
                    setValue(e.target.value);
                  }}
                  label="Name"
                  helperText={errors?.name?.message}
                  error={errors?.name}
                />
              </Grid>
              <Grid item sm={6}>
                <TextField
                  {...register("contactNumber", { required: "Please enter a Contact Number" })}
                  fullWidth
                  onChange={(e) => {
                    setValue(e.target.value);
                  }}
                  label="Contact Number"
                  helperText={errors?.contactNumber?.message}
                  error={errors?.contactNumber}
                />
              </Grid>
              <Grid item sm={6}>
                <TextField
                  {...register("password", { required: "Please enter a password" })}
                  fullWidth
                  onChange={(e) => {
                    setValue(e.target.value);
                  }}
                  label="Pssword"
                  helperText={errors?.password?.message}
                  error={errors?.password}
                />
              </Grid>
              <Grid item sm={6}>
                <FormControl fullWidth>
                  <InputLabel>Gender</InputLabel>
                  <Select
                    label="Age"
                    value={gender}
                    {...register("gender", { required: "Gender is required" })}
                    onChange={handleChange}
                    sx={{ padding: "12px" }}
                    error={!!errors?.Gender}
                  >
                    <MenuItem value="male">male</MenuItem>
                    <MenuItem value="female">memale</MenuItem>
                  </Select>
                  {errors?.Gender && (
                    <FormHelperText sx={{ color: "red" }}>{errors?.Gender?.message}</FormHelperText>
                  )}
                </FormControl>
              </Grid>
              <Grid item sm={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    {...register("dob")}
                    label="DOB"
                    defaultValue={dayjs(watch("dob"))}
                    onChange={(e) => {
                      setValue("dob", e.$d);
                    }}
                    sx={{ width: "100%" }}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item sm={6}>
                <TextField
                  {...register("email", { required: "Please enter Email ID" })}
                  fullWidth
                  onChange={(e) => {
                    setValue("email", e.target.value);
                  }}
                  label="Email ID"
                  helperText={errors.email?.message}
                  error={errors?.email}
                />
              </Grid>
              <Grid item sm={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    {...register("joinDate")}
                    label="Join Date"
                    defaultValue={dayjs(watch("joinDate"))}
                    onChange={(e) => {
                      setValue("joinDate", e.$d);
                    }}
                    sx={{ width: "100%" }}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item sm={6}>
                <TextField
                  fullWidth
                  label="Experience"
                  {...register("experience", { required: "Please filed Experince" })}
                  error={errors?.experience}
                  helperText={errors.experience?.message}
                />
              </Grid>
              <Grid item sm={6}>
                <TextField
                  {...register("address", { required: "Please enter a Address" })}
                  fullWidth
                  type="text"
                  onChange={(e) => {
                    setValue(e.target.value);
                  }}
                  label="Address"
                  helperText={errors.address?.message}
                  error={errors.address}
                />
              </Grid>
              {/* <Grid item sm={6}>
                <TextField
                  fullWidth
                  type="file"
                  {...register("photo")}
                  error={!!errors.photo}
                  helperText={errors.photo?.message}
                  label="upload photo"
                />
              </Grid> */}
              <Grid item sm={12}>
                {fields.map((field, index) => (
                  <Box key={field.id}>
                    <TextField
                      type="text"
                      {...register(`qualification[${index}].name`)}
                      onChange={(e) => {
                        setValue(`qualification[${index}].name`, e.target.value);
                      }}
                    />

                    <Button type="button" onClick={() => remove(index)}>
                      Remove
                    </Button>
                  </Box>
                ))}

                <Button type="button" onClick={() => append({ name: "qualification" })}>
                  Add Field
                </Button>
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
