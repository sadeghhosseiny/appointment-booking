import React from "react";
import { useNavigate } from "react-router-dom";

function BriefForm() {
  const navigate = useNavigate();

  return (
    <div className="bg-white px-5 pt-5 pb-11 w-full rounded-sm">
      <div className="flex">
        <input
          className="w-full border rounded-sm px-4 outline-none"
          placeholder="Search Brief"
          type="text"
        />
        <button className="bg-blue-500 px-5 rounded-r-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
        <button
          onClick={() => navigate("/addbrief")}
          className="py-1 px-3 ml-4 whitespace-nowrap bg-blue-500 rounded-sm text-white"
        >
          +New Brief
        </button>
      </div>
    </div>
  );
}

export default BriefForm;
