import Sidebar from "./Sidebar.jsx"
import Hero from "./Hero.jsx"
import { Outlet } from "react-router-dom"


export default function Body() {


    return (
        <>
       <div className="flex">
        <Sidebar/>

        <Outlet/>
        </div>
        </>
        



    )
}