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
    setProgressBar(data);
  }, []);
  const checkedRound = (key) => (
    <svg
      key={key}
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      className="d-none d-sm-block"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="20" cy="20" r="20" fill="#FDBF47" />
      <path
        d="M16.6331 24.4372L12.9881 20.4636C12.5784 20.017 11.9166 20.017 11.507 20.4636C11.0973 20.9102 11.0973 21.6316 11.507 22.0782L15.8978 26.8649C16.3074 27.3115 16.9692 27.3115 17.3789 26.8649L28.4925 14.7494C28.9021 14.3028 28.9021 13.5814 28.4925 13.1348C28.0828 12.6882 27.421 12.6882 27.0113 13.1348L16.6331 24.4372Z"
        fill="white"
      />
    </svg>
  );

  const checkedLine = (key) => (
    <svg
      key={key}
      width="80"
      height="6"
      viewBox="0 0 80 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="80" height="6" rx="3" fill="#FED991" />
    </svg>
  );

  const activeRound = (key) => (
    <svg
      key={key}
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="d-none d-sm-block"
    >
      <circle cx="20" cy="20" r="16.5" stroke="#FDBF47" strokeWidth="7" />
    </svg>
  );

  const progressLine = (key) => (
    <svg
      key={key}
      width="80"
      height="6"
      viewBox="0 0 80 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="80" height="6" rx="3" fill="#FFF2DA" />
      <rect width="40" height="6" rx="3" fill="#FED991" />
    </svg>
  );
  const inactiveRound = (key) => (
    <svg
      key={key}
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="20" cy="20" r="20" fill="#FFF2DA" />
    </svg>
  );
  const inactiveLine = (key) => (
    <svg
      key={key}
      width="80"
      height="6"
      viewBox="0 0 80 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="80" height="6" rx="3" fill="#FFF2DA" />
    </svg>
  );

  return (
    <div className="d-flex auth-progress-step justify-content-center gap-2 align-items-center">
      {progressBar.map((r) => {
        return r;
      })}
    </div>
  );
};

export default ProgressComponent;
