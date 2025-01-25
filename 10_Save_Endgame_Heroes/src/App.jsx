import { useState, useEffect } from "react";
import { generate } from "random-words";
import "./App.css";

function App() {
  const [randomWord, setRandomWord] = useState("");
  const [secretWord, setSecretWord] = useState([]);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [life, setLife] = useState(10);
  const [foundWords, setFoundWords] = useState(0);
  const [heroes, setHeroes] = useState([
    "Iron Man",
    "Captain America",
    "Thor",
    "Hulk",
    "Black Widow",
    "Hawkeye",
    "Black Panther",
    "Doctor Strange",
    "Spider-Man",
    "The Scarlet Witch",
  ]);
  const allTimeHeroes = [
    "Iron Man",
    "Captain America",
    "Thor",
    "Hulk",
    "Black Widow",
    "Hawkeye",
    "Black Panther",
    "Doctor Strange",
    "Spider-Man",
    "The Scarlet Witch",
  ];

  useEffect(() => {
    setRandomWord(generate({ maxLength: 10 }));
    setCount2(count2 + 1);
    setHeroes(allTimeHeroes);
    setFoundWords(0);
  }, [count1]);

  useEffect(() => {
    setSecretWord(
      randomWord.split("").map((letter, key) => {
        return { letter: letter.toUpperCase(), guessed: false };
      })
    );
  }, [count2]);

  function fun() {
    setCount1(count1 + 1);
    setLife(10);
  }
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  function fun2() {
    return alphabet.split("").map((letter, key) => {
      return (
        <button
          key={key}
          onClick={() => {
            fun3(letter);
          }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-1"
        >
          {letter}
        </button>
      );
    });
  }
  function fun5() {
    return alphabet.split("").map((letter, key) => {
      return (
        <button
          key={key}
          className="bg-blue-300 pointer-events-none hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          {letter}
        </button>
      );
    });
  }

  function fun3(letter) {
    let found = false;
    const newValue = secretWord.map((item) => {
      if (letter === item.letter && found == false && item.guessed == false) {
        found = true;
        return { ...item, guessed: true };
      } else {
        return item;
      }
    });
    setSecretWord(newValue);

    if (!found) {
      setLife(life - 1);
      const newHeroes = heroes.filter((hero, key) => {
        return key !== 0;
      });
      setHeroes(newHeroes);
    } else {
      setFoundWords(foundWords + 1);
    }
  }

  function fun4() {
    return heroes.map((hero, key) => {
      return (
        <span
          key={key}
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        >
          {hero}
        </span>
      );
    });
  }

  return (
    <>
      <h1>{life}</h1>
      <h1 className="bg-blue-500">{randomWord}</h1>

      <main>{fun4()}</main>
      {foundWords === randomWord.length ? (
        <h1>you win</h1>
      ) : life <= 0 ? (
        <h1>you lose</h1>
      ) : (
        <h1>keep playing</h1>
      )}
      {secretWord.map((letter, key) => {
        if (letter.guessed) {
          return (
            <span
              key={key}
              className="inline-block bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              {letter.letter}
            </span>
          );
        } else {
          return (
            <span className="inline-block bg-gray-200 px-3 py-3 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {}
            </span>
          );
        }
      })}
      <br />
      <button onClick={fun}>new</button>

      <br />
      {life > 0 && foundWords < randomWord.length ? (
        <main>{fun2()}</main>
      ) : (
        <main>{fun5()}</main>
      )}
    </>
  );
}

export default App;
