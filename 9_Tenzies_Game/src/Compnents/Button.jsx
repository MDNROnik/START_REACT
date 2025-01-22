import { useState } from "react";

const Button = () => {
  //button id and states
  const [tab_btn, setButton] = useState([
    { id: 1, state: false },
    { id: 2, state: false },
    { id: 3, state: false },
    { id: 4, state: false },
    { id: 5, state: false },
    { id: 6, state: false },
    { id: 7, state: false },
    { id: 8, state: false },
    { id: 9, state: false },
    { id: 10, state: false },
  ]);
  // set random number for all buttons
  const [randomNumber, setRandomNumber] = useState([
    Math.floor(Math.random() * 10) + 1,
    Math.floor(Math.random() * 10) + 1,
    Math.floor(Math.random() * 10) + 1,
    Math.floor(Math.random() * 10) + 1,
    Math.floor(Math.random() * 10) + 1,
    Math.floor(Math.random() * 10) + 1,
    Math.floor(Math.random() * 10) + 1,
    Math.floor(Math.random() * 10) + 1,
    Math.floor(Math.random() * 10) + 1,
    Math.floor(Math.random() * 10) + 1,
  ]);
  // one time number setup
  const [keyNumber, setKeyNumber] = useState({
    key: -1,
    state: false,
  });

  return (
    <>
      {tab_btn.map((item, key) => (
        <button
          key={key}
          type="button"
          className="btn text-white"
          style={{ backgroundColor: item.state ? "blue" : "green" }}
          onClick={() => {
            //set up one time key value
            if (!keyNumber.state) {
              setKeyNumber({
                ...keyNumber,
                key: randomNumber[key],
                state: true,
              });
            }

            // set up button color and set up next random numbers
            console.log(keyNumber.key);
            
            if (
              !item.state &&
              (randomNumber[key] == keyNumber.key || keyNumber.state === false)
            ) {
              setButton(
                tab_btn.map((index) =>
                  index.id === key + 1
                    ? { ...index, state: !index.state }
                    : index
                )
              );
            } else {
              setRandomNumber(
                randomNumber.map(() => Math.floor(Math.random() * 10) + 1)
              );
            }
          }}
        >
          {tab_btn[key].state ? keyNumber.key : randomNumber[key]}
        </button>
      ))}
    </>
  );
};

export default Button;
