import React from "react";
import { useUserContext } from "../context/userContext";

const AccountPage = () => {
  const { page, setPage, user, logOutUser } = useUserContext();
  console.log(user);
  return (
    <div>
      <div className=" bg-white max-w-xs sm:max-w-sm mx-auto mt-10 p-10 rounded-xl shadow-xl ">
        <p className=" font-semibold">Signed in as {user.displayName}</p>
        <p className=" mt-1 font-medium">{user.email}</p>
        <p onClick={logOutUser} className=" cursor-pointer hover:shadow-lg bg-gray-900 text-white text-center p-2 mt-5 rounded-md active:bg-black">Click here to Logout</p>
      </div>
    </div>
  );
};

export default AccountPage;
