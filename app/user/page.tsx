"use client";
import { useContext } from "react";
import { UserContext, useUserContext } from "../context";
import User from "@/components/user/user";

const UserProfilePage = () => {
  const user = {
    name: "John Doe",
    username: "johndoe",
    email: "gY7eE@example.com",
  };
  return (
    <UserContext.Provider value={user}>
      <User />
    </UserContext.Provider>
  );
};

export default UserProfilePage;
