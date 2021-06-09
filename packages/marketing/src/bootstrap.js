import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './App'



// Mount function to start the app
const mount = (el, { onNavigate, defaultHistory, initialPath }) => {
    
    const history = defaultHistory || createMemoryHistory({
        initialEntries: [initialPath]
    })
    
    if (onNavigate) {
        history.listen(onNavigate);
    };
    
    ReactDOM.render(
        <App history={history}/>,
        el
    );

    return {
        onParentNavigate({ pathname: nextPathname }) {
            const { pathname } = history.location;

            if (pathname !== nextPathname) {
                history.push(nextPathname)
            }
        }
    };
};

// If in development mode and isolation, call mount immediately
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_marketing_dev_root');
    if (devRoot) {
        mount(devRoot, { defaultHistory: createBrowserHistory() });
    };
};

// else running through container --> export mount
export { mount };