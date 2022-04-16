import React from "react";
import { Modal } from "../../../atoms";
import { connect, useSelector } from "react-redux";
import {
  ClassRoomHero1,
  ClassRoomHero2,
  ClassRoomHero3,
} from "../../../../assets/images";
import "../modal.scss";

const EditHeroModal = (props) => {
  const { data } = useSelector((state) => state.modalData);

  return (
    <Modal
      className="radius-16  max-w-440 max-h-446 modal-custom bg-white"
      id={props.id}
    >
      <div className="px-24 pt-24 pb-16">
        <h5>Class Banner</h5>
        <p className="font-sm">Select your favourite banner</p>
      </div>
      <div
        className="bg-secondary-100 h-288 p-24 hide-scroll-bar"
        style={{ overflow: "scroll" }}
      >
        <label className="">
          <input
            type="radio"
            name={`tes`}
            value={`te1`}
            className={`radio-custom `}
          />
          <div className="custom ">
            <img src={ClassRoomHero1} alt="" className="h-86 radius-8 mb-16 " />
          </div>
        </label>
        <label className="">
          <input
            type="radio"
            name={`tes`}
            value={`te2`}
            className={`radio-custom `}
          />
          <div className="custom ">
            <img src={ClassRoomHero2} alt="" className="h-86 radius-8 mb-16 " />
          </div>
        </label>
        <label className="">
          <input
            type="radio"
            name={`tes`}
            value={`te3`}
            className={`radio-custom `}
          />
          <div className="custom ">
            <img src={ClassRoomHero3} alt="" className="h-86 radius-8 mb-16 " />
          </div>
        </label>
      </div>
      <div className="h-72 d-flex justify-content-end align-items-center px-24">
        <>
          <button
            className="btn btn-outline mr-16 font-xs"
            type="button"
            data-bs-dismiss="modal"
          >
            Cancel
          </button>
          <button
            className="btn btn-primary font-xs"
            type="button"
            data-bs-dismiss="modal"
          >
            Save Change
          </button>
        </>
      </div>
    </Modal>
  );
};

export default connect()(EditHeroModal);
