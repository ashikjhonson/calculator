import React from "react";

const Calculate = ({ calculate }) => {
  return (
    <button
      className="rounded-md shadow-sm shadow-white text-xl p-2 m-1 col-span-2 bg-blue-700 hover:bg-slate-900 hover:shadow-green-700"
      onClick={calculate}
    >
      =
    </button>
  );
};

export default Calculate;
