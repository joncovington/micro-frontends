import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
// Mount function to start the app
const mount = (el) => {
    ReactDOM.render(
        <App />,
        el
    )
};

// If in development mode and isolation, call mount immediately
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_marketing_dev_root');
    if (devRoot) {
        mount(devRoot);
    };
};

// else running through container --> export mount
export { mount };