import React from "react";
import Skeleton from "react-loading-skeleton";
const OutlineListLoadingAccordionMyBookList = (props) => {
  const { isLoading, status, data } = props;
  return (
    <>
      {isLoading ? (
        <>
          <Skeleton height={"40px"} width="100%" className="mb-12" />
          <Skeleton height={"40px"} width="100%" />
        </>
      ) : status === "success" ? (
        data && (
          <>
            {/* {data.length < 1 && (
              <div className="w-full h-40 mt-8 border radius-4 d-flex align-items-center justify-content-center">
                <p className="font-bold">No data found</p>
              </div>
            )} */}
          </>
        )
      ) : (
        <>
          <div className="w-full h-40 mt-8 border radius-4 d-flex align-items-center justify-content-center">
            <h5>Something went wrong</h5>
          </div>
        </>
      )}
    </>
  );
};

export default OutlineListLoadingAccordionMyBookList;
