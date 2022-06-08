import moment from "moment";
import React from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import { Can } from "../../../../../permission";
import { UpcomingCard } from "../../../../molecules";
const SubjectPostDashboardSidebar = (props) => {
  const { data, params, isUpcomingLoading } = props;

  return (
    <>
      <Can allowAccess="SCHOOLADMIN,teacher">
        <div
          className="px-16 mb-24 md-px-32 xl-px-16 py-8 d-flex align-items-center  radius-8 border border-secondary-500 justify-content-between flex-md-column flex-xl-row "
          style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.05)" }}
        >
          <p className="h6 ">Activate Assessment</p>
          <Link
            to={`/classroom/set-plan/${params.classId}/${params.subjectId}`}
            className="btn btn-secondary text-center font-sm md-w-p-100 xl-w-auto md-mt-16 xl-mt-0"
          >
            Set Plan
          </Link>
        </div>
      </Can>
      <div
        className=" px-16 pt-8 pb-8 md-pb-16 radius-8 border border-secondary-500 "
        style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.05)" }}
      >
        {isUpcomingLoading ? (
          <>
            <div className="d-flex justify-content-between">
              <Skeleton width={"120px"} height="24px" />
              <Skeleton width={"42px"} height="24px" />
            </div>
            <div className="mt-16">
              <Skeleton width={"100%"} height="78px" />
            </div>
            <div className="mt-16">
              <Skeleton width={"100%"} height="78px" />
            </div>
          </>
        ) : (
          <>
            <div className="d-flex justify-content-between">
              <p className="h6 ">Upcoming Event</p>
              <Link
                to={`/classroom/timeline/${params.classId}/${params.subjectId}`}
                className="font-sm"
              >
                See all
              </Link>
            </div>

            {data.upcomingData.length > 0 ? (
              data.upcomingData.map((r, i) => {
                return (
                  <div className="mt-16" key={i}>
                    <UpcomingCard
                      name={r.lesson.name}
                      date={moment(r.timelineSubtopic[0].startDateTime).format(
                        "D MMM"
                      )}
                      clock={moment(r.timelineSubtopic[0].startDateTime).format(
                        "LT"
                      )}
                    />
                  </div>
                );
              })
            ) : (
              <div className="d-flex justify-content-center align-items-center h-88 font-bold text-neutral-200">
                No Event Available
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default SubjectPostDashboardSidebar;
