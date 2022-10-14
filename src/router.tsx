import ProductsList from "pages/ProductsList";
import Login from "pages/Login";
import { Routes, Route, Navigate } from "react-router-dom";
import { RoutePath } from "types/routes";
import Createuser from "pages/Createuser";
import Navbar from "components/Navbar";
import NavBarLoginRegister from "components/NavBarLoginRegister";
import { useState, useContext } from "react";
import BulkUpdateSettings from "pages/BulkUpdateSettings";
import UserSettings from "pages/UserSettings";
import ProductSettings from "pages/ProductSettings";
import Settings from "pages/Settings";
import AboutUs from "pages/AboutUs";
import { AuthProvider, AuthContext } from "contexts/auth";
import ProductDetails from "pages/ProductDetails";

const Router = () => {
  const Private = ({ children }: any) => {
    const { authenticated, loading } = useContext(AuthContext);
    if (loading) {
      return <div className="loading">carregando...</div>;
    }
    if (!authenticated) {
      return <Navigate to="/" />;
    }

    return children;
  };

  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path={RoutePath.LOGIN} element={<Login />} />
          <Route path={RoutePath.HOME} element={<ProductsList />} />
          <Route path={RoutePath.CREATE_USER} element={<Createuser />} />
          <Route
            path={RoutePath.ABOUT_US}
            element={
              <Private>
                <AboutUs />
              </Private>
            }
          />
          <Route
            path={RoutePath.SETTINGS}
            element={
              <Private>
                <Settings />
              </Private>
            }
          />
          <Route
            path={RoutePath.SETTINGS_PRODUCTS}
            element={
              <Private>
                <ProductSettings />
              </Private>
            }
          />
          <Route
            path={RoutePath.SETTINGS_USER}
            element={
              <Private>
                <UserSettings />
              </Private>
            }
          />
          <Route
            path={RoutePath.SETTINGS_UPDATE}
            element={
              <Private>
                <BulkUpdateSettings />
              </Private>
            }
          />
          <Route
            path={RoutePath.PRODUCT_DETAILS}
            element={
              <Private>
                <ProductDetails />
              </Private>
            }
          />
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default Router;
