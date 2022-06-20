import React from "react";
import { ProgressBar } from "../../../atoms";
import Dashbook1 from "../../../../assets/images/dashboard/dash-book1.png";
const BookListDashboardCard = (props) => {
  const { data } = props;
  return (
    <div className={props.className}>
      <div className="card-book-content">
        <img src={data.imageCover} alt="" className="card-book-image" />
        <p className="card-book-author">{data.author}</p>
        <div className="card-book-title">
          <p>{data.name}</p>
        </div>
        <div className="card-book-footer">
          {Math.round(data.progress)}%
          <div className="card-book-progress">
            <div
              className="card-book-progress-value"
              style={{ width: data.progress + "%" }}
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
