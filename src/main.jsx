import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Permanently enforce dark theme
document.documentElement.classList.add('dark');
try {
  localStorage.setItem('theme', 'dark');
} catch (e) {}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
