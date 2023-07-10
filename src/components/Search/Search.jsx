import { Box, Grid, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

function Search() {
  const { register, setValue } = useForm();

  return (
    <Box>
      <Grid item xs={12} sm={12}>
        <TextField
          {...register("search")}
          fullWidth
          type="text"
          onChange={(e) => {
            setValue(e.target.value);
          }}
          label="Search"
        />
      </Grid>
    </Box>
  );
}

export default Search;
