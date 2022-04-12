import React, { useState } from "react";

const useClaassRoomContentSubject = () => {
  const [data, setData] = useState([
    {
      title: "Kelas 1A Bahasa inggris",
      desc: "uut Budiarto",
      image: "/images/product.png",
    },
    {
      title: "Kelas 1B IPA",
      desc: "uut Budiarto",
      image: "/images/product.png",
    },
    {
      title: "Kelas 1A IPS",
      desc: "uut Budiarto",
      image: "/images/product.png",
    },
    {
      title: "Kelas 1C IPS",
      desc: "uut Budiarto",
      image: "/images/product.png",
    },
  ]);

  return { data };
};

export default useClaassRoomContentSubject;
