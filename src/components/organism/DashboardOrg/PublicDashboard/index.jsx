import React from "react";
import { AtlazMediaBg, RedeemNewBook } from "../../../../assets/images";
import { defConfig, GET } from "../../../../config/RestAPI";
import { usePublicDashboard } from "../../../../services";
import { GlobalToast } from "../../../atoms";
import MainLayout from "../../../Layout/Mainlayout";
import {
  BookListPublicDashboard,
  BoxDashboardCard,
  EditProfilePublicDashboard,
  ReedemPublicDashboard,
} from "../../../molecules";
const PublicDashboard = () => {
  const {
    isLoadingRedeem,
    dataRedeem,
    dataBookList,
    isLoadingBookList,
    redeemBookAction,
  } = usePublicDashboard();

  return (
    <MainLayout maxWidth="1440px" navbarBg="bg-white">
      <GlobalToast />
      <div className="my-32 px-24 md-px-48">
        <div className="row">
          <div className="col-12 col-xl-8">
            <ReedemPublicDashboard
              isLoading={isLoadingRedeem}
              data={dataRedeem}
              redeemBookAction={redeemBookAction}
            />
            <div className="mt-24 ">
              <BookListPublicDashboard
                data={dataBookList}
                isLoading={isLoadingBookList}
              />
            </div>
          </div>
          <div className="col-12 col-xl-4 h-175">
            <div className="row mt-24 xl-mt-0 h-auto ">
              <div className="col-6 col-xl-12 d-none d-md-block">
                <EditProfilePublicDashboard />
              </div>
              <div className="col-6 col-md-3 h-148 md-h-auto xl-h-173 col-xl-6 xl-mt-22 xl-mt-24 xl-mt-0">
                <BoxDashboardCard
                  bgImage={RedeemNewBook}
                  bgColor="#FCF7ED"
                  link="https://media.hiatlaz.com/media.hiatlaz.com"
                  isToExternal={true}
                  title={
                    <span>
                      Atlaz <br /> Media
                    </span>
                  }
                />
              </div>
              <div className="col-6 col-md-3 col-xl-6 h-148 md-h-auto xl-h-173 xl-mt-22 xl-mt-24 xl-mt-0">
                <BoxDashboardCard
                  bgImage={AtlazMediaBg}
                  bgColor="#EAEDFB"
                  link="/user/edit-profile"
                  title={
                    <span>
                      Reddem <br /> New Book
                    </span>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default PublicDashboard;
