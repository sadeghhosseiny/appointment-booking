import React from "react";

function Input({ icon, name, type }) {
  return (
    <div className="w-full my-5 px-4">
      <p className="mb-2">{name}</p>
      <div className="flex">
        <span className="p-3 border-2 border-r-0 rounded-l-[4px]">{icon}</span>
        <input
          type={type}
          className="w-full px-2 border-2 outline-none rounded-r-[4px]"
        />
      </div>
    </div>
  );
}

export default Input;
