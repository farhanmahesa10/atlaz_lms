import React from "react";
import UpcomingCard from "../../Cards/UpcomingCard";
import { Sports } from "../../../../assets/images";
import { Link } from "react-router-dom";
import moment from "moment";
import Skeleton from "react-loading-skeleton";
const UpcomingTeacherDashboard = (props) => {
  const { data, isLoading } = props;
  console.log("sss", data);
  if (isLoading) {
    return <Loading />;
  }

  const callData = () => {
    if (data.length > 0) {
      return data.map((r, i) => {
        return (
          <div key={r._id} className={`${i > 0 && "mt-16"}`}>
            <Link
              to={`/classroom/welcome-assessment/${r.classlist[0]._id}/${r.subject._id}/${r.lesson._id}/${r.topic._id}/${r.timelineSubtopic[0].subtopic._id}`}
            >
              <UpcomingCard
                name={r.lesson.name}
                topic={r.topic.name}
                event={r.timelineSubtopic[0].event}
                date={moment(r.timelineSubtopic[0].startDateTime).format(
                  "D MMM"
                )}
                clock={moment(r.timelineSubtopic[0].startDateTime).format("LT")}
              />
            </Link>
          </div>
        );
      });
    } else {
      return (
        <div className="text-center h-full d-flex flex-column align-items-center justify-content-center">
          <img src={Sports} alt="" className="h-auto" />
          <p className="font-sm-text-neutral-400 w-248">
            There no upcoming event for this week. Enjoy your day!
          </p>
        </div>
      );
    }
  };

  return (
    <div className="w-full h-full border border-secondary-500 radius-14 d-flex flex-column justify-content-between">
      <div className="pt-16 px-24 ">
        <h6 className="xl-h5"> Upcoming Event</h6>
      </div>
      <div className="h-full py-16 px-24 ">{callData()}</div>
    </div>
  );
};

const Loading = () => {
  return (
    <div className="w-full h-full border border-secondary-500 radius-14 d-flex flex-column justify-content-between">
      <div className="pt-16 px-24 ">
        <Skeleton height="35px" width="100%" />
      </div>
      <div className="h-full py-16 px-24 ">
        <Skeleton height="78px" width="100%" />
      </div>
    </div>
  );
};

export default UpcomingTeacherDashboard;
