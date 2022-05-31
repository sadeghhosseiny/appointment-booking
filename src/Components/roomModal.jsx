import React from "react";

function RoomModal({ setOpen, open }) {
  const bedRooms = [
    "MASTER BEDRROM",
    "ELDERY BEDROOM",
    "ADULT BEDROOM",
    "KIDS BEDROOMS",
    "MAIDS BEDROOMS",
    "LIVING ROOM",
    "OUTDOR/BALCONY",
  ];

  const styles = [
    "minimalist",
    "contemporary",
    "victoria",
    "urban",
    "modern",
    "luxury",
  ];

  const primaryColor = ["black", "blue", "red", "white", "yellow", "green"];

  const additionalFeatures = [
    "STUDY/LIBRARY",
    "GAME ROOM",
    "LAUNDRY ROOM",
    "KIDS ROOM",
    "KARAOKE",
    "BAR",
    "MUSIC",
  ];

  return (
    <>
      <div className="z-20 lg:p-0 p-6 fixed inset-0 bg-black/50 w-full h-full flex justify-center items-start overflow-y-auto">
        <div className="lg:w-3/4 w-full bg-white rounded shadow-lg p-4 my-10">
          <div className="flex justify-between items-center">
            <h2 className="font-bold">EDIT ROOM DETAILS</h2>
            <button onClick={() => setOpen(!open)}>
              <svg
                className="w-4 h-4 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <p className="my-2 text-sm">
            SELECT ROOM<span className="text-red-500">*</span>
          </p>
          <form className="w-full mt-6 flex justify-center items-center flex-col space-y-3">
            <div className="grid grid-cols-3 w-full gap-3">
              {bedRooms.map((bedRoom, index) => (
                <div
                  className="border-2 px-2 py-1 text-left rounded flex items-center gap-1"
                  key={index}
                >
                  <input type="radio" />
                  {bedRoom}
                </div>
              ))}
            </div>
            <div className="w-full">
              <h2 className="pt-10 font-bold">STYLE</h2>
              <p className="my-1 text-sm">
                CHOOSE STYLE<span className="text-red-500">*</span>
              </p>
            </div>
            <div className="grid grid-cols-3 w-full gap-2">
              {styles.map((style, index) => (
                <div className="flex items-center gap-3" key={index}>
                  <input type="radio" />
                  {style}
                </div>
              ))}
            </div>
            <div className="w-full">
              <h2 className="font-bold pt-8">PRIMARY COLOR</h2>
              <p className="my-1 text-sm">
                CHOOSE PRIMARY COLOR<span className="text-red-500">*</span>
              </p>
            </div>
            <div className="grid grid-cols-3 w-full gap-2">
              {primaryColor.map((color, index) => (
                <div className="flex items-center gap-3" key={index}>
                  <input type="radio" />
                  {color}
                </div>
              ))}
            </div>
            <div className="w-full">
              <h2 className="font-bold pt-10">ADDITIONAL FEATURES</h2>
              <p className="my-1 text-sm">
                SELECT ADDITIONAL FEATURES
                <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="grid grid-cols-3 w-full gap-2">
              {additionalFeatures.map((additionalFeature, index) => (
                <div className="flex items-center gap-3" key={index}>
                  <input type="radio" />
                  {additionalFeature}
                </div>
              ))}
            </div>
          </form>
          <div className="flex justify-center items-center w-full space-x-4 mt-10">
            <button className="px-8 py-2 text-center text-sm bg-[#288CFF] text-white font-medium rounded shadow">
              Confirm Booking
            </button>
            <button className="px-8 py-2 text-center text-sm bg-[#288CFF]/30 text-gray-900 font-medium rounded shadow">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default RoomModal;
