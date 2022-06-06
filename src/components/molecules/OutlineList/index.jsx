import React, { useState, useEffect } from "react";
import ListIcon from "@mui/icons-material/List";

import { Offcanvas } from "react-bootstrap";
import { Divider } from "../../atoms";
import Skeleton from "react-loading-skeleton";
import OutlineListLessonControl from "./OutlineListLessonControl";
import { GET, defConfig } from "../../../config/RestAPI";
const OutlineList = (props) => {
  const [showCanvas, setShowCanvas] = useState(false);
  const { classId, subjectId, lessonId } = props;
  const [isLoading, setIsLoading] = useState(true);
  const [lessonData, setLessonData] = useState({});
  const [data, setData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    GET(
      `/client/classrooms/book/lesson?subjectId=${subjectId}&classlistId=${classId}`,
      defConfig()
    ).then((r) => {
      setData(r.data);
      setLessonData(r.data.find((res) => res._id === lessonId));

      setIsLoading(false);
    });
  }, []);

  const handleClose = () => setShowCanvas(false);
  const handleShow = () => setShowCanvas(true);
  return (
    <>
      <div
        className="position-fixed"
        style={{
          zIndex: "99",
          bottom: "117px",
          left: "48px",
        }}
      >
        <div
          className="bg-secondary-400 hover-bg-secondary-300 cursor-pointer w-56 h-56 radius-p-100 d-flex align-items-center justify-content-center"
          style={{ boxShadow: " 0px 4px 16px rgba(0, 0, 0, 0.16)" }}
          type="button"
          onClick={handleShow}
        >
          <ListIcon />
        </div>
      </div>

      <Offcanvas show={showCanvas} onHide={handleClose} className="max-w-360">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            {isLoading ? (
              <Skeleton width="140px" height="25px" />
            ) : (
              <>
                <p
                  className="offcanvas-title font-bold pl-8"
                  id="offcanvasOutlineListLabel"
                >
                  {lessonData.name}
                </p>
                <Divider height="h-2" parentClassName={"ml-8 w-64"} />
              </>
            )}
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="pr-24 pl-24">
          <div className=" w-full ">
            {isLoading ? (
              <>
                <Skeleton height="40px" width="100%" />
                <Skeleton height="40px" width="100%" />
              </>
            ) : (
              data.map((r, i) => {
                return (
                  <div key={`lesson-${r._id}`}>
                    <OutlineListLessonControl
                      data={r}
                      classId={classId}
                      subjectId={subjectId}
                    />
                  </div>
                );
              })
            )}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default OutlineList;
