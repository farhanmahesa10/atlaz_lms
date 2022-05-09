import React, { useState } from "react";
import ListIcon from "@mui/icons-material/List";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import { useNavigate } from "react-router-dom";
import { Offcanvas } from "react-bootstrap";
const OutlineList = (props) => {
  const [showCanvas, setShowCanvas] = useState(false);
  const { data } = props;

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
            <p
              className="offcanvas-title font-bold pl-8"
              id="offcanvasOutlineListLabel"
            >
              English Play 01
            </p>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="pr-24 pl-24">
          <div className=" w-full ">
            {data.map((r, i) => {
              return (
                <div className="pb-16" key={`lesson-${i}`}>
                  <Accordion
                    id={`lesson-${i}`}
                    icon={<LocalLibraryIcon />}
                    title={r.name}
                    withExpand={true}
                    defaultShow={i === 0 && true}
                  >
                    {r.topics &&
                      r.topics.map((res, ind) => {
                        return (
                          <div
                            className="ml-28 pt-8 border-start border-secondary-500 "
                            key={`subject-${i}-${ind}`}
                          >
                            <div className="ml-28 ">
                              <Accordion
                                id={`subject-${i}-${ind}`}
                                titleClassName={"font-sm"}
                                title={res.name}
                                withExpand={true}
                              >
                                {res.subTopics &&
                                  res.subTopics.map((result, index) => {
                                    return (
                                      <div
                                        className="ml-16 pt-8 border-start border-secondary-500 "
                                        key={`subTopic-${i}-${ind}-${index}`}
                                      >
                                        <div className="ml-28 ">
                                          <Accordion
                                            id={`subTopic-${i}-${ind}-${index}`}
                                            titleClassName={"font-sm"}
                                            redirectTo="/"
                                            title={result.name}
                                          />
                                        </div>
                                      </div>
                                    );
                                  })}
                              </Accordion>
                            </div>
                          </div>
                        );
                      })}
                  </Accordion>
                </div>
              );
            })}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

const Accordion = (props) => {
  const { icon, title, withExpand, redirectTo, titleClassName, defaultShow } =
    props;
  const [expand, setExpand] = useState(defaultShow);
  const navigate = useNavigate();
  const handleParentClick = (e) => {
    if (withExpand) setExpand(expand ? false : true);
    if (redirectTo) {
      navigate(redirectTo);
    }

    // tesRef.current.click();
  };

  return (
    <>
      <div
        className={`h-40 w-full border radius-4 d-flex  align-items-center cursor-pointer
        ${expand && "bg-neutral-600"}`}
        onClick={handleParentClick}
        id={`expand-target-${props.id}`}
        data-bs-toggle="collapse"
        data-bs-target={`#collapseTarget-${props.id}`}
        aria-expanded="false"
        aria-controls={`collapseTarget-${props.id}`}
      >
        <div className="px-16 py-16 w-full">
          <div className="w-full h-full d-flex align-items-center justify-content-between ">
            <div className="d-flex align-items-center">
              {props.icon && (
                <div
                  className={`mr-16 ${
                    expand ? "font-bold text-white" : "text-neutral-300"
                  }`}
                >
                  {icon}
                </div>
              )}
              <p
                className={`${titleClassName} ${
                  expand && "font-bold text-white"
                }`}
              >
                {title.length > 25 ? title.substring(0, 25) + "..." : title}
              </p>
            </div>
            <div className="d-flex align-items-center  ">
              <div
                className={` cursor-pointer ${expand && "transform-180-deg"} ${
                  !withExpand ? "d-none" : " d-flex align-items-center "
                }`}
              >
                <ArrowDropDownIcon
                  className={` ${expand && "font-bold text-white"}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`collapse ${defaultShow && "show"}`}
        id={`collapseTarget-${props.id}`}
      >
        <div className="card card-body ">{props.children}</div>
      </div>
    </>
  );
};

export default OutlineList;
