import React from "react";
import axios from "axios";
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
      <input
        type="text"
        value={username}
        onChange={onChange}
        placeholder={`Github username`}
        required
      />
      <button type="submit">Add Card</button>
    </form>
  );
};

export default Form;
