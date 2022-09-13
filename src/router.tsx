import ProductsList from "pages/ProductsList";
import { Routes, Route } from "react-router-dom";
import { RoutePath } from "types/routes";

const Router = () => {
  return (
    <Routes>
      <Route path={RoutePath.LOGIN} />
      <Route path={RoutePath.HOME} />
      <Route path={RoutePath.CREATE_USER} />
      <Route path={RoutePath.ABOUT_US} />
      <Route path={RoutePath.PRODUCTS} element={<ProductsList />} />
      <Route path={RoutePath.SETTINGS} />
    </Routes>
  );
};

export default Router;
