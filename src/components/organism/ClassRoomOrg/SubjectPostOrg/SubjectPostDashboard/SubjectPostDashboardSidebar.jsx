import React from "react";
import { Link } from "react-router-dom";
import { UpcomingCard } from "../../../../molecules";
const SubjectPostDashboardSidebar = (props) => {
  const { data } = props;

  return (
    <>
      <div
        className="px-16 md-px-32 xl-px-16 py-8 d-flex align-items-center  radius-8 border border-secondary-500 justify-content-between flex-md-column flex-xl-row "
        style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.05)" }}
      >
        <p className="h6 ">Activate Assessment</p>
        <Link
          to="/classroom/set-plan/1/2/1"
          className="btn btn-secondary text-center font-sm md-w-p-100 xl-w-auto md-mt-16 xl-mt-0"
        >
          Set Plan
        </Link>
      </div>
      <div
        className="mt-24 px-16 pt-8 pb-8 md-pb-16 radius-8 border border-secondary-500 "
        style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.05)" }}
      >
        <div className="d-flex justify-content-between">
          <p className="h6 ">Upcoming Event</p>
          <Link to="/classroom/timeline/1/1" className="font-sm">
            See all
          </Link>
        </div>

        {data.upcomingData.map((r, i) => {
          return (
            <div className="mt-16" key={i}>
              <UpcomingCard data={r} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SubjectPostDashboardSidebar;
