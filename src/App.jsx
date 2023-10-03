import { useState } from "react";
import "./App.css";
import Symbol from "./components/Symbol";
import Clear from "./components/Clear";
import Calculate from "./components/Calculate";

function App() {
  const [expression, setExpression] = useState("");

  const readInput = (event) => {
    const num = event.target.value;
    const parsedNum = parseInt(num);
    console.log(typeof num, typeof parsedNum);
    setExpression((prev) => {
      return prev.toString() + (!isNaN(parsedNum) ? parsedNum : num);
    });
  };

  const clearAll = () => {
    setExpression("");
  };

  const backSpace = () => {
    setExpression((prev) => prev.slice(0, -1));
  };

  const calculate = () => {
    try {
      // const validSymbl = {
      //   "&times;": "*",
      //   "&ndash;": "-",
      //   "&divide;": "/",
      // };
      // const cleanExpression = expression.replace(
      //   /(&times;|&ndash;|&divide;)/g,
      //   (match) => validSymbl[match]
      // );
      // const result = eval(cleanExpression);

      const result = eval(expression).toString();
      setExpression(() => result);
    } catch (err) {
      clearAll();
      console.log(err);
    }
  };

  return (
    <div className="text-center mt-20 mx-auto px-5 py-5 w-fit rounded-md bg-black border-2">
      <input
        type="text"
        value={expression}
        readOnly
        className="px-4 py-6 mt-8 mx-1 text-xl outline-none rounded-md orbitron"
      />
      <div className="grid grid-cols-4 mt-6 mx-0 text-white font-medium">
        <Clear symbol="AC" clear={clearAll} />
        <Clear symbol="C" clear={backSpace} />
        <Symbol symbol="/" readInput={readInput} />
        <Symbol symbol={7} readInput={readInput} />
        <Symbol symbol={8} readInput={readInput} />
        <Symbol symbol={9} readInput={readInput} />
        <Symbol symbol="*" readInput={readInput} />
        <Symbol symbol={4} readInput={readInput} />
        <Symbol symbol={5} readInput={readInput} />
        <Symbol symbol={6} readInput={readInput} />
        <Symbol symbol="-" readInput={readInput} />
        <Symbol symbol={1} readInput={readInput} />
        <Symbol symbol={2} readInput={readInput} />
        <Symbol symbol={3} readInput={readInput} />
        <Symbol symbol="+" readInput={readInput} />
        <Symbol symbol={0} readInput={readInput} />
        <Symbol symbol={"."} readInput={readInput} />
        <Calculate calculate={calculate} />
      </div>
    </div>
  );
}

export default App;
