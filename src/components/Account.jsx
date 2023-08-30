import React from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Account = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
      console.log("You are logged out");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <>
      <div className=" text-center bg-sky-200	max-w-[600px] mx-auto my-16 p-4">
        <h1 className=" text-center text-2xl font-bold py-4">Account Details</h1>
        <img
              className="mx-auto mt-5 mb-5 h-20 w-20 rounded-full"
              src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
              alt=""
            />
        <p className="text-center">User Email: {user && user.email}</p>
       
        <button
          onClick={handleLogout}
          className=" text-center border px-6 py-2 my-4 rounded-full text-white bg-red-500"
        >
          Logout
        </button>
      </div>
    </>
  );
};

export default Account;
