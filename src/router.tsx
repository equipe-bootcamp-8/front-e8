import BulkUpdateSettings from 'pages/BulkUpdateSettings';
import ProductSettings from 'pages/ProductSettings';
import Settings from 'pages/Settings';
import UserSettings from 'pages/UserSettings';
import { Routes, Route } from 'react-router-dom';
import { RoutePath } from 'types/routes';

const Router = () => {
    return (
        <Routes>
            <Route path={RoutePath.LOGIN}  />
            <Route path={RoutePath.HOME}  />
            <Route path={RoutePath.CREATE_USER}  />
            <Route path={RoutePath.ABOUT_US}  />
            <Route path={RoutePath.PRODUCTS}  />
            <Route path={RoutePath.SETTINGS} element={<Settings/>} />
            <Route path={RoutePath.SETTINGS_PRODUCTS} element={<ProductSettings/>} />
            <Route path={RoutePath.SETTINGS_USER} element={<UserSettings/>} />
            <Route path={RoutePath.SETTINGS_UPDATE} element={<BulkUpdateSettings/>} />
        </Routes>
    );
}

export default Router;