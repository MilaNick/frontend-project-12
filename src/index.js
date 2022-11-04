import React from 'react';
import {createRoot} from 'react-dom/client';
import {I18nextProvider} from 'react-i18next';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {Provider as ProviderRollbar, ErrorBoundary} from '@rollbar/react';
import {io} from 'socket.io-client';

import i18n from 'i18n';
import store from 'store/store';

import App from 'App';
import {addChannel, removeChannel, renameChannel} from 'components/Channels/channelsSlice';
import {addMessage} from 'components/Messages/messagesSlice';

import 'assets/styles/index.scss';

const container = document.getElementById('root');
const root = createRoot(container);

const rollbarConfig = {
    accessToken: '2509ceefddee48a29de8f8bc9476cb78',
    captureUncaught: true,
    captureUnhandledRejections: true,
    payload: {
        environment: 'production',
    },
}

export const socket = io();
socket.on('newMessage', ({body, channelId, id, username}) => {
    store.dispatch(addMessage({body, channelId, id, username}));
});
socket.on('newChannel', ({id, name, removable}) => {
    store.dispatch(addChannel({id, name, removable}))
});
socket.on('removeChannel', ({id}) => {
    store.dispatch(removeChannel(id))
});
socket.on('renameChannel', ({id, name}) => {
    store.dispatch(renameChannel({id, name}))
});

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <ProviderRollbar config={rollbarConfig}>
                <ErrorBoundary>
                    <I18nextProvider i18n={i18n}>
                        <BrowserRouter>
                            <App/>
                        </BrowserRouter>
                    </I18nextProvider>
                </ErrorBoundary>
            </ProviderRollbar>
        </Provider>
    </React.StrictMode>
);
