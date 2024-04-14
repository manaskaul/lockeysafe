import { Context, ReactNode, createContext, useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const UserAuthContext: Context<any> = createContext(null);

export const UserAuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const isLoggedIn = isUserLoggedIn;
  const setUserLogin = (isLoggedIn: boolean) => {
    setIsUserLoggedIn(isLoggedIn);
  };

  return (
    <UserAuthContext.Provider value={{ isLoggedIn, setUserLogin }}>
      {children}
    </UserAuthContext.Provider>
  );
};
