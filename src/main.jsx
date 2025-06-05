import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import AppContentProvider from './context/AppContent'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContentProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </AppContentProvider>
  </React.StrictMode>
)
