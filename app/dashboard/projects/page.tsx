import { Button } from "@/components/ui/button";
import React from "react";
import DashboardPage from "@/components/DashboardPage";

const page = () => {
  const description = "Find and manage all your projects here.";
  return (
    <DashboardPage title="Projects" description={description}>
      <div className=" text-xl font-cal ">No projects created</div>
      <p className="text-muted-foreground my-2">
        Create a new project to get started.{" "}
      </p>
      <Button variant="accent">Create Project</Button>
    </DashboardPage>
  );
};

export default page;
