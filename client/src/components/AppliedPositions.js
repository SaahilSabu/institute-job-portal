import React from "react";

const AppliedPositions = () => {
  return (
    <div className="mx-6">
      <div className=" border p-4 rounded border-gray-200">
        <h2 className=" text-2xl font-light">Positions Applied</h2>
        <h1 className="text-5xl m-4 font-semibold">2</h1>
        <li className=" list-none">
          <ul className="mb-4">
            <h3>Assistant Prof | Dept of CSE</h3>
            <div className="flex justify-end my-2">
              <button className="btn btn-success btn-sm text-xs text-white">
                Edit
              </button>
            </div>
          </ul>
          <ul>
            <h3>Assistant Prof | Dept of CSE</h3>
            <div className="flex justify-end my-2">
              <button className="btn btn-success btn-sm text-xs text-white">
                Edit
              </button>
            </div>
          </ul>
        </li>
      </div>
    </div>
  );
};

export default AppliedPositions;
