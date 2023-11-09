import { useState } from "react";
import "./App.css";
import Options from "./components/Options";
import Cards from "./components/Cards";
import { normalDifficulty } from "./assets/difficulty";

function App() {
  const [cards, setCards] = useState(normalDifficulty);
  const [previousClick, setPreviousClick] = useState();

  return (
    <div className="main-game">
      <h1>Memory Game!!!</h1>
      <Options
        cards={cards}
        setCards={setCards}
        setPreviousClick={setPreviousClick}
      />
      <section className="table-game">
        {cards.map((card, i) => (
          <Cards
            card={card}
            key={i}
            index={i}
            cards={cards}
            setCards={setCards}
            previousClick={previousClick}
            setPreviousClick={setPreviousClick}
          />
        ))}
      </section>
    </div>
  );
}

export default App;
