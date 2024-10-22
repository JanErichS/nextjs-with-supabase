
import { UserDetails } from "@/@types/user.types";
import { createContext, useContext } from "react";

export const UserContext = createContext<UserDetails | undefined>(undefined);

export const useUserContext = () => {
    const user = useContext(UserContext);
    if (user === undefined) {
        throw new Error("useUserContext must be used within a UserProvider");
    }
    return user;
}