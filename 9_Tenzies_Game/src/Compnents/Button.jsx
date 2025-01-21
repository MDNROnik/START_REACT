import { useState } from "react";

const Button = () => {
  const [tabbtn, setButton] = useState([
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
  const [keyNumber, setKeyNumber] = useState({
    key: -1,
    state: false,
  });
  let v = Math.floor(Math.random() * 10) + 1;

  return (
    <>
      {tabbtn.map((item, key) => (
        <button
          key={key}
          type="button"
          className="btn text-white"
          style={{ backgroundColor: item.state ? "blue" : "green" }}
          onClick={() => {
            //console.log(randomNumber[key]);
            if (!keyNumber.state) {
              console.log(randomNumber[key]);
              setKeyNumber({
                ...keyNumber,
                key: randomNumber[key],
                state: true,
              });
            }
            console.log(!item.state , randomNumber[key] , keyNumber.key);
            
            if (!item.state && (randomNumber[key] == keyNumber.state || keyNumber.state===false )) {
              setButton(
                tabbtn.map((index) =>
                  index.id === key + 1
                    ? { ...index, state: !index.state }
                    : index
                )
              );
            } else {
              setRandomNumber(
                randomNumber.map((index) => Math.floor(Math.random() * 10) + 1)
              );
            }

            // item.state
            //   ? setRandomNumber(
            //       randomNumber.map(
            //         (index) => Math.floor(Math.random() * 10) + 1
            //       )
            //     )
            //   : setButton(
            //       tabbtn.map((index) =>
            //         index.id === key + 1
            //           ? { ...index, state: !index.state }
            //           : index
            //       )
            //     );
          }}
        >
          {tabbtn[key].state ? keyNumber.key : randomNumber[key]}
        </button>
      ))}
    </>
  );
};

export default Button;
