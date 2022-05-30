import React from "react";
import BriefContent from "../../Components/briefContent";
import BriefForm from "../../Components/briefForm";

function Briefs() {
  return (
    <div className="w-full lg:p-10 p-2">
      <BriefForm />
      <BriefContent />
    </div>
  );
}

export default Briefs;
