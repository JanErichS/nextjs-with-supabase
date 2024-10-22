"use client";
import { useEffect, useState } from "react";
import { UserContext } from "../context";
import User from "@/components/user/UserComp";
import { createClient } from "@/utils/supabase/client";

const UserProfilePage = () => {
  const supabase = createClient();
  const [user, setUser] = useState(undefined);
  const [loading, setLoading] = useState(true); // Loading allows for the fetching of userData.

  useEffect(() => {
    const fetchUser = async () => {
      const { data: userData, error } = await supabase
        .from("users")
        .select("*")
        .eq("id", 1)
        .single();

      if (userData) {
        console.log(userData);
        setUser(userData);
      }
      if (error) {
        console.error(error);
      }
      setLoading(false);
    };

    fetchUser();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Optional loading state
  }

  return (
    <UserContext.Provider value={user}>
      <User />
    </UserContext.Provider>
  );
};

export default UserProfilePage;
