import { useState } from "react";

export const useForm = (initialValue = "") => {
  const [username, setUsername] = useState(initialValue);
  return {
    onChange: event => {
      console.log("event.target.username:", event);
      setUsername(event.target.value);
    },
    reset: () => setUsername(""),
    username
  };
};

export const useCards = (initialValue = []) => {
  const [cards, setCards] = useState(initialValue);
  return {
    addNewCard: cardInfo => setCards([...cards, cardInfo]),
    cards
  };
};
