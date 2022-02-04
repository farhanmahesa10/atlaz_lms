import React, { useEffect, useState } from "react";

const ProgressComponent = (props) => {
  const [progressBar, setProgressBar] = useState([]);
  useEffect(() => {
    const data = [];
    for (let i = 1; i <= props.totalProgress; i++) {
      if (i < props.activeProgress) {
        data.push(checkedRound(Math.random()));
        data.push(checkedLine(Math.random()));
      }
      if (i == props.activeProgress) {
        data.push(activeRound(Math.random()));
        if (i != props.totalProgress) {
          data.push(progressLine(Math.random()));
        }
      }
      if (i > props.activeProgress && i > props.activeProgress) {
        data.push(inactiveRound(Math.random()));
        if (i != props.totalProgress) {
          data.push(inactiveLine(Math.random()));
        }
      }
    }
    if (props.activeProgress == props.totalProgress) {
      data.push(progressLine(Math.random(), true));
    } else {
      data.push(inactiveLine(Math.random(), true));
    }

    setProgressBar(data);
  }, []);
  const checkedRound = (key) => (
    <div className="d-none d-md-block">
      <svg
        key={key}
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="20" cy="20" r="20" fill="#E1E9F3" />
        <path
          d="M16.6331 24.4372L12.9881 20.4636C12.5784 20.017 11.9166 20.017 11.507 20.4636C11.0973 20.9102 11.0973 21.6316 11.507 22.0782L15.8978 26.8649C16.3074 27.3115 16.9692 27.3115 17.3789 26.8649L28.4925 14.7494C28.9021 14.3028 28.9021 13.5814 28.4925 13.1348C28.0828 12.6882 27.421 12.6882 27.0113 13.1348L16.6331 24.4372Z"
          fill="white"
        />
      </svg>
    </div>
  );

  const checkedLine = (key) => (
    <div key={key} className={`progress w-full bg-secondary-200 h-5`}>
      <div
        className="progress-bar w-p-100  bg-secondary-500 "
        role="progressbar"
        aria-valuenow="75"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
  );

  const activeRound = (key) => (
    <div key={key} className="d-none d-md-block">
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="20" cy="20" r="16.5" stroke="#E1E9F3" stroke-width="7" />
      </svg>
    </div>
  );

  const progressLine = (key, isLast) => (
    <div
      key={key}
      className={`progress w-full ${
        isLast ? "d-md-none" : ""
      } h-5 bg-secondary-200`}
    >
      <div
        className="progress-bar w-p-50 bg-secondary-500"
        role="progressbar"
        aria-valuenow="75"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
  );
  const inactiveRound = (key) => (
    <div key={key} className="d-none d-md-block">
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="20" cy="20" r="20" fill="#E1E9F3" />
      </svg>
    </div>
  );
  const inactiveLine = (key, isLast) => (
    <div
      key={key}
      className={`progress w-full ${
        isLast ? "d-md-none" : ""
      } bg-secondary-200 h-5`}
    >
      <div
        className="progress-bar"
        role="progressbar"
        style={{ width: "0%", backgroundColor: "#FED991" }}
        aria-valuenow="75"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
  );

  return (
    <div
      className={`d-flex d-grid justify-content-center gap-2 align-items-center ${props.className}`}
    >
      {progressBar.map((r) => {
        return r;
      })}
    </div>
  );
};

export default ProgressComponent;
