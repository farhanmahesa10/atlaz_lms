import React from "react";
import { ProgressBar } from "../../../atoms";
import Dashbook1 from "../../../../assets/images/dashboard/dash-book1.png";
const BookListDashboardCard = (props) => {
  return (
    <div className={props.className}>
      <div className="card-book-content">
        <img src={Dashbook1} alt="" className="card-book-image" />
        <p className="card-book-author">Atlaz</p>
        <div className="card-book-title">
          <p>English Play - 01</p>
        </div>
        <div className="card-book-footer">
          20%
          <div className="card-book-progress">
            <div
              className="card-book-progress-value"
              style={{ width: "50%" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

BookListDashboardCard.defaultProps = {
  className: "card-book-sm",
};

export default BookListDashboardCard;
