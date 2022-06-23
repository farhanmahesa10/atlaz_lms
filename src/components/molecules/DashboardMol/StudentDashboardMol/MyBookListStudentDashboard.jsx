import React from "react";
import BookListDashboardCard from "../../Cards/BookListDashboardCard";
import MyBookListContentLoading from "../../SkeletonLoading/MyBookListLoading/MyBookListContentLoading";
const MyBookListStudentDashboard = (props) => {
  const { data, isLoading } = props;
  return (
    <div className="w-full h-full radius-14 border border-secondary-500">
      <div className="py-24 px-32">
        <h6 className="md-h5">My Book List</h6>
        {isLoading ? (
          <MyBookListContentLoading />
        ) : (
          <div className="mt-24 row ">
            {data.map((r, i) => {
              return (
                <React.Fragment key={r._id + "-" + i}>
                  <div className="mb-24 col-6 col-sm-4 col-md-4 col-xl-4">
                    <BookListDashboardCard data={r} className="card-book-xl " />
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyBookListStudentDashboard;
