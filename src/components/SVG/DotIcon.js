import React from "react";

const DotIcon = (props) => {
  if (props.status == "success") {
    return (
      <div>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 1C3.24 1 1 3.24 1 6C1 8.76 3.24 11 6 11C8.76 11 11 8.76 11 6C11 3.24 8.76 1 6 1ZM6 10C3.79 10 2 8.21 2 6C2 3.79 3.79 2 6 2C8.21 2 10 3.79 10 6C10 8.21 8.21 10 6 10Z"
            fill="#8ECFEE"
          />
          <path
            d="M6 8.5C7.38071 8.5 8.5 7.38071 8.5 6C8.5 4.61929 7.38071 3.5 6 3.5C4.61929 3.5 3.5 4.61929 3.5 6C3.5 7.38071 4.61929 8.5 6 8.5Z"
            fill="#8ECFEE"
          />
        </svg>
        <span className="text-dark">{props.children}</span>
      </div>
    );
  }

  if (props.status == "danger") {
    return (
      <div>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 1C3.24 1 1 3.24 1 6C1 8.76 3.24 11 6 11C8.76 11 11 8.76 11 6C11 3.24 8.76 1 6 1ZM6 10C3.79 10 2 8.21 2 6C2 3.79 3.79 2 6 2C8.21 2 10 3.79 10 6C10 8.21 8.21 10 6 10Z"
            fill="#DC3545"
          />
        </svg>
        <span className="text-danger">{props.children}</span>
      </div>
    );
  }

  return (
    <div>
      <svg
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 0C2.24 0 0 2.24 0 5C0 7.76 2.24 10 5 10C7.76 10 10 7.76 10 5C10 2.24 7.76 0 5 0ZM5 9C2.79 9 1 7.21 1 5C1 2.79 2.79 1 5 1C7.21 1 9 2.79 9 5C9 7.21 7.21 9 5 9Z"
          fill="#556070"
        />
      </svg>
      {props.children}
    </div>
  );
};

export default DotIcon;
