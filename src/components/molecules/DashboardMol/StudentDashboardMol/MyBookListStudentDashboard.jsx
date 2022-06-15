import React from "react";
import BookListDashboardCard from "../../Cards/BookListDashboardCard";
const MyBookListStudentDashboard = () => {
  return (
    <div className="w-full h-full radius-14 border border-secondary-500">
      <div className="py-24 px-32">
        <h6 className="md-h5">My Book List</h6>
        <div className="row mt-24 justify-content-center">
          <div className="col-6 col-sm-4 ">
            <BookListDashboardCard className="card-book-sm md-card-book-xl xl-card-book-sm" />
          </div>
          <div className="col-6 col-sm-4">
            <BookListDashboardCard className="card-book-sm md-card-book-xl xl-card-book-sm" />
          </div>
          <div className="col-4 d-none d-sm-block">
            <BookListDashboardCard className="card-book-sm md-card-book-xl xl-card-book-sm" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBookListStudentDashboard;
