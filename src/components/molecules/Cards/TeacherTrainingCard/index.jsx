import React, { useEffect, useState } from "react";
import noImg from '../../../../assets/images/noImg.png'
import Modal from 'react-bootstrap/Modal';
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import { Close } from "@mui/icons-material/";

const TeacherTrainingCard = (props) => {
  const { data } = props
  const thumbnail = data.attachment.toString().split('v=').pop()
  const [embed, setEmbed] = useState(true);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    setEmbed(true)
  }, [embed])

  const closeModalYoutube = () => {
    setEmbed(false)
    handleClose()
  }

  return (
    <>
      <div className="border border-secondary-500 cursor-pointer" onClick={handleShow}>
        <div className="w-full h-120 ">
          <img
            src={thumbnail ? `https://img.youtube.com/vi/${thumbnail}/mqdefault.jpg` : noImg}
            alt="Youtube"
            className="w-full h-full"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="p-8">
          <h6>{data.name}</h6>
          <div className="mt-24 d-flex align-items-center">
            <SupervisorAccountIcon className="fs-20 text-neutral-300" />
            <p className="font-sm text-neutral-300 ml-8">{data.author}</p>
          </div>
        </div>
      </div>

      <Modal centered size="lg" show={show} onHide={closeModalYoutube}>
        <Modal.Body className="radius-16 bg-neutral-50 p-0 w-800 h-450" 
            style={{ maxHeight: "80vh", maxWidth: "100%" }}>
          <div className="radius-8 h-32 w-32 fs-40 text-white position-absolute cursor-pointer d-flex justify-content-center align-items-center" 
            data-bs-dismiss="modal"
            style={{
              background: "rgba(0, 0, 0, 0.2)",
              top: "15px",
              right: "10px",
              zIndex: "9",
            }}
            onClick={closeModalYoutube}
            >
            <Close />
          </div>
          <iframe
            className="embed-responsive-item w-800 h-450 radius-16 position-relative"
            style={{ maxHeight: "80vh", maxWidth: "100%" }}
            src={embed ? `https://www.youtube.com/embed/${thumbnail}` : ''} allowfullscreen autoplay></iframe>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default TeacherTrainingCard;
