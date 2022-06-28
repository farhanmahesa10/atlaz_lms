import React, { useEffect } from "react";
import { Modal } from "../../../../atoms";
import SingleChoiceModalShow from "./SingleChoiceModalShow";
import { useSelector, connect } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import MultipleChoiceModalShow from "./MultipleChoiceModalShow";
const ModalViewContent = (props) => {
  const { data } = useSelector((state) => state.modalData);
  // useEffect(() => {
  //   return () => (data = "");
  // }, []);

  const callContent = (contentData, nomor) => {
    switch (contentData.assessmentType.name.toLowerCase()) {
      case "single choice":
        return <SingleChoiceModalShow data={contentData} nomor={nomor} />;
      case "multiple choice":
        return <MultipleChoiceModalShow data={contentData} nomor={nomor} />;
      default:
        return;
    }
  };

  if (!data) return;
  return (
    <Modal
      className="radius-16 postition-relative bg-danger max-w-672   modal-custom bg-white"
      id={props.id}
    >
      <div
        className="text-end pr-40 pt-24 cursor-pointer pb-16"
        data-bs-dismiss="modal"
      >
        <CloseIcon />
      </div>
      {data.data && callContent(data.data, data.nomor)}
    </Modal>
  );
};

export default connect()(ModalViewContent);
