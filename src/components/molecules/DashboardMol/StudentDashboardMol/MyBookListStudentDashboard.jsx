import React, { useEffect, useState } from "react";
import { defConfig, GET } from "../../../../config/RestAPI";
import BookListDashboardCard from "../../Cards/BookListDashboardCard";
import MyBookListContentLoading from "../../SkeletonLoading/MyBookListLoading/MyBookListContentLoading";
const MyBookListStudentDashboard = () => {
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
    <div className="w-full h-full radius-14 border border-secondary-500">
      <div className="py-24 px-32">
        <h6 className="md-h5">My Book List</h6>
        {isLoading ? (
          // <MyBookListContentLoading />
          <>Loading</>
        ) : (
          <div className="mt-24 row ">
            {data.map((r, i) => {
              return (
                <>
                  <div
                    className="mb-24 col-6 col-sm-4 col-md-4 col-xl-4"
                    key={r._id}
                  >
                    <BookListDashboardCard data={r} className="card-book-xl " />
                  </div>
                </>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyBookListStudentDashboard;
