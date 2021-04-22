import React, { useContext, useLayoutEffect, useState } from 'react';
import { createBrowserHistory } from 'history';
import { locationToRoute } from './utils';
import { Route } from './route';

const history = createBrowserHistory();
export const RouterContext = React.createContext({
    route: locationToRoute(history),
});

const RouterProvider = ({ children }) => {
    const routes = children.filter((child) => child.type == Route);

    const [route, setRoute] = useState(locationToRoute(history.location));

    const handleRouteChange = ({ location }) => {
        const route = locationToRoute(location);
        setRoute(route);
    };

    const is404 = routes.find(_route => _route.props.path == route.path) == undefined;

    useLayoutEffect(() => {
        let unlisten = history.listen(handleRouteChange);
        return () => {
            unlisten();
        };
    }, []);

    return (
        <RouterContext.Provider value={{ route }}>
            {is404 ? routes.find((route) => !route.props.path).props.children ?? <p>Not path found</p> : children}
        </RouterContext.Provider>
    );
};

const useRouter = () => useContext(RouterContext);

export { useRouter, RouterProvider, history };