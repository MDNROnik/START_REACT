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
  const [btn, setBtn] = useState(0);

  // one time number setup
  const [keyNumber, setKeyNumber] = useState({
    key: -1,
    state: false,
  });

  return (
    <div className="container ">
      <div className="container dice-container">
        {tab_btn.map((item, key) => (
          <button
            key={key}
            type="button"
            className="btn "
            style={{ backgroundColor: item.state ? "green" : "white", color: item.state ? "white" : "black"  }}

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
              console.log(keyNumber.key, item.value);

              if (
                !item.state &&
                (tab_btn[key].value == keyNumber.key ||
                  keyNumber.state === false)
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
                setBtn(btn + 1);
              }
            }}
          >
            {tab_btn[key].value}
          </button>
        ))}
      </div>
      <div className="container roll-button">
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
              onClick={() => {
                setBtn(0);
                setKeyNumber({
                  ...keyNumber,
                  key: tab_btn[0].value - (tab_btn[0].value + 1),
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
              }}
            >
              NEW
            </button>
          )}
        </div>
    </div>
  );
};

export default Button;
