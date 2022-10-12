import { createContext, ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  children?: ReactNode;
}

interface authInitial {
  email: string;
  password: string;
  date: string;
}

export type initialAuth = {
  auth: authInitial;
  handleAuth: (e: any) => void;
  handleLogout: () => void;
};

const AuthContext = createContext<initialAuth>({} as initialAuth);

const initialData: authInitial = {
  email: "",
  password: "",
  date: "",
};

const AuthProvider = ({ children }: Props) => {
  let link = useNavigate()
  const [auth, setAuth] = useState(initialData);

  const handleAuth = (e: any) => {
    setAuth(e);
    localStorage.setItem("user", JSON.stringify(e));
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    link("/")
  };

  const data = { auth, handleAuth, handleLogout };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export { AuthProvider };
export default AuthContext;
