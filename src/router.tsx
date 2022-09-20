import ProductsList from "pages/ProductsList";
import Login from "pages/Login";
import { Routes, Route } from "react-router-dom";
import { RoutePath } from "types/routes";
import Createuser from "pages/Createuser";
import Navbar from "components/Navbar";
import NavBarLoginRegister from "components/NavBarLoginRegister";
import { useState } from "react";
import BulkUpdateSettings from "pages/BulkUpdateSettings";
import UserSettings from "pages/UserSettings";
import ProductSettings from "pages/ProductSettings";
import Settings from "pages/Settings";
import AboutUs from "pages/AboutUs";

const Router = () => {
  const [logged, setLogged] = useState(false);

  return (
    <div>
      {logged ? <Navbar /> : <NavBarLoginRegister />}

      <Routes>
        <Route path={RoutePath.LOGIN} element={<Login logged={setLogged} />} />
        <Route path={RoutePath.HOME} />
        <Route
          path={RoutePath.CREATE_USER}
          element={<Createuser logged={setLogged} />}
        />
        <Route path={RoutePath.ABOUT_US}  element={<AboutUs />}
        />
        <Route
          path={RoutePath.PRODUCTS}
          element={<ProductsList logged={setLogged} />}
        />
        <Route
          path={RoutePath.SETTINGS}
          element={<Settings logged={setLogged} />}
        />
        <Route
          path={RoutePath.SETTINGS_PRODUCTS}
          element={<ProductSettings logged={setLogged} />}
        />
        <Route
          path={RoutePath.SETTINGS_USER}
          element={<UserSettings logged={setLogged} />}
        />
        <Route
          path={RoutePath.SETTINGS_UPDATE}
          element={<BulkUpdateSettings logged={setLogged} />}
        />
      </Routes>
    </div>
  );
};

export default Router;
