import React, { useMemo } from "react";
import "./FizzBuzz.css";

const fizzBuzzGenerate = ([from, to]) => {
  const wordsList = [];

  if ((!from && from !== 0) || (!to && to !== 0)) return wordsList;

  for (let i = from; i <= to; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      wordsList.push("RobotICT");
      continue;
    }

    if (i % 3 === 0) {
      wordsList.push("Robot");
      continue;
    }

    if (i % 5 === 0) {
      wordsList.push("ICT");
      continue;
    }

    wordsList.push(i);
  }

  return wordsList;
}

const FizzBuzz = ({ range }) => {
  const [from, to] = range;
  const wordsList = useMemo(() => fizzBuzzGenerate(range), [from, to]);

  return (
    <div className="fizz-buzz-wrap">
      {wordsList.map((word, i) => (
        <div className="word-wrap" key={i}>
          <span className="number">{`[${(+from + i)}]`}</span>
          <span className="word">{word}</span>
        </div>
      ))}
    </div>
  );
}

export default FizzBuzz;