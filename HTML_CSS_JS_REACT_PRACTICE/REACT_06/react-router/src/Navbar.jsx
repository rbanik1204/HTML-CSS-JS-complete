import { Link } from "react-router"
export default function Navbar() {
    return (
        <nav className="flex justify-center gap-5 items-center bg-green-400 font-bold font-mono">
            <Link to='/'>Home</Link>
            <Link to='/products'>Products</Link>
            <Link to='/about' >About</Link>
        </nav>
    )
}