import { useState, useEffect } from "react";
import {
  easyDifficulty,
  normalDifficulty,
  hardDifficulty,
} from "../assets/difficulty";
import "./Options.css";

const Options = ({ cards, setCards, setPreviousClick }) => {
  const [difficulty, setDifficulty] = useState("normal");

  //starting a game
  const startGame = () => {
    const newCards = cards.map(
      (card) => (card.value = true ? (card.value = false) : card)
    );
    setCards(newCards);
    shuffle(cards);
    setPreviousClick(undefined);
  };

  //shuffling cards
  const shuffle = (array) => {
    const newCards = [...array];
    for (let i = newCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newCards[i], newCards[j]] = [newCards[j], newCards[i]];
    }
    setCards(newCards);
  };

  //shuffling cards after changing a difficulty
  useEffect(() => {
    shuffle(cards);
  }, [difficulty]);

  //changing difficulty of the game
  const handleDifficulty = (e) => {
    if (e.target.value === "easy") {
      setCards(easyDifficulty);
      setDifficulty("easy");
    }

    if (e.target.value === "normal") {
      setCards(normalDifficulty);
      setDifficulty("normal");
    }

    if (e.target.value === "hard") {
      setCards(hardDifficulty);
      setDifficulty("hard");
    }
  };

  return (
    <div className="table-title">
      <button className="button-game" onClick={() => startGame()}>
        {cards.some((card) => card.value === true) ? "Re-Start" : "Start"}
      </button>
      <select
        className="button-game"
        defaultValue="normal"
        onChange={handleDifficulty}
      >
        <option value="easy">easy</option>
        <option value="normal">normal</option>
        <option value="hard">hard</option>
      </select>
    </div>
  );
};

export default Options;
