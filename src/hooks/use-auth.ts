import { useContext } from "react";
import { UserAuthContext } from "../contexts/user-auth";

export const useAuth = () => {
  return useContext(UserAuthContext);
};
