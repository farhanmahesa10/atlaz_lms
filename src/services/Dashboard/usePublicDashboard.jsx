import React, { useEffect, useState } from "react";
import { defConfig, GET, POST } from "../../config/RestAPI";
import useGlobalFunction from "../GlobalFuntions/useGlobalFunction";

const usePublicDashboard = () => {
  const [isLoadingRedeem, setIsLoadingRedeem] = useState(true);
  const [dataRedeem, setDataRedeem] = useState(null);
  const [dataBookList, setDataBookList] = useState([]);
  const [isLoadingBookList, setIsLoadingBookList] = useState(true);
  const [isLoadingProfile, setIsLoadingProfile] = useState(true);
  const [dataProfile, setDataProfile] = useState(null);

  const { setFlashMessage } = useGlobalFunction();
  useEffect(() => {
    initBookList();
    initRedeem();
    initProfile();
  }, []);

  const initProfile = () => {
    setIsLoadingBookList(true);
    GET("/users/profile", defConfig())
      .then((r) => {
        setDataProfile(r.data);
        setIsLoadingProfile(false);
      })
      .catch((err) => {
        setIsLoadingProfile(false);
      });
  };

  const initRedeem = () => {
    setIsLoadingRedeem(true);
    GET("/client/dashboard/recent", defConfig())
      .then((r) => {
        if (r.data) setDataRedeem(r.data.subject);

        setIsLoadingRedeem(false);
      })
      .catch((err) => {
        setIsLoadingRedeem(false);
      });
  };

  const initBookList = () => {
    setIsLoadingBookList(true);
    GET("/client/dashboard/book_list", defConfig())
      .then((r) => {
        setDataBookList(r.data);
        setIsLoadingBookList(false);
      })
      .catch((err) => {
        setIsLoadingBookList(false);
      });
  };

  const redeemBookAction = (codeCoupon) => {
    setIsLoadingRedeem(true);
    POST("/client/dashboard/claim_coupon", { codeCoupon }, defConfig())
      .then((r) => {
        setFlashMessage("Redeem Successful", "You added new book to the list");
        initBookList();
        initRedeem();
      })
      .catch((err) => {
        // console.log(err.response);
        setFlashMessage("Redeem Failed", err.response?.data?.message, false);
        setIsLoadingRedeem(false);
      });
  };

  return {
    isLoadingRedeem,
    dataRedeem,
    dataBookList,
    isLoadingBookList,
    redeemBookAction,
    isLoadingProfile,
    dataProfile,
  };
};

export default usePublicDashboard;
