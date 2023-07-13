import { createContext, FC, ReactElement, useContext, useState } from "react";

const userContext = createContext<{
  userId: string | null;
  setUserId: React.Dispatch<React.SetStateAction<string | null>>;
} | null>(null);

const UserContextProvider: FC<{ children: ReactElement }> = ({ children }) => {
  const [userId, setUserId] = useState<string | null>(() =>
    localStorage.getItem("userId")
  );

  return (
    <userContext.Provider value={{ userId, setUserId }}>
      {children}
    </userContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(userContext);
  if (!context) throw new Error("user context provider not fount");

  return context;
};

export default UserContextProvider;
