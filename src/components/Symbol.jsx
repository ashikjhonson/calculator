import React from "react";

const Operator = (props) => {
  const { symbol, readInput } = props;
  const buttonColor =
    symbol === "." || typeof symbol === "number"
      ? "bg-gray-800 hover:shadow-gray-600"
      : "bg-cyan-800 hover:shadow-gray-900";

  return (
    <button
      className={`rounded-md shadow-sm shadow-white text-xl p-2 m-1 ${buttonColor}`}
      onClick={readInput}
      value={symbol}
    >
      {symbol}
    </button>
  );
};

export default Operator;
