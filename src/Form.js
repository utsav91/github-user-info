import React from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { useForm } from "./utils";

const Form = props => {
  const { reset, onChange, username } = useForm([]);
  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        axios.get(`https://api.github.com/users/${username}`).then(resp => {
          props.onSubmit(resp.data);
          reset("");
        });
      }}
    >
      <Grid
        container
        spacing={16}
        justify="center"
        alignItems="center"
        direction="column"
      >
        <Grid item>
          <TextField
            type="text"
            value={username}
            onChange={onChange}
            placeholder={`Github username`}
            margin="normal"
            variant="outlined"
            required
          />
        </Grid>
        <Grid item>
          <Button type="submit" color="primary" variant="contained">
            Add Card
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default Form;
