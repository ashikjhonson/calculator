import React from "react";

const Clear = (props) => {
  const { symbol, clear } = props;
  const buttonColor =
    symbol == "AC"
      ? "col-span-2 bg-red-600 hover:shadow-red-600"
      : "bg-blue-700 hover:shadow-blue-500";
  return (
    <button
      className={`rounded-md shadow-sm shadow-white text-xl p-2 m-1 ${buttonColor}`}
      onClick={clear}
    >
      {symbol}
    </button>
  );
};

export default Clear;
