import React from "react";
import { GradeBg } from "../../../../assets/images";
const GradeStudentDashboard = () => {
  // return (
  //   <div
  //     className="border border-secondary-500  radius-14 w-full"
  //     style={{
  //       backgroundImage: `url(${GradeBg})`,
  //       // backgroundSize: "100% 100%",
  //       backgroundColor: "#EAF7FA",
  //       backgroundPositionY: "bottom",
  //       backgroundPositionX: "right",
  //       backgroundRepeat: "no-repeat",
  //     }}
  //   >
  //     <div className="px-32 py-24">
  //       <h5>My Grade</h5>
  //       <p className="font-sm text-neutral-300">This semester</p>
  //       <div className="mt-18">
  //         <div
  //           className="w-62 h-62  radius-p-100 border-info-300 d-flex align-items-center justify-content-center"
  //           style={{ border: "4px solid " }}
  //         >
  //           <h2 className="text-info-500">100</h2>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
  return <Fake />;
};

const Fake = () => {
  return (
    <div
      className="  radius-14 w-full"
      style={{
        // backgroundImage: `url(${GradeBg})`,
        // backgroundSize: "100% 100%",
        backgroundColor: "white",
        backgroundPositionY: "bottom",
        backgroundPositionX: "right",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="px-32 py-24">
        <h5>&nbsp;</h5>
        <p className="font-sm text-neutral-300">&nbsp;</p>
        <div className="mt-18">
          <div className="w-62 h-62  radius-p-100 border-info-300 d-flex align-items-center justify-content-center">
            <h2 className="text-info-500"></h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GradeStudentDashboard;
