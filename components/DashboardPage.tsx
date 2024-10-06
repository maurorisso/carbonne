import React from "react";

type Props = {
  title: string;
  description: string;
  children: React.ReactNode;
};

function DashboardPage({ title, children, description }: Props) {
  return (
    <div className="max-w-full p-6 h-full flex flex-col ">
      <div className="flex items-center md:mb-6 md:mt-0 lg:mb-8 mb-0">
        <header className="flex w-full max-w-full items-center truncate">
          <div className="w-full truncate ltr:mr-4 rtl:ml-4 md:block">
            <h3 className="font-cal max-w-28 sm:max-w-72 md:max-w-80 text-emphasis truncate font-semibold tracking-wide sm:text-xl md:block xl:max-w-full text-xl hidden">
              {title}
            </h3>
            <p
              className="text-default hidden text-sm md:block"
              data-testid="subtitle"
            >
              {description}{" "}
            </p>
          </div>
        </header>
      </div>

      <div className=" border rounded-md flex flex-col justify-center items-center flex-1">
        {children}
      </div>
    </div>
  );
}

export default DashboardPage;
