import React, { useState } from 'react'
import "../Table.scss"
import GradeCard from '../../Cards/GradeCard';
import ManageDetail1 from './ManageDetail1';
import ManageDetail2 from './ManageDetail2';
import ModalViewContent from '../../Modals/Grades/ModalViewContent';
import { useManageDetail } from "../../../../services";

function TableTeacherManageDetail() {
  const { tableOption, isAuto } = useManageDetail()

  return (
    <>
      <div className="cards-grade-all mb-48">
        <div className="row">
          <GradeCard tableOption={tableOption} />
        </div>
      </div>
      {
        isAuto ? (<ManageDetail1 />) : 
        (!isAuto ? (<ManageDetail2 />) : '' )
      }
      <ModalViewContent id="modalViewQuestion" />
    </>
  )
}

export default TableTeacherManageDetail