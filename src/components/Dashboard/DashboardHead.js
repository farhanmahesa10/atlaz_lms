import React from "react";
import Carousel from "../Library/Carousel";
import { InputText } from "../Form";
const DashboardHead = () => {
  return (
    <>
      <div className="bg-secondary-200 d-sm-flex justify-content-center pb-55">
        <div className="sm-px-48 pl-24 m-0 " style={{ maxWidth: "1440px" }}>
          <div className="pb-24 d-flex justify-content-center">
            <div class="input-group mt-24  pr-24" style={{ maxWidth: "423px" }}>
              <button
                class="btn bg-white radius-l-8 border-top border-bottom border-start "
                type="button"
              >
                <i className="bi bi-search text-neutral-200 "></i>
              </button>
              <input
                type="text"
                class="form-control border-top border-bottom border-top"
                placeholder="Search anything here"
                style={{ borderRight: "none" }}
              />

              <div className="p-1 radius-r-8 bg-white  border-top border-bottom border-end">
                <button class="btn bg-warning " type="button">
                  Search
                </button>
              </div>
            </div>
          </div>
          <Carousel />
        </div>
      </div>
    </>
  );
};

export default DashboardHead;
