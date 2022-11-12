import ProductsList from "pages/ProductsList";
import Login from "pages/Login";
import { Routes, Route, Navigate } from "react-router-dom";
import { RoutePath } from "types/routes";
import Createuser from "pages/Createuser";
import BulkUpdateSettings from "pages/BulkUpdateSettings";
import UserSettings from "pages/UserSettings";
import ProductSettings from "pages/ProductSettings";
import Settings from "pages/Settings";
import AboutUs from "pages/AboutUs";
import ProductDetails from "pages/ProductDetails";
import CategoriesSettings from "pages/CategoriesSettings";
import Validations from "pages/Validations";
import { useAuth } from "contexts/auth";

const Router = () => {
  const token = localStorage.getItem("token");
  const { user } = useAuth();

  return (
    <Routes>
      {token ? (
        user.active ? (
          <>
            <Route path={RoutePath.SETTINGS} element={<Settings />} />
            <Route
              path={RoutePath.SETTINGS_PRODUCTS}
              element={<ProductSettings />}
            />
            <Route
              path={RoutePath.SETTINGS_CATEGORIES}
              element={<CategoriesSettings />}
            />
            <Route path={RoutePath.SETTINGS_USER} element={<UserSettings />} />
            <Route
              path={RoutePath.SETTINGS_UPDATE}
              element={<BulkUpdateSettings />}
            />
            <Route
              path={RoutePath.PRODUCT_DETAILS}
              element={<ProductDetails />}
            />
          </>
        ) : (
          <>
            <Route path={RoutePath.HOME} element={<ProductsList />} />
            <Route path={RoutePath.ABOUT_US} element={<AboutUs />} />
            <Route path={RoutePath.VALIDATE} element={<Validations />} />
            <Route path={RoutePath.VALIDATE_USER} element={<Validations />} />
          </>
        )
      ) : (
        <>
          <Route path={RoutePath.HOME} element={<ProductsList />} />
          <Route path={RoutePath.LOGIN} element={<Login />} />
          <Route path={RoutePath.CREATE_USER} element={<Createuser />} />
          <Route path={RoutePath.ABOUT_US} element={<AboutUs />} />
        </>
      )}
      <Route
        path="*"
        element={
          <Navigate
            to={
              token
                ? "/home" && user.active
                  ? "/settings"
                  : "/validate"
                : "/home"
            }
            replace
          />
        }
      />
    </Routes>
  );
};

export default Router;
