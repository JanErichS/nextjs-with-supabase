
import { createContext, useContext } from "react";

type UserDetails = {
    username: string;
    email?: string;
    name: string;

}
export const UserContext = createContext<UserDetails | undefined>(undefined);

export const useUserContext = () => {
    const user = useContext(UserContext);
    if (user === undefined) {
        throw new Error("useUserContext must be used within a UserProvider");
    }
    return user;
}