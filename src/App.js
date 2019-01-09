import React from "react";
import Form from "./Form";
import CardList from "./CardList";
import { useCards } from "./utils";

const App = () => {
  const { cards, addNewCard } = useCards([]);
  return (
    <div className="App">
      <Form onSubmit={addNewCard} />
      <CardList cards={cards} />
    </div>
  );
};

export default App;
