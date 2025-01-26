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
          className="bg-amber-500 hover:bg-amber-700 text-black font-bold py-2 px-4 rounded-sm m-1 "
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
          className="bg-amber-500 hover:bg-amber-700 text-black pointer-events-none  font-bold py-2 px-4 rounded-sm m-1"
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
          className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        >
          {hero}
        </span>
      );
    });
  }

  return (
    <div className="bg-neutral-950 h-screen p-10">
      <div className=" ">
        {/* <h1>{life}</h1>
        <h1 className="text-white">{randomWord}</h1> */}

        <header className="text-center  text-white p-4">
          <h1 className="text-xl"> Save EndGame Heores</h1>
          <p className="text-lg">
            Guess the word within 10 attempts to keep the heroes from loss
          </p>
        </header>

        {foundWords === randomWord.length ? (
          <section className="text-center bg-green-600 text-white flex flex-col items-center justify-center p-4 rounded-sm">
            <h2>You Win!</h2>
            <p>Well Done!</p>
          </section>
        ) : life <= 0 ? (
          
          <section className="text-center bg-red-600 text-white flex flex-col items-center justify-center p-4 rounded-sm">
            <h2>You Loss!</h2>
            <p>The Word Was "{randomWord}"</p>
            <p>Try Again!</p>
          </section>
        ) : (
          <section className="content-center bg-white flex flex-col items-center justify-center p-4 rounded-sm">
            <h2 className="text-xl">Keep Playing </h2>
            <p>You Can Do IT</p>
          </section>
        )}
        <main className="p-4">{fun4()}</main>
        <br />
        <section className="content-center border-b-green-500 flex items-center justify-center ">
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
                <span
                  key={key}
                  className="inline-block bg-gray-200 px-3 py-3 text-sm font-semibold text-black-700 mr-2 mb-2"
                >
                  {}
                </span>
              );
            }
          })}
        </section>

        <br />

        <br />

        {life > 0 && foundWords < randomWord.length ? (
          <section className="flex flex-wrap justify-center items-center">
            {fun2()}
          </section>
        ) : (
          <section className="flex flex-wrap justify-center items-center">
            
            {fun5()}
          </section>
        )}
        <br />
        <div className="flex flex-wrap justify-center items-center">
          <button
            className="bg-transparent hover:bg-sky-500 text-white font-semibold hover:text-white py-2 px-4 border border-sky-500 hover:border-transparent rounded"
            onClick={fun}
          >
            new
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
