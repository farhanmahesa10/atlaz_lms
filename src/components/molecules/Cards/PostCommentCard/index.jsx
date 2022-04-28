import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
const PostCommentCard = () => {
  return (
    <div className="d-flex mb-32">
      <div>
        <div className="w-40 h-40 bg-info-200 d-flex align-items-center justify-content-center radius-p-100 mr-8">
          <PersonIcon className="fs-20 text-info-500" />
        </div>
      </div>

      <div>
        <div className="w-full bg-secondary-100 border border-secondary-500 radius-8 p-8">
          <p className="font-sm-bold xl-font-bold">Uut Budiarto</p>
          <p className="font-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            voluptatum facilis illum dolore labore sint nulla necessitatibus
            quasi deleniti vero exercitationem saepe nobis ex eos, porro
            consectetur ad minima, inventore, facere obcaecati illo. Perferendis
            iure quod, fuga ratione atque tempora explicabo placeat magnam,
            delectus earum deserunt cupiditate voluptatibus, ea impedit!
          </p>
        </div>
        <div className="mt-4 d-flex align-items-center">
          <p className="font-xs text-neutral-300">6 April 2022 at 2:37 PM</p>
          <FiberManualRecordIcon className="fs-5 text-neutral-100 mx-8" />
          <p className="font-xs-bold cursor-pointer hover-text-primary-500 ">
            Delete
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostCommentCard;
