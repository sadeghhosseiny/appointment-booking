import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "./Input";
import RoomModal from "./roomModal";

function AddBriefForm() {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const labelsOfCheckBoxes = [
    "Materials, Workmanship and Testing",
    "Contract Administration",
    "Condition of Contracts",
    "Site Organization and Management",
    "Construction",
    "Safety Requirement",
    "Regulations and Restructure",
    "Maintenance and Protection",
    "Others",
  ];

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
        <h2 className="font-bold mb-5">CONTACT INFO</h2>
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
          <div className="flex">
            <span className="border-2 border-r-0 rounded-l-md flex items-center px-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#3b82f6"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="10" r="3" />
                <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
              </svg>
            </span>
            <textarea
              className="p-4 max-w-full resize w-full border-2 rounded-r-md outline-none"
              name="address"
              rows="3"
              cols="10"
            ></textarea>
          </div>
        </div>
        <h2 className="font-bold mb-5">PROJECT OVERVIEW</h2>
        <div>
          <p className="my-2 text-sm">
            PROJECT TITLE <span className="text-red-500">*</span>
          </p>
          <input
            type="text"
            className="px-2 w-full rounded-sm bg-gray-200 border outline-none mb-2"
          />
          <p className="my-2">
            LOCATION(provide property address and specific floors(s) / area(s)
            if aplicable)<span className="text-red-500">*</span>
          </p>
          <textarea
            className="w-full max-w-full resize border outline-none rounded-sm px-4 py-2 mb-3"
            id=""
            cols="10"
            rows="3"
            placeholder="Enter Property Address"
          ></textarea>
          <h2 className="font-bold">ROOMS</h2>
          <p className="my-2 text-sm">
            NUMBER OF ROOM(S)<span className="text-red-500">*</span>
          </p>
          <input
            type="number"
            className="w-full border-2 px-2 outline-none rounded-[4px]"
            min={0}
          />
          <div className="grid grid-cols-3 mt-3 gap-3">
            <div
              onClick={() => setOpen(!open)}
              className="border-2 rounded-md px-7 py-3 cursor-pointer"
            >
              <p className="text-blue-500">Master BedRoom +</p>
            </div>
            <div
              onClick={() => setOpen(!open)}
              className="border-2 rounded-md px-7 py-3 cursor-pointer"
            >
              <p className="text-blue-500">Living Room +</p>
            </div>
            <div
              onClick={() => setOpen(!open)}
              className="border-2 rounded-md px-7 py-3 cursor-pointer"
            >
              <p className="text-blue-500">gym Room +</p>
            </div>
            <div
              onClick={() => setOpen(!open)}
              className="border-2 rounded-md px-7 py-3 cursor-pointer"
            >
              <p className="text-blue-500">Comman Area +</p>
            </div>
          </div>
          <div className="mt-6">
            <h2 className="font-bold">PRELIMINARIES</h2>
            <div className="flex flex-wrap">
              {labelsOfCheckBoxes.map((label, i) => (
                <div key={i}>
                  <Input type="checkbox" label={label} id={label} />
                </div>
              ))}
            </div>
          </div>
          <h2 className="font-bold mt-4">ESTIMATED BUDGET</h2>
          <p className="my-2 text-sm">
            What is your estimated budget for this project ?
          </p>
          <input
            type="text"
            className="w-full border-2 px-2 outline-none rounded-[4px]"
          />
          <h2 className="font-bold mt-4">REMARKS</h2>
          <p className="my-2 text-sm">
            include any additional critical information
          </p>
          <textarea
            type="text"
            className="resize w-full border-2 px-2 outline-none rounded-[4px]"
            cols="10"
            rows="3"
          ></textarea>
          <div className="my-2">
            <h2 className="font-bold my-2">UPLOAD EXTRA FILES</h2>
            <div className="border-2 p-5 max-w-[180px] border-blue-500 border-dashed">
              <span className="text-2xl text-blue-500 flex justify-center items-center">
                +
              </span>
            </div>
          </div>
          <button className="text-white bg-blue-500 rounded-sm border-0 outline-none mt-3 px-4 py-2">
            Submit
          </button>
        </div>
        {open && <RoomModal setOpen={setOpen} open={open} />}
      </div>
    </div>
  );
}

export default AddBriefForm;
