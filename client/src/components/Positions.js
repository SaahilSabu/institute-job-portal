import React from "react";
import { ChevronRightIcon } from "@heroicons/react/outline";

const Positions = ({ job }) => {
  return (
    <div>
      <div className="flex flex-col ml-auto mr-auto center justify-center  bg-white w-11/12 p-2 sm:w-3/5 sm:p-4 ">
        <div className="flex justify-between items-center border-t-2 border-gray-200 ml-4 py-3">
          <div className="cursor-pointer">
            <h2 className="text-xl font-medium transform transition duration-500 hover:text-[#020493]  ">
              {job.role}
            </h2>
            <h3 className=" font-light">{job.validity}</h3>
            <h3 className="text-xs">
              {job.createdAt.split("T")[0]} | {job.dept}
            </h3>
          </div>
          <div>
            <ChevronRightIcon className="h-5  transform transition duration-500  hover:scale-150 hover:text-[#020493] " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Positions;
