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

const Router = () => {
  const [logged, setLogged] = useState(false);
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
      {logged ? <Navbar /> : <NavBarLoginRegister />}

      <AuthProvider>
        <Routes>
          <Route
            path={RoutePath.LOGIN}
            element={<Login logged={setLogged} />}
          />
          <Route path={RoutePath.HOME} />
          <Route
            path={RoutePath.CREATE_USER}
            element={<Createuser logged={setLogged} />}
          />
          <Route
            path={RoutePath.ABOUT_US}
            element={
              <Private>
                <AboutUs />
              </Private>
            }
          />
          <Route
            path={RoutePath.PRODUCTS}
            element={
              <Private>
                <ProductsList logged={setLogged} />
              </Private>
            }
          />
          <Route
            path={RoutePath.SETTINGS}
            element={
              <Private>
                <Settings logged={setLogged} />
              </Private>
            }
          />
          <Route
            path={RoutePath.SETTINGS_PRODUCTS}
            element={
              <Private>
                <ProductSettings logged={setLogged} />
              </Private>
            }
          />
          <Route
            path={RoutePath.SETTINGS_USER}
            element={
              <Private>
                <UserSettings logged={setLogged} />
              </Private>
            }
          />
          <Route
            path={RoutePath.SETTINGS_UPDATE}
            element={
              <Private>
                <BulkUpdateSettings logged={setLogged} />
              </Private>
            }
          />
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default Router;
