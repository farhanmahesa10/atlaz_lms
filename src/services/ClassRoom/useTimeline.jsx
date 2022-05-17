import React, { useState } from "react";

const useTimeline = () => {
  const [data, setData] = useState([]);

  return { data };
};

export default useTimeline;
