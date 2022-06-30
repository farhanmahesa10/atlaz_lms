import React, { useEffect, useState } from "react";
import { Modal } from "../../../atoms";
import { connect, useSelector } from "react-redux";
import { Close } from '@mui/icons-material';

import "../modal.scss";

const ModalManageDetail = (props) => {
  const { data } = useSelector((state) => state.modalData);

  useEffect(() => {
    console.log('data',data)
  }, []);

  return (
    <Modal
          className="radius-14 px-40 py-24 max-w-880 modal-custom bg-neutral-50"
          id={props.id} style={{ boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.16)' }}
        >
          <div className="text-end">
            <button type="button" class="btn-close cursor-pointer" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
            {data.nomor}
        </Modal>
  );
};

export default connect()(ModalManageDetail);
