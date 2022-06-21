import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { defConfig, GET } from "../../../../config/RestAPI";
import BookListDashboardCard from "../../Cards/BookListDashboardCard";
import MyBookListContentLoading from "../../SkeletonLoading/MyBookListLoading/MyBookListContentLoading";

const BookListPublicDashboard = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    GET("/client/dashboard/book_list", defConfig())
      .then((r) => {
        setData(r.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  }, []);

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
              <button className="btn-outline font-normal">View All</button>
            </Link>
          </div>
        </div>
        {isLoading ? (
          <MyBookListContentLoading />
        ) : (
          <div className="mt-24 row ">
            {data.map((r, i) => {
              return (
                <div
                  className="mb-24 col-6 col-sm-4 col-md-4 col-xl-3"
                  key={r._id}
                >
                  <BookListDashboardCard
                    data={r}
                    className="card-book-sm md-card-book-xl"
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default BookListPublicDashboard;
