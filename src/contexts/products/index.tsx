import {
    createContext,
    useContext,
    ReactNode,
    useState,
    useEffect,
  } from "react";
import api from "services";
import { Product } from "types";
  
  interface ProductProviderProps {
    children: ReactNode;
  }
  
  interface ProductProviderData {
    products: Product[];
    handleGetProducts: () => void;
  }
  
  const ProductContext = createContext<ProductProviderData>({} as ProductProviderData);
  
  export const ProductProvider = ({ children }: ProductProviderProps) => {
  
    const [products, setProduct] = useState<Product[]>([]);
  
    const handleGetProducts = () => {
      const token = localStorage.getItem("token");
    
      const headers = { 
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      api.get("/products", headers).then((res) => {
      
        setProduct(res.data);
        console.log(products);
      })
    };
  
    useEffect(() => {
      handleGetProducts();
    }, []);
  
    return (
      <ProductContext.Provider value={{ products, handleGetProducts }}>{children}</ProductContext.Provider>
    );
  };
  
  export const useProducts = () => useContext(ProductContext);
  