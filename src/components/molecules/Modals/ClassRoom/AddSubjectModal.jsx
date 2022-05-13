import { Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { FormikControl, Modal, Table } from "../../../atoms";
import SearchIcon from "@mui/icons-material/Search";
const AddSubjectModal = (props) => {
  const { data } = useSelector((state) => state.modalData);
  const [filter, setFilter] = useState("");
  const [dataTable, setDataTable] = useState([]);
  const [initialSubject, setInitialSubject] = useState([]);
  useEffect(() => {
    if (data.subjectList) {
      let subjectChecked = [];
      let result = data.subjectList.map((r) => {
        let isChecked = data.checkedSubject.find(
          (res) => res.subject._id === r._id
        );
        if (isChecked) subjectChecked.push(r._id);

        return {
          subjectName: r.name,
          select: (
            <div className="text-end w-full ">
              <Field
                name="subjectId"
                type="checkbox"
                className="mr-16 form-check-input"
                value={r._id}
              />
            </div>
          ),
        };
      });
      setInitialSubject(subjectChecked);
      setDataTable(result);
    }
  }, [data]);

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
  const onSubmit = (values) => {
    props.onSubmit({ subjectId: values.subjectId });
  };
  return (
    <>
      <Formik
        initialValues={{ keyword: "", subjectId: initialSubject }}
        enableReinitialize={true}
        onSubmit={onSubmit}
      >
        <Form>
          <Modal
            className="radius-16  max-w-440 max-h-487 modal-custom bg-white"
            id={props.id}
          >
            <div className="sm-w-440 sm-h-487 ">
              <div className="px-24 pt-24 pb-24 border-bottom  ">
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
                  type="submit"
                  data-bs-dismiss="modal"
                >
                  Save Change
                </button>
              </div>
            </div>
          </Modal>
        </Form>
      </Formik>
    </>
  );
};

export default connect()(AddSubjectModal);
