import React from "react";
import { useClassRoomHero } from "../../../services";
import { BreadCrumb } from "../../atoms";

const ClassRoomHero = () => {
  const { banner, breadcrumbsData } = useClassRoomHero();

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
              <p className="h4 md-h2">Atlaz Academy School</p>
              <p className="text-neutral-400 mt-8">
                JL Radio Dalam Raya No. 99 B-C
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClassRoomHero;
