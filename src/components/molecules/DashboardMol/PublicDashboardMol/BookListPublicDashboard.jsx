import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { defConfig, GET } from "../../../../config/RestAPI";
import BookListDashboardCard from "../../Cards/BookListDashboardCard";
import MyBookListContentLoading from "../../SkeletonLoading/MyBookListLoading/MyBookListContentLoading";
import NoBookImage from "../../../../assets/images/search-no-data.png";
const BookListPublicDashboard = (props) => {
  const { isLoading, data } = props;

  return (
    <div className="w-full border border-secondary-500 radius-14 ">
      <div className="py-24 px-32">
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <h6 className="md-h5">My Book List</h6>
            <p className="font-xs-medium md-font-sm text-neutral-200">
              Elementary School
            </p>
          </div>
          <div>
            <Link to="/my-book-list">
              <button className="btn-outline font-xs md-font-sm xl-font-normal">
                View All
              </button>
            </Link>
          </div>
        </div>
        {isLoading ? (
          <MyBookListContentLoading />
        ) : (
          <>
            {data.length > 0 ? (
              <div className="mt-24 row ">
                {data.map((r, i) => {
                  return (
                    <div
                      className="mb-24 col-6 col-sm-4 col-md-4 col-xl-3"
                      key={r._id}
                    >
                      <Link to={`/my-book-list/detail/${r._id}`}>
                        <BookListDashboardCard
                          data={r}
                          className="card-book-sm md-card-book-xl"
                        />
                      </Link>
                    </div>
                  );
                })}
              </div>
            ) : (
              <NoBook />
            )}
          </>
        )}
      </div>
    </div>
  );
};

const NoBook = () => {
  return (
    <>
      <div className="w-full d-flex justify-content-center align-items-center">
        <div className="text-center">
          <img
            src={NoBookImage}
            alt=""
            className="h-full w-full max-h-104 max-w-104 md-max-h-143 md-max-w-143"
          />
          <p className="font-sm-bold mt-24 sm-h6">No Book Yet</p>
          <p className="font-xs-medium mt-8 md-font-sm-medium">
            Try go to{" "}
            <Link to="/shop" className="text-info-500">
              shop
            </Link>{" "}
            and buy book over there!
          </p>
        </div>
      </div>
    </>
  );
};

export default BookListPublicDashboard;
