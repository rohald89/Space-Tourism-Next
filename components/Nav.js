import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";

const Nav = () => {
    const {pathname} = useRouter();
    const [ isOpen, setIsOpen ] = useState(false);

    const toggleMenu = (e) => {
        setIsOpen(prev => !prev);
    }

    const pages = ['home', 'destination', 'crew', 'technology']

    return (
        <>
            <button onClick={toggleMenu} className="mobile-nav-toggle" aria-controls="primary-navigation" aria-expanded={isOpen}><span className="sr-only">Menu</span></button>
            <nav>
                <ul id="primary-navigation" data-visible={isOpen} className="primary-navigation underline-indicators flex">
                    { pages.map((page, i) => (
                        <li key={page} className={pathname === page ? 'active' : ''}>
                            <Link href={`${page === 'home' ? "/" : `/${page}`}`}>
                                <a className="ff-sans-cond uppercase text-white letter-spacing-2"><span aria-hidden="true">0{i}</span>{page}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
}

export default Nav
