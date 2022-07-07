import React from "react";

const InputSeach = () => {
  return (
    <div className="form-input">
      <div className="input-area h-36 md-h-44 h-40 bg-white  ">
        <input
          type="text"
          className="w-full input-control radius-8 py-8 pl-16 "
          placeholder="Lesson plan name"
          name="search"
          maxLength="18"
        />
        <span className=" pl-16 py-4 h-p-100 d-flex align-items-center ">
          <div className="py-4 pr-2">
            <button
              className="btn-primary font-xs md-font-normal"
              type="submit"
            >
              Search
            </button>
          </div>
        </span>
      </div>
    </div>
  );
};

export default InputSeach;
