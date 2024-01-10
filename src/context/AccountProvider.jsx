import { createContext, useCallback, useState } from "react";
import { profile_data } from "../data/raw_data";
import PropTypes from "prop-types";
export const AccountContext = createContext(null);

export function AccountProvider({ children }) {
  const [defaultAccount, setDefaultAccount] = useState(profile_data[0]);
  const onChangeAccount = useCallback((account) => {
    setDefaultAccount(account);
  }, []);
  return (
    <AccountContext.Provider value={{ defaultAccount, onChangeAccount }}>
      {children}
    </AccountContext.Provider>
  );
}

AccountProvider.propTypes = {
  children: PropTypes.node,
};
