import React from 'react'
import { createRoot } from "react-dom/client"
import './index.css'
import App from './App.js'

const Root = document.getElementById('root')
const root = createRoot(Root)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)