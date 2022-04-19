import { Form, Formik } from "formik";
import React from "react";
import { Divider, FormikControl } from "../../../atoms";
import MainLayout from "../../../Layout/Mainlayout";
import { useActivateAssessment } from "../../../../services";
const ActivateAssessmentOrg = () => {
  const { initialValues, createForm } = useActivateAssessment();
  return (
    <MainLayout maxWidth="1440px" navbarBg="bg-white" navNoMenu>
      <div className="mx-48 mt-16">
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {(formik) => (
            <Form>
              <h4>Activate Assessment</h4>
              <Divider lineColor={"bg-primary-500 w-32 h-2"} />
              <div className="row mt-48">
                {createForm.map((r, i) => {
                  return (
                    <React.Fragment key={i}>
                      <AssessmentForm
                        formik={formik}
                        title={r.title}
                        desc={r.desc}
                        name={r.name}
                        options={r.data}
                      />
                    </React.Fragment>
                  );
                })}
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </MainLayout>
  );
};

const AssessmentForm = (props) => {
  const { formik, title, desc, name, options } = props;

  return (
    <div className="col-12  mb-24 md-mb-40">
      <div className="row">
        <div className="col-12 col-md-4 mb-8 md-mb-0">
          <p className="font-sm-bold">{title}</p>
          <p className="font-xs">{desc}</p>
        </div>
        <div className="col-12 col-md-8 ">
          <div>
            <FormikControl
              control="select"
              name={name}
              placeholder={`Select ${name}`}
              options={props.options && props.options}
              formik={formik}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ActivateAssessmentOrg;
