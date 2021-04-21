import React from 'react';
import ReactDOM from 'react-dom';
import { AppHome } from './pages/home'
import { AppAbout } from './pages/about'
import { AppError } from './pages/error'
import { RouterProvider } from '../src/router/router';
import { Route } from '../src/router/route';

/**Routes format
 *
 * {
 *  path: "" <- Path
 *  component: <></> <- Component
 * }
 *
 */

export const WebRoutes = [
    {
        path: "/",
        component: <AppHome></AppHome>
    },
    {
        path: "/about",
        component: <AppAbout></AppAbout>
    },
    {
        path: "", // Empty string is used for the error page
        component: <AppError></AppError>
    }

]



const AppRoutes = () => <RouterProvider routeList={WebRoutes}>
    {WebRoutes.filter((route) => route.path).map((route, k) => <Route key={k} path={route.path}>{route.component}</Route>)}
</RouterProvider>


ReactDOM.render(
    <AppRoutes></AppRoutes>,
    document.getElementById("root")
);

export default AppRoutes;