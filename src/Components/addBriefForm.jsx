import React from "react";
import { useNavigate } from "react-router-dom";
import Input from "./Input";

function AddBriefForm() {
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => navigate("/brief")}
        className="bg-blue-500 text-white py-2 px-3 mb-4 rounded-sm flex items-center justify-center"
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </span>
        Back to Brief
      </button>
      <div className="bg-white rounded-sm w-full px-14 pt-16 pb-10">
        <h2 className="text-lg mb-5">CONTACT INFO</h2>
        <div className="flex mb-5">
          <input
            className="border flex-grow rounded-sm outline-none px-3"
            type="text"
            placeholder="Find Client"
          />
          <button className="px-4 py-2 bg-blue-500 text-white rounded-r-sm">
            Search
          </button>
          <button className="flex items-center justify-center gap-1 px-3 py-2 ml-2 bg-blue-500 text-white">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="8.5" cy="7" r="4"></circle>
                <line x1="20" y1="8" x2="20" y2="14"></line>
                <line x1="23" y1="11" x2="17" y2="11"></line>
              </svg>
            </span>
            Add Contacts
          </button>
        </div>
        <Input
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#3b82f6"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3" />
              <circle cx="12" cy="10" r="3" />
              <circle cx="12" cy="12" r="10" />
            </svg>
          }
          name="Contact Name"
          type="text"
        />
        <Input
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#3b82f6"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
              <line x1="4" y1="22" x2="4" y2="15"></line>
            </svg>
          }
          name="Phone Number"
          type="tel"
        />
        <Input
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#3b82f6"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          }
          name="Email Address"
          type="email"
        />
        <div className="w-full my-5 px-4">
          <p className="mb-2">Mailing Address</p>
          <textarea
            className="p-4 max-w-full resize w-full border-2 rounded-md"
            name="address"
            rows="4"
            cols="10"
          ></textarea>
        </div>
        <h2 className="text-lg mb-5">PROJECT OVERVIEW</h2>
        <div>
          <p className="my-2 text-sm">
            PROJECT TITLE <span className="text-red-500">*</span>
          </p>
          <input
            type="text"
            className="px-2 w-full rounded-sm bg-gray-200 border outline-none"
          />
          <p className="my-2">address</p>
          <textarea
            className="w-full max-w-full resize border outline-none rounded-sm p-4"
            id=""
            cols="10"
            rows="4"
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default AddBriefForm;
