import React from "react";
import MainLayout from "../../../Layout/Mainlayout";
import { Divider } from "../../../atoms";

const AdminDashboard = () => {
  return (
    <MainLayout maxWidth="1440px" navbarBg="bg-white">
      <div className="mt-32">
        <div className="px-24 md-px-48">
            <h4>Administrator</h4>
            <div className="w-64 mb-24">
            <Divider lineColor={"bg-primary-500"} height="h-2" />
            </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default AdminDashboard;
