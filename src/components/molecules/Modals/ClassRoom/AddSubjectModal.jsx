import { Form, Formik } from "formik";
import React, { useState } from "react";
import { connect, useSelector } from "react-redux";
import { FormikControl, Modal, Table } from "../../../atoms";
import SearchIcon from "@mui/icons-material/Search";
const AddSubjectModal = (props) => {
  const { data } = useSelector((state) => state.modalData);
  const [filter, setFilter] = useState("");
  const dataTable = [
    {
      subjectName: "UTS 1 English 2022/2023",
      select: (
        <div className="text-end w-full ">
          <input type="checkbox" className="mr-16 form-check-input" />
        </div>
      ),
    },
    {
      subjectName: "UTS 2 English 2022/2023",
      select: (
        <div className="text-end w-full ">
          <input type="checkbox" className="mr-16 form-check-input" />
        </div>
      ),
    },
    {
      subjectName: "UTS 1 English 2022/2023",
      select: (
        <div className="text-end w-full ">
          <input type="checkbox" className="mr-16 form-check-input" />
        </div>
      ),
    },
    {
      subjectName: "UTS 2 English 2022/2023",
      select: (
        <div className="text-end w-full ">
          <input type="checkbox" className="mr-16 form-check-input" />
        </div>
      ),
    },
    {
      subjectName: "UTS 1 English 2022/2023",
      select: (
        <div className="text-end w-full ">
          <input type="checkbox" className="mr-16 form-check-input" />
        </div>
      ),
    },
    {
      subjectName: "UTS 2 English 2022/2023",
      select: (
        <div className="text-end w-full ">
          <input type="checkbox" className="mr-16 form-check-input" />
        </div>
      ),
    },
  ];

  const columns = React.useMemo(
    () => [
      {
        Header: "Subject Name",
        accessor: "subjectName",
      },
      {
        Header: "",
        accessor: "select",
        disableSortBy: true,
        Header: () => <div className="w-full text-end">Select</div>,
      },
    ],
    []
  );

  return (
    <>
      <Formik initialValues={{ keyword: "" }} onSubmit={() => {}}>
        <Form>
          <Modal className="radius-16  max-w-440 max-h-446 modal" id={props.id}>
            <div className="px-24 pt-24 pb-24 border-bottom ">
              <h5>Add New Subject</h5>
            </div>

            <div
              className="bg-secondary-100 h-288 p-24 hide-scroll-bar"
              style={{ overflow: "scroll" }}
            >
              <FormikControl
                control="input"
                name="keyword"
                type="text"
                icon={<SearchIcon className="text-neutral-200" />}
                label="Select available subject:"
                labelClassName="font-xs-bold"
                placeholder="Search subject"
                autoFocus
                autoComplete="off"
                onInput={(e) => setFilter(e.target.value)}
              />
              <div className="mt-24">
                <Table columns={columns} data={dataTable} filter={filter} />
              </div>
            </div>
            <div className="h-72 d-flex justify-content-end align-items-center px-24">
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
            </div>
          </Modal>
        </Form>
      </Formik>
    </>
  );
};

export default connect()(AddSubjectModal);
