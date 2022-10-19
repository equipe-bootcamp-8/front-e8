import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
  SetStateAction,
} from "react";
import api from "services";
import { Category } from "types";

interface CategoryProviderProps {
  children: ReactNode;
}

interface CategoryProviderData {
  categories: Category[];
  handleGetCategories: () => void;
}

const CategoryContext = createContext<CategoryProviderData>(
  {} as CategoryProviderData
);

export const CategoryProvider = ({ children }: CategoryProviderProps) => {
  const [categories, setCategory] = useState<Category[]>([]);

  const handleGetCategories = () => {
    const token = localStorage.getItem("token");

    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    api
      .get("/categories", headers)
      .then((res: { data: SetStateAction<Category[]> }) => {
        setCategory(res.data);
      });
  };

  useEffect(() => {
    handleGetCategories();
  }, []);

  return (
    <CategoryContext.Provider value={{ categories, handleGetCategories }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategories = () => useContext(CategoryContext);
