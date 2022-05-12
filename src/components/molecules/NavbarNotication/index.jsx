import React from "react";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { useGlobalFunction } from "../../../services";
import { Divider } from "../../atoms";
const NavbarNotification = () => {
  const { getUserInfo } = useGlobalFunction();
  const auth = getUserInfo();
  return (
    <>
      {auth && (
        <div className="btn-group dropstart">
          <div
            className="d-flex align-items-center cursor-pointer"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <NotificationsNoneIcon className="text-neutral-400" />
            <p
              className="bg-danger fs-12 h-16 w-16 d-flex justify-content-center radius-p-100 align-items-center text-white  position-relative "
              style={{ top: "-8px", right: "12px" }}
            >
              1
            </p>
            <span className="text-secondary-400 ">|</span>
          </div>
          <div
            className="dropdown-menu bg-white radius-8 min-right-45 md-right-20 top-24  position-absolute"
            style={{
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.05)",
              boxSizing: "content-box",
            }}
          >
            <div className="w-full   w-312 md-w-432  p-24">
              <h5 className="mb-16">Notification</h5>
              <Divider height={"h-2"} lineColor="bg-secondary-500" />

              <div className="py-16 d-flex align-items-start">
                <img
                  src="/images/product.png"
                  className="h-36 w-36 radius-p-100"
                />
                <div className="ml-8">
                  <p className="font-xs">
                    <span className="font-xs-bold"> Teacher_name</span> create
                    new post on{" "}
                    <span className="font-xs-bold"> Kelas 1A IPA</span>
                  </p>
                  <p className="font-xs text-neutral-200">4h ago</p>
                </div>
              </div>
              <Divider height={"h-1"} lineColor="bg-secondary-500" />
              <div className="pt-16 d-flex align-items-start">
                <img
                  src="/images/product.png"
                  className="h-36 w-36 radius-p-100"
                />
                <div className="ml-8">
                  <p className="font-xs">
                    <span className="font-xs-bold"> Teacher_name</span> create
                    new post on{" "}
                    <span className="font-xs-bold"> Kelas 1A IPA</span>
                  </p>
                  <p className="font-xs text-neutral-200">4h ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavbarNotification;
