import React, { createContext, useState, useEffect, ReactNode, useContext } from "react";
import { useNavigate } from "react-router-dom";
import api from "services";
import toast from "react-hot-toast";
import axios from "axios";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthProviderData {
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  user: User;
  loading: boolean;
  logged: boolean;
}

export interface User {
  id?: string;
  name: string;
  email: string;
  password?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

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

    localStorage.setItem("token", token);

    api.defaults.headers.Authorization = `Bearer ${token}`;
    setUser(response);
    setLogged(true);
    navigate("/home");
    toast.success(`Welcome`, { duration: 5000, icon: "🤗" });
  };

  const logout = () => {
    api.defaults.headers.Authorization = null;
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    setLogged(false);
    navigate("/home");
    toast.success(`GoodBye`, { duration: 5000, icon: "👋" });
  };

  const checkTokenExpiration = () => {
    const user = JSON.parse(localStorage.getItem("user") || "");
    const token = localStorage.getItem("token");

    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .get(`/users/${user.id}`, headers)
      .then(() => {
        setLogged(true);
        navigate("/");
      })
      .catch(() => {
        logout();
        toast.error("Session expired! Please login again!");
      });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) checkTokenExpiration();
  }, []);

  return <AuthContext.Provider value={{ user, loading, login, logout, logged }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
