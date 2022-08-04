import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import axios from 'axios'

import './index.css'

axios.defaults.baseURL = import.meta.env.VITE_API_BASE

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
