import React, { useContext, useLayoutEffect, useState } from 'react';
import { pathToRegexp } from 'path-to-regexp';
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

    const components = routes.map((_route, key) => {

        const keys = [];
        let parser = new pathToRegexp(_route.props.path ?? "", keys);
        let similar = parser.exec(route.path);

        if(_route.props.path != route.path && !similar) return _route;

        const params = keys.reduce((_, curr, index, __) => {
            curr[curr.name] = similar[index + 1];
            return curr;
        }, {});

        return similar ? React.cloneElement(_route.props.children, { path: similar[0], params: params, key: _route.key}) : _route

    });

    useLayoutEffect(() => {
        let unlisten = history.listen(handleRouteChange);
        return () => {
            unlisten();
        };
    }, []);

    return (
        <RouterContext.Provider value={{ route }}>
            {components.length == 0 ? routes.find((route) => !route.props.path).props.children ?? <p>Not path found</p> : components}
        </RouterContext.Provider>
    );
};

const useRouter = () => useContext(RouterContext);

export { useRouter, RouterProvider, history };