import { useState } from "react";
import Confetti from "react-confetti";
import { useEffect, useRef } from "react";
const Button = () => {
  //button id and states
  const [tab_btn, setButton] = useState([
    { id: 1, state: false, value: Math.floor(Math.random() * 10) + 1 },
    { id: 2, state: false, value: Math.floor(Math.random() * 10) + 1 },
    { id: 3, state: false, value: Math.floor(Math.random() * 10) + 1 },
    { id: 4, state: false, value: Math.floor(Math.random() * 10) + 1 },
    { id: 5, state: false, value: Math.floor(Math.random() * 10) + 1 },
    { id: 6, state: false, value: Math.floor(Math.random() * 10) + 1 },
    { id: 7, state: false, value: Math.floor(Math.random() * 10) + 1 },
    { id: 8, state: false, value: Math.floor(Math.random() * 10) + 1 },
    { id: 9, state: false, value: Math.floor(Math.random() * 10) + 1 },
    { id: 10, state: false, value: Math.floor(Math.random() * 10) + 1 },
  ]);
  const [btn, setBtn] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  // one time number setup
  const [keyNumber, setKeyNumber] = useState({
    key: -1,
    state: false,
  });
  const buttonRef = useRef(null);

  useEffect(() => {
    console.log("use effect", gameOver);

    if (gameOver) {
      console.log("in");

      buttonRef.current.focus();
    }
  }, [gameOver]);

  const funciton_for_check = (key, item) => {
    //set up one time key value and can be set by in onCline function
    if (!keyNumber.state) {
      setKeyNumber({
        ...keyNumber,
        key: item.value,
        // key: tab_btn[key].value,
        state: true,
      });
    }

    // set up button color and set up next random numbers
    console.log(keyNumber.key, item.value);
    console.log(buttonRef, gameOver);

    if (
      !item.state &&
      (item.value == keyNumber.key || keyNumber.state === false)
    ) {
      setButton(
        tab_btn.map((index) =>
          index.id === key + 1
            ? {
                ...index,
                state: !index.state,
                value: item.value,
              }
            : index
        )
      );
      setBtn(btn + 1);
      if (btn === 9) {
        setGameOver(!gameOver);
      }
    }
  };

  return (
    <div className="container">
      {console.log(1111)}
      {btn === 10 && <Confetti />}
      <div className="container dice-container">
        {tab_btn.map((item, key) => (
          <button
            key={key}
            type="button"
            className="btn "
            style={{
              backgroundColor: item.state ? "green" : "white",
              color: item.state ? "white" : "black",
            }}
            onClick={() => {
              funciton_for_check(key, item);
            }}
          >
            {item.value}
          </button>
        ))}
      </div>
      <div className="roll-button">
        {btn < 10 ? (
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              setButton(
                tab_btn.map((index) =>
                  index.state === true
                    ? index
                    : { ...index, value: Math.floor(Math.random() * 10) + 1 }
                )
              );
            }}
          >
            ROLL
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-primary"
            ref={buttonRef}
            onClick={() => {
              setBtn(0);
              setKeyNumber({
                ...keyNumber,
                key: -1,
                state: false,
              });

              setButton(
                tab_btn.map((index, key) =>
                  key > 9
                    ? index
                    : {
                        ...index,
                        state: false,
                        value: Math.floor(Math.random() * 10) + 1,
                      }
                )
              );
              setGameOver(!gameOver);
            }}
          >
            NEW GAME
          </button>
        )}
      </div>
    </div>
  );
};

export default Button;
