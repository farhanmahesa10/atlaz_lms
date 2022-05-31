import React from "react";
const AcademicCard = ({ bgImage, title, desc, className }) => {
  return (
    <div
      className={`h-162 w-full radius-8 cursor-pointer ${className}`}
      style={{
        backgroundImage: `url("${bgImage}")`,
        backgroundSize: "cover",
        backgroundPosition: "right",
      }}
    >
      <div className="h-full w-full d-flex align-items-end">
        <div className="p-16 bg-neutral-700 w-full radius-b-8">
          <h5 className="text-white">{title}</h5>
          <p className="mt-4  font-xs text-neutral-50">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default AcademicCard;
