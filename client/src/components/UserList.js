import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { ChevronRightIcon } from "@heroicons/react/outline";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const { data } = await axios.get("/api/admin/getallusers");
        setUsers(data.users);
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, []);
  return (
    <div className="">
      <h3 className="text-center font-light text-4xl">Userlist</h3>
      {users.map((user) => {
        return (
          <div key={user._id}>
            <div className="flex flex-col ml-auto mr-auto center justify-center  bg-white w-11/12 p-2 sm:w-3/5 sm:p-4 ">
              <div className="flex justify-between items-center border-t-2 border-gray-200 ml-4 py-3">
                <div className="cursor-pointer">
                  <h2 className="text-xl font-medium transform transition duration-500 hover:text-[#020493]  ">
                    {user.username}
                  </h2>
                  <h3 className=" font-light">{user.validity}</h3>
                  <h3 className="text-xs">
                    {user.createdAt.split("T")[0]} | {user.email}
                  </h3>
                </div>
                <div>
                  <ChevronRightIcon className="h-5  transform transition duration-500  hover:scale-150 hover:text-[#020493] " />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UserList;
