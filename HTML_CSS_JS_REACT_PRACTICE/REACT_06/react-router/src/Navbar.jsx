import { NavLink } from "react-router"
export default function Navbar() {
    return (
        <nav className="sticky w-screen h-12 flex justify-center gap-5 items-center bg-green-400 font-bold font-mono">
            <NavLink to='/' className={({ isActive }) =>
                `px-3 py-1 rounded-md transition-colors ${isActive ? "bg-pink-700 text-white" : "text-green-900 hover:bg-green-500"}`
            }>Home</NavLink>
            <NavLink to='/products' className={({ isActive }) =>
                `px-3 py-1 rounded-xl transition-all ${isActive ? "bg-red-700 text-white" : "text-green-900 hover:bg-green-500"}`
            }>Products</NavLink>
            <NavLink to='/about' className={({ isActive }) =>
                `px-3 py-1 rounded-md transition-colors ${isActive ? "bg-blue-700 text-white" : "text-green-900 hover:bg-green-500"}`
            }>About</NavLink>
        </nav>
    )
}