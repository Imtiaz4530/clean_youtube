import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import React from 'react'
import ReactDOM from 'react-dom/client'
import { StoreProvider } from 'easy-peasy'

import App from './App.jsx'
import store from './Store/store.js'
import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <StoreProvider store={store}>
        <App />
    </StoreProvider>
)
