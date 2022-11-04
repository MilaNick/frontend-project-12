import React from 'react';
import {createRoot} from 'react-dom/client';
import {I18nextProvider} from 'react-i18next';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {Provider as RollbarProvider, ErrorBoundary, LEVEL_WARN} from '@rollbar/react';

import i18n from 'i18n';
import store from 'store/store';

import App from 'App';
import {ErrorDisplay, rollbarConfig} from 'utils/init';
import 'assets/styles/index.scss';

const container = document.getElementById('root');
const root = createRoot(container);


root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RollbarProvider config={rollbarConfig}>
                <ErrorBoundary level={LEVEL_WARN}  fallbackUI={ErrorDisplay}>
                    <I18nextProvider i18n={i18n}>
                        <BrowserRouter>
                            <App/>
                        </BrowserRouter>
                    </I18nextProvider>
                </ErrorBoundary>
            </RollbarProvider>
        </Provider>
    </React.StrictMode>
);
