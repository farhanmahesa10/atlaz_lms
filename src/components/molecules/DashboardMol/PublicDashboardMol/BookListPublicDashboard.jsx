import React from "react";
import { Link } from "react-router-dom";

import BookListDashboardPublicCard from "../../Cards/BookListDashboardPublicCard";

const BookListPublicDashboard = () => {
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
            <Link to="/">
              <button className="btn-outline font-normal">View All</button>
            </Link>
          </div>
        </div>
        <div className="mt-24 row ">
          <div className="mb-24 col-6 col-sm-4 col-md-4 col-xl-3">
            <BookListDashboardPublicCard />
          </div>
          <div className="mb-24 col-6 col-sm-4 col-md-4 col-xl-3">
            <BookListDashboardPublicCard />
          </div>
          <div className="mb-24 col-6 col-sm-4 col-md-4 col-xl-3">
            <BookListDashboardPublicCard />
          </div>
          <div className="mb-24 col-6 col-sm-4 col-md-4 col-xl-3">
            <BookListDashboardPublicCard />
          </div>
          <div className="mb-24 col-6 col-sm-4 col-md-4 col-xl-3">
            <BookListDashboardPublicCard />
          </div>
          <div className="mb-24 col-6 col-sm-4 col-md-4 col-xl-3">
            <BookListDashboardPublicCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookListPublicDashboard;
