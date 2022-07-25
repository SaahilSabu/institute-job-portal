import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { ChevronRightIcon } from "@heroicons/react/outline";
import { Image } from "cloudinary-react";
import { useNavigate } from "react-router-dom";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const navigateToUserInfo = (id) => {
    navigate(`/userinfo/${id}`);
  };

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
      {users
        .slice(0)
        .reverse()
        .map((user) => {
          if (!user.isAdmin) {
            return (
              <div key={user._id}>
                <div className="flex flex-col ml-auto mr-auto center justify-center  bg-white w-11/12 p-2 sm:w-3/5 sm:p-4 ">
                  <div className="flex justify-between items-center ml-4 py-3">
                    <div className="flex items-center">
                      <div>
                        <div className="cursor-pointer">
                          <h2
                            className="text-xl font-medium transform transition duration-500 hover:text-[#020493]"
                            onClick={() => navigateToUserInfo(user._id)}
                          >
                            {user.username}
                          </h2>
                          <h3 className=" font-light">{user.validity}</h3>
                          <h3 className="text-xs">
                            {user.createdAt.split("T")[0]} | {user.email}
                          </h3>
                          <h3 className=" font-light">
                            Post applied: {user.post}
                          </h3>
                        </div>
                      </div>
                      <div className="">
                        {user.userPPUrl ? (
                          <div className="avatar flex justify-center">
                            <div className="w-20 mx-4">
                              <Image
                                className="flex w-56 mb-4 flex-col m-auto h-40 bg-contain lg:w-80 lg:mb-auto rounded-full"
                                cloudName="saahildev"
                                publicId={user.userPPUrl}
                              />
                            </div>
                          </div>
                        ) : (
                          <div className="avatar flex justify-center">
                            <div className="w-20 mx-4">
                              <img
                                src="https://cdn.pixabay.com/photo/2016/04/22/04/57/graduation-1345143__340.png"
                                alt="default_profile"
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div>
                      <ChevronRightIcon
                        className="h-5  transform transition duration-500  hover:scale-150 hover:text-[#020493] "
                        onClick={() => navigateToUserInfo(user._id)}
                      />
                    </div>
                  </div>
                </div>
                <div className="divider w-1/2 m-auto"></div>
              </div>
            );
          }
        })}
    </div>
  );
};

export default UserList;
