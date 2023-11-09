import cardback from "../assets/card_back.jpg";
import "./Cards.css";

const Cards = ({
  index,
  cards,
  card,
  setCards,
  setPreviousClick,
  previousClick,
}) => {
  const handleCard = (i) => {
    //clicking and revealing a card
    if (cards[i].value === true) return;
    const clickedNumber = cards[i];
    const newCards = [...cards];
    newCards[i].value = true;
    setCards(newCards);

    // if exist a previous card clicked
    if (previousClick !== undefined) {
      const previousClickNumber = cards[previousClick];
      // previous click is different to the second one
      if (previousClickNumber.img !== clickedNumber.img) {
        setTimeout(() => {
          newCards[previousClick].value = false;
          newCards[i].value = false;
          setCards([...newCards]);
        }, 1000);
      } else {
        const haswon = cards.flat().every((isReaveal) => isReaveal.value);
        setTimeout(() => {
          if (haswon) {
            alert("congratulations you won!!");
          }
        }, 500);
      }
      setPreviousClick(undefined);
    } else {
      //if doesnt exist a previous card, we save the position of the actual card
      setPreviousClick(i);
    }
  };

  return (
    <div className="card">
      <img
        src={card.value ? card.img : cardback}
        className={card.value ? "front" : "back"}
        alt="img"
        onClick={() => handleCard(index)}
      />
    </div>
  );
};

export default Cards;
