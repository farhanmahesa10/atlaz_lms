import React from "react";
import { useClassRoomHero } from "../../../services";
import { BreadCrumb } from "../../atoms";

const ClassRoomHero = () => {
  const { isLoading, data, banner, breadcrumbsData } = useClassRoomHero();

  return (
    <>
      <div className="">
        <div
          style={{
            backgroundImage: `url("${banner}")`,
            backgroundSize: "cover",
          }}
          className="h-188 md-h-312  hero-classroom"
        >
          <div className=" d-flex flex-column justify-content-xl-between  justify-content-end h-full  ">
            <div className="d-none d-xl-block pl-48 pt-16">
              <BreadCrumb data={breadcrumbsData} />
            </div>

            <div className="pl-24 md-pl-48  pb-24 ">
              <p className="h4 md-h2 text-white">{data.name}</p>
              <p className="text-white mt-8">{data.address}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClassRoomHero;
