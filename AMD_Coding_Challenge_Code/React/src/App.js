import React, { useState } from "react";
import "./App.css";
export default function App() {
  const [word, setWord] = useState("");
  const [isArrange, setIsArrange] = useState(false);
  const [list, setList] = useState([]);

  /*   this function arranges the sorted list */
  const arrangeSortedList = (words) => {
    const n = words.length;

    let numRows = 0;
    if (n % 4 === 0) numRows = n / 4;
    else numRows = parseInt(n / 4) + 1;

    let currIndex = 0;
    let arrangedList = new Array(n);
    let r = 0;
    while (currIndex < n) {
      let i = 0;
      for (i; i < numRows; i++) {
        if (r + 4 * i >= n) {
          break;
        }
        arrangedList[r + 4 * i] = words[currIndex + i];
      }
      currIndex += i;
      r += 1;
    }

    return arrangedList;
  };

  /*  this function splits the input string and sorts the word in ascending order alphabetically */

  const arrange = () => {
    if (word.length === 0) return;

    const inputList = word
      .split(" ")
      .map((word) => word.toLowerCase())
      .sort()
      .map((word) => word.charAt(0).toUpperCase() + word.substring(1));

    setList(
      arrangeSortedList(
        inputList.filter((word, i) => inputList.indexOf(word) === i)
      )
    );
    setIsArrange(true);
  };

  /*   to enable enter key press */

  const tabEnter = (e) => {
    if (e.key === "Enter") {
      arrange();
    }
  };

  /* to reset the list */
  const handleReset = () => {
    setWord("");
    setList([]);
    setIsArrange(false);
  };

  /* remove the particular word */
  const remove = (word) => {
    let newList = list.filter((ele) => ele !== word);
    newList = newList.sort();

    if (list.length === 0) {
      handleReset();
    } else setList(arrangeSortedList(newList));
  };

  return (
    <div className="mainContainer">
      <input
        type="text"
        name="word"
        value={word}
        onChange={(e) => setWord(e.target.value)}
        onKeyDown={tabEnter}
        className="inputField"
      />
      <div className="buttonContainer">
        {isArrange ? (
          <button onClick={handleReset}>Reset</button>
        ) : (
          <button onClick={arrange}>Arrange</button>
        )}
      </div>

      <div className="container">
        {list.map((element, i) => {
          return (
            <div key={i} className="buttons">
              <button onClick={(e) => remove(element)} className="button">
                {element}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
