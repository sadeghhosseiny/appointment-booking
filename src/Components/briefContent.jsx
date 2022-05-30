import React from "react";

function BriefContent() {
  return (
    <div className="mt-10 grid grid-cols-3 gap-5">
      <div className="bg-white rounded-[4px] p-4">
        <div className="flex items-center justify-between mb-2">
          <h5 className="font-bold text-blue-500">Test</h5>
          <button className="hover:bg-gray-300 transition duration-200 rounded-full p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="1"></circle>
              <circle cx="19" cy="12" r="1"></circle>
              <circle cx="5" cy="12" r="1"></circle>
            </svg>
          </button>
        </div>
        <div className="flex items-center mt-2">
          <p className="font-bold">Client Name</p>
          <p>: Blessing</p>
        </div>
        <div className="flex items-center mt-2">
          <p className="font-bold">Brief ID</p>
          <p className="font-bold text-blue-500">: BRF10005259</p>
        </div>
        <div className="flex items-center mt-2">
          <p className="font-bold">Status</p>
          <p>: Sent to Client</p>
        </div>
      </div>
      <div className="bg-white rounded-[4px] p-4">
        <div className="flex items-center justify-between mb-2">
          <h5 className="font-bold text-blue-500">KLCC Condo Jan'22</h5>
          <button className="hover:bg-gray-300 transition duration-200 rounded-full p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="1"></circle>
              <circle cx="19" cy="12" r="1"></circle>
              <circle cx="5" cy="12" r="1"></circle>
            </svg>
          </button>
        </div>
        <div className="flex items-center mt-2">
          <p className="font-bold">Client Name</p>
          <p>: Jennifer Chan</p>
        </div>
        <div className="flex items-center mt-2">
          <p className="font-bold">Brief ID</p>
          <p className="font-bold text-blue-500">: BRF10002324</p>
        </div>
        <div className="flex items-center mt-2">
          <p className="font-bold">Status</p>
          <p>: Sent to Client</p>
        </div>
      </div>
    </div>
  );
}

export default BriefContent;
