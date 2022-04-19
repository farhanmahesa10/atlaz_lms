import React, { useState } from "react";
import MainLayout from "../../../Layout/Mainlayout";
import { ModalImage, PostFeedCard } from "../../../molecules";

const SubjectPostDetailOrg = () => {
  const [data, setData] = useState({
    user: {
      name: "Hisyam Halimi",
      photo: "/images/product.png",
    },
    time: "6 April 2022 at 2:37 PM",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet",
    image: "/images/example-img-post/gb.jpeg",
  });

  return (
    <MainLayout maxWidth="888px" navbarBg="bg-white">
      <ModalImage id="postImage" />
      <div className="my-24 mx-24">
        <PostFeedCard data={data} />
      </div>
    </MainLayout>
  );
};

export default SubjectPostDetailOrg;
