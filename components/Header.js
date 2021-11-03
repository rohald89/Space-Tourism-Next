import Link from 'next/link';
import { useRouter } from 'next/router';
import Nav from './Nav';

const Header = () => {
    return (
        <header className="primary-header flex">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" className="logo">
                    <g fill="none" fillRule="evenodd">
                        <circle cx="24" cy="24" r="24" fill="#FFF"/>
                        <path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/>
                    </g>
                </svg>
            </div>
            <Nav />
        </header>
    )
}

export default Header
