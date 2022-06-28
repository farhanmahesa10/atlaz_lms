import React, { useEffect, useState } from "react";
import { ModalTrigger } from "../components/atoms";
import { ModalViewContent } from "../components/molecules";
import { defConfig, GET } from "../config/RestAPI";

const TesViewContent = () => {
  const [userAnswers, setUserAnswers] = useState([]);
  useEffect(() => {
    GET(
      "/report/teacher/student_list_overview_detail/62ba9bff109451d96d195689",
      defConfig()
    ).then((r) => {
      setUserAnswers(r.data.userAnswers);
      console.log(r.data.userAnswers);
    });
  }, []);
  return (
    <>
      <ModalViewContent id="viewContent" />
      <div style={{ marginLeft: "200px", marginTop: "200px" }}>
        <table>
          <thead>
            <tr style={{ border: "1px solid black" }}>
              <th style={{ padding: "8px" }}>Kontent</th>
            </tr>
          </thead>
          <tbody>
            {userAnswers.length > 0 &&
              userAnswers.map((r, i) => {
                return (
                  <tr style={{ border: "1px solid black" }} key={r._id}>
                    <td style={{ padding: "8px" }}>
                      <ModalTrigger
                        target="viewContent"
                        data={{ data: r, nomor: i + 1 }}
                      >
                        View
                      </ModalTrigger>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TesViewContent;
