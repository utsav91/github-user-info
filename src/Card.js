import React from "react";
import Avatar from "@material-ui/core/Avatar";

const Card = props => {
  return (
    <div style={{ margin: "1em" }}>
      <Avatar src={props.avatar_url} style={{ width: 60, height: 60 }} />
      <div>
        <div style={{ fontWeight: "bold" }}>{props.name}</div>
        <div>{props.blog}</div>
      </div>
    </div>
  );
};

export default Card;
