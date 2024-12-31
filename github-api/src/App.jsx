import { createBrowserRouter, createRoutesFromElements, Outlet, Route, Routes } from "react-router-dom"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"




function App() {


    return (
        <>
            <div className="h-dvh flex flex-col justify-between">
                <Header />

                <div className="h-full w-dvw overflow-auto bg-slate-200 flex flex-col items-center justify-center">
                    <Outlet />
                </div>

                <Footer />
            </div>
        </>
    )
}

export default App
