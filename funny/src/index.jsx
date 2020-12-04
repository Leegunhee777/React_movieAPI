import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

// App store
import store, { history } from '@app/store';

// App root component
import App from './components/App';

// Render React components.
ReactDOM.render((
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <App />
            </ConnectedRouter>
        </Provider>
    ),
    document.getElementById('root')
);
