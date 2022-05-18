import React, { useEffect, useState } from "react";

const useSubjectPostMember = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {}, []);

  return { data, isLoading };
};

export default useSubjectPostMember;
