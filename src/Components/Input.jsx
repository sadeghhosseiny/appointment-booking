import React from "react";

function Input({ icon, name, type, label, id }) {
  return (
    <div className={`w-full ${name ? "my-5" : "my-2"} px-4`}>
      {name && <p className="mb-2">{name}</p>}
      <div className={`flex ${label && "items-center gap-1"}`}>
        {icon && (
          <span className="p-3 border-2 border-r-0 rounded-l-[4px]">
            {icon}
          </span>
        )}
        <input
          id={id}
          type={type}
          className={`${
            !label && "w-full"
          } px-2 border-2 outline-none rounded-r-[4px]`}
        />
        {label && <label for={id}>{label}</label>}
      </div>
    </div>
  );
}

export default Input;
