import React from "react";

const StarIcon = (props) => {
  if (props.isHalf) {
    return (
      <svg
        width={`${props.size ? props.size : "12"}`}
        height={`${props.size ? props.size : "12"}`}
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.1 4.02667L7.87338 3.74667L6.61338 0.78C6.38672 0.24 5.61338 0.24 5.38671 0.78L4.12671 3.75333L0.906715 4.02667C0.320048 4.07333 0.0800484 4.80667 0.526715 5.19333L2.97338 7.31333L2.24005 10.46C2.10672 11.0333 2.72672 11.4867 3.23338 11.18L6.00005 9.51333L8.76672 11.1867C9.27338 11.4933 9.89338 11.04 9.76005 10.4667L9.02672 7.31333L11.4734 5.19333C11.92 4.80667 11.6867 4.07333 11.1 4.02667ZM6.00005 8.26667V2.06667L7.14005 4.76L10.06 5.01333L7.84672 6.93333L8.51338 9.78667L6.00005 8.26667Z"
          fill="#FDBF47"
        />
      </svg>
    );
  }
  return (
    <svg
      width={`${props.size ? props.size : "12"}`}
      height={`${props.size ? props.size : "12"}`}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.62014 4.66651L6.64014 1.43984C6.4468 0.80651 5.55347 0.80651 5.3668 1.43984L4.38014 4.66651H1.41347C0.766802 4.66651 0.500135 5.49984 1.0268 5.87318L3.45347 7.60651L2.50014 10.6798C2.3068 11.2998 3.0268 11.7998 3.54014 11.4065L6.00013 9.53984L8.46013 11.4132C8.97347 11.8065 9.69347 11.3065 9.50013 10.6865L8.5468 7.61318L10.9735 5.87984C11.5001 5.49984 11.2335 4.67318 10.5868 4.67318H7.62014V4.66651Z"
        fill="#FDBF47"
      />
    </svg>
  );
};

export default StarIcon;
