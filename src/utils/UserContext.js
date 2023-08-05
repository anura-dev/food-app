import { createContext } from "react";

//create default context data
const UserContext = createContext({
    loggedInUser: "Default User"
}) ;

export default UserContext;