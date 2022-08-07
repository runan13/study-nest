import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

// Routing
const NavBar: NextPage = () => {
    const router = useRouter()
    
    return (
        <nav>
            <Link href="/">
                <a style={{color: router.pathname === "/" ? "red": "blue"}}>Link</a>
            </Link>
            <Link href="/about">
                <a style={{color: router.pathname === "/about" ? "red": "blue"}}>Link</a>
            </Link>
        </nav>
    )
}

export default NavBar