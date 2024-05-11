import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {NextUIProvider} from '@nextui-org/react'
import Vbackground from "./components/Vbackground.jsx";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
    <Vbackground />
    <App />
    </NextUIProvider>
  </React.StrictMode>,
)
