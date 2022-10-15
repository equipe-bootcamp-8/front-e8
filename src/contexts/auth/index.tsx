import React, {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from "react";
import { useNavigate } from "react-router-dom";
import api from "services";
import toast from "react-hot-toast";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthProviderData {
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  user: User;
  loading: boolean;
  logged: boolean
}

export interface User {
  id?: string;
  name: string;
  email: string;
  password?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export const AuthContext = createContext<AuthProviderData>(
  {} as AuthProviderData
);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [logged, setLogged] = useState(false);
  const navigate = useNavigate();

  const createAuth = async (email: string, password: string) => {
    return api.post("/auth", { email, password }).catch(() => {
      toast.error("Invalid username or password");
    });
  };

  useEffect(() => {
    const recoveredUser = localStorage.getItem("user");

    if (recoveredUser) {
      setUser(JSON.parse(recoveredUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    const response = await createAuth(email, password);

    const loggedUser = response.data.user;
    const token = response.data.token;

    localStorage.setItem("user", JSON.stringify(loggedUser));
    console.log(response);

    localStorage.setItem("token", token);

    api.defaults.headers.Authorization = `Bearer ${token}`;
    setUser(response);
    setLogged(true)
    navigate("/home");
    toast.success(`Welcome ${user.name} `, { duration: 5000 });
  };

  const logout = () => {
    api.defaults.headers.Authorization = null;
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    setLogged(false)
    navigate("/home");
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, login, logout, logged }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);