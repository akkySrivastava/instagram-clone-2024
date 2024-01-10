import { useContext } from "react";
import { AccountContext } from "../context/AccountProvider";

export const useAccount = () => useContext(AccountContext)