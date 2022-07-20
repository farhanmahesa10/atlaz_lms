import React from "react";

const InputSeach = () => {
  return (
    <div className="form-input">
      <div className="input-area h-40 bg-white md-w-432">
        <input
          type="text"
          className="w-full input-control radius-8 py-8 pl-16 "
          placeholder="Lesson plan name"
          name="search"
          maxLength="18"
        />
        <span className="py-8 pl-16 pr-2 h-p-100 d-flex align-items-center ">
            <button
              className="btn-primary font-xs"
              type="submit"
            >
              Search
            </button>
        </span>
      </div>
    </div>
  );
};

export default InputSeach;
