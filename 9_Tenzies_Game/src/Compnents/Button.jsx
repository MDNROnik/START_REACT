import { useState } from "react";

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
                key: tab_btn[key].value,
                state: true,
              });
            }

            // set up button color and set up next random numbers
            console.log(keyNumber.key);

            if (
              !item.state &&
              (tab_btn[key].value == keyNumber.key || keyNumber.state === false)
            ) {
              console.log(1111);
              
              setButton(
                tab_btn.map((index) =>
                  index.id === key + 1
                    ? {
                        ...index,
                        state: !index.state,
                        value: tab_btn[key].value,
                      }
                    : index
                )
              );
            } else {
              console.log(22222);
              setButton(
                tab_btn.map((index) =>
                  index.state === true
                    ? index
                    : { ...index, value: Math.floor(Math.random() * 10) + 1 }
                )
              );
            }
          }}
        >
          {tab_btn[key].value}
        </button>
      ))}
    </>
  );
};

export default Button;
