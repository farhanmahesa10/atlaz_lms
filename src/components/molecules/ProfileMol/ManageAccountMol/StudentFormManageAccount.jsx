import { Form, Formik } from "formik";
import { Divider, FormikControl } from "../../../atoms";
import { StudentManageAccountLoading } from "../../../molecules";
const StudentFormManageAccount = (props) => {
  const { initialGeneral, data, isLoading } = props;

  return (
    <>
      {isLoading ? (
        <StudentManageAccountLoading />
      ) : (
        <>
          <div className="col-12 border border-secondary-500 radius-14 p-16">
            <Formik initialValues={initialGeneral} enableReinitialize={true}>
              <Form>
                <div className="">
                  <h6 className="md-h5">General Information</h6>
                  <p className="font-xs text-neutral-300">
                    This data will show in other account as your account.
                  </p>
                </div>
                <div className="mt-16">
                  <Divider lineColor="bg-secondary-500" height="h-1" />
                </div>
                <div className="mt-8">
                  <FormikControl
                    name="nisn"
                    size="xs"
                    mdSize="sm"
                    lgSize="normal"
                    control="input"
                    label="NISN"
                    readOnly
                  />
                </div>
                <div className="mt-24">
                  <FormikControl
                    name="role"
                    size="xs"
                    mdSize="sm"
                    lgSize="normal"
                    control="input"
                    label="Role"
                    readOnly
                  />
                </div>
                <div className="mt-24">
                  <FormikControl
                    name="fullname"
                    size="xs"
                    mdSize="sm"
                    lgSize="normal"
                    control="input"
                    label="Fullname"
                    readOnly
                  />
                </div>
              </Form>
            </Formik>
          </div>
        </>
      )}
    </>
  );
};

export default StudentFormManageAccount;
