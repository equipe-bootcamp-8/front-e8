import ProductsList from "pages/ProductsList";
import Login from "pages/Login";
import { Routes, Route } from "react-router-dom";
import { RoutePath } from "types/routes";
import Createuser from "pages/Createuser";
import Navbar from "components/Navbar";
import NavBarLoginRegister from "components/NavBarLoginRegister";
import { useState } from "react";


const Router = () => {
  const [logged, setLogged] = useState(false);

  return (
    <div>
      {logged ? <Navbar /> : <NavBarLoginRegister />}

      <Routes>
        <Route path={RoutePath.LOGIN} element={<Login />} />
        <Route path={RoutePath.HOME} />
        <Route path={RoutePath.CREATE_USER} element={<Createuser />} />
        <Route path={RoutePath.ABOUT_US} />
        <Route
          path={RoutePath.PRODUCTS}
          element={<ProductsList logged={setLogged} />}
        />
        <Route path={RoutePath.SETTINGS} element={<Settings/>} />
            <Route path={RoutePath.SETTINGS_PRODUCTS} element={<ProductSettings/>} />
            <Route path={RoutePath.SETTINGS_USER} element={<UserSettings/>} />
            <Route path={RoutePath.SETTINGS_UPDATE} element={<BulkUpdateSettings/>} />
      </Routes>
    </div>
  );
};

export default Router;
