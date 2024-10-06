import React from "react";
import DashboardPage from "@/components/DashboardPage";
const CreatePage = () => {
  const description = "Manage , create and view all your projects here.";
  return (
    <DashboardPage title="Dashboard" description={description}>
      <div className="border rounded-md flex flex-col justify-center items-center"></div>
    </DashboardPage>
  );
};

export default CreatePage;
