import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "./Card";

const CardList = props => {
  return (
    <Grid container>
      {props.cards && props.cards.map(card => <Card {...card} />)}
    </Grid>
  );
};

export default CardList;
