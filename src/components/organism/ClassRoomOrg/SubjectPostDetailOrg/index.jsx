import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useNavigate, useParams } from "react-router-dom";
import { defConfig, GET } from "../../../../config/RestAPI";
import { GlobalToast } from "../../../atoms";
import MainLayout from "../../../Layout/Mainlayout";
import { ModalImage, PostFeedCard } from "../../../molecules";

const SubjectPostDetailOrg = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { classId, subjectId, postId } = useParams();
  useEffect(() => {
    getFeed();
  }, []);

  const getFeed = () => {
    setIsLoading(true);
    GET(`/client/feed/${postId}`, defConfig())
      .then((r) => {
        setData(r.data);
        setIsLoading(false);
      })
      .catch((err) => {
        navigate("/page-not-found");
      });
  };
  const handleDeletedFeed = (data) => {
    navigate(`/classroom/assessment/${classId}/${subjectId}/dashboard`);
  };
  return (
    <MainLayout maxWidth="888px" navbarBg="bg-white">
      <GlobalToast />
      <ModalImage id="postImage" />
      <div className="my-24 mx-24">
        {isLoading ? (
          <Skeleton width="100%" height="400px" />
        ) : (
          <PostFeedCard data={data} onDeleted={handleDeletedFeed} />
        )}
      </div>
    </MainLayout>
  );
};

export default SubjectPostDetailOrg;
