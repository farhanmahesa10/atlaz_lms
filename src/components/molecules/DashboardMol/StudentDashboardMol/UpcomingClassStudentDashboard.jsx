import React from "react";
import { Sports } from "../../../../assets/images";
import UpcomingCard from "../../Cards/UpcomingCard";
const UpcomingClassStudentDashboard = () => {
  const data = [
    {
      name: "Unit 1 Unit name",
      category: "assessment",
      date: "11",
      month: "Apr",
      clock: "10:00 AM",
    },
    {
      name: "Unit 2 Unit name",
      category: "assessment",
      date: "12",
      month: "Mar",
      clock: "12:00 PM",
    },
  ];

  const callData = () => {
    if (data.length > 0) {
      return data.map((r, i) => {
        return (
          <div key={i} className={`${i > 0 && "mt-16"}`}>
            <UpcomingCard data={r} key={i} />
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
        <h6 className="md-h5"> Upcoming Event</h6>
      </div>
      <div className="h-full py-16 px-24 ">{callData()}</div>
    </div>
  );
};

export default UpcomingClassStudentDashboard;
