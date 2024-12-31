import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Browser from './components/Browser/Browser.jsx'
import Result from './components/Result/Result.jsx'
import getResult from './utils/getResult.js'


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route  path="/" element=<App />  >

            <Route  path='' element=<Home /> />

            <Route path="/about" element=<About /> />

            <Route path="/browser" element=<Browser /> >
                <Route path=":username" loader={getResult} element=<Result /> />
            </Route>
        </Route>
    )
)




createRoot(document.getElementById('root')).render(
  <StrictMode>
        <RouterProvider router={router} />
  </StrictMode>,
)
