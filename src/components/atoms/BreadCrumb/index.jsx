import React from "react";
import { Link } from "react-router-dom";

const BreadCrumb = (props) => {
  const data = props.data;

  return (
    <>
      <nav aria-label="breadcrumb" style={{ "--bs-breadcrumb-divider": ">" }}>
        <ol className="breadcrumb">
          {data.map((r, i) => {
            return (
              <li className="breadcrumb-item font-xs">
                <Link
                  to={r.link ? r.link : ""}
                  className={r.link ? "text-primary-500" : "text-neutral-400"}
                >
                  {r.label}&nbsp;&nbsp;
                  {r.link ? (
                    <i className="bi bi-caret-right-fill text-neutral-300 font-size-12"></i>
                  ) : (
                    ""
                  )}
                </Link>
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};

export default BreadCrumb;
