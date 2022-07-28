import React from "react";
import { useParams } from "react-router-dom";
import { useTimeline } from "../../../../services";
import { Divider } from "../../../atoms";
import MainLayout from "../../../Layout/Mainlayout";
import TimelineMol from "../../../molecules/TimelineMol";

const TimelineOrg = () => {
  const { data, isLoading, handleDetedTimeline } = useTimeline();

  const params = useParams();
  return (
    <>
      <MainLayout
        maxWidth="1440px"
        navbarBg="bg-white"
        navNoMenu
        redirectOnNavClose={`/classroom/assessment/${params.classId}/${params.subjectId}/dashboard`}
        isNeedConfirm={false}
      >
        <div className="mx-24 md-mx-48">
          <h4>Upcoming Event</h4>
          <div className="w-64">
            <Divider height={"h-2"} lineColor="bg-primary-500" />
          </div>

          <div className="mt-32">
            <Divider height={"h-2"} lineColor="bg-secondary-200" />
          </div>
        </div>
        <div className="mt-24 md-mx-32 ">
          {
            data.length > 0 ?
            (<TimelineMol
              data={data}
              isLoading={isLoading}
              onDelete={handleDetedTimeline}
            />)
            : (
              <div className="mx-12">No Event Available</div>
            )
          }
        </div>
      </MainLayout>
    </>
  );
};

export default TimelineOrg;
