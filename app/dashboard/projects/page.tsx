import { Button } from "@/components/ui/button";
import React from "react";

const page = () => {
  return (
    <div className="border h-full p-10  rounded-md flex flex-col justify-center items-center">
      <div className=" text-xl ">No projects created</div>
      <p className="text-muted-foreground">
        Create a new project to get started.{" "}
      </p>
      <Button className="mt-4 bg-accent text-white" size="lg">
        Create Project
      </Button>
    </div>
  );
};

export default page;
