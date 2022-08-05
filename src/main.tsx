import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import axios from 'axios'
import { getToken } from '@services/tokenService'

import './index.css'

axios.defaults.baseURL = import.meta.env.VITE_API_BASE
const token = getToken()
if (token) {
  axios.defaults.headers.common['Authorization'] = token
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
