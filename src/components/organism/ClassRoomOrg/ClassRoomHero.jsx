import React from "react";
import { useClassRoomHero } from "../../../services";
import { BreadCrumb } from "../../atoms";

const ClassRoomHero = () => {
  const { isLoading, data, banner, breadcrumbsData } = useClassRoomHero();

  return (
    <>
      <div className="p-12 md-p-20">
        <div
          style={{
            backgroundImage: `url("${banner}")`,
            backgroundSize: "cover",
          }}
          className="h-188 md-h-312  hero-classroom"
        >
          <div className=" d-flex flex-column justify-content-xl-between  justify-content-end h-full  ">
            <div className="d-none d-xl-block pl-28 pt-16">
              <BreadCrumb data={breadcrumbsData} />
            </div>

            <div className="p-12 md-p-28 ">
              <p className="h4 md-h2">{data.name}</p>
              <p className="text-neutral-400 mt-8">{data.address}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClassRoomHero;
