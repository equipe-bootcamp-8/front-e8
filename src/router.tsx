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
          element={<ProductsList setLogged={setLogged} />}
        />
        <Route path={RoutePath.SETTINGS} />
      </Routes>
    </div>
  );
};

export default Router;
