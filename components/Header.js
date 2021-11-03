// import React from 'react'
import Image from 'next/image';

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
            <button className="mobile-nav-toggle" aria-controls="primary-navigation" aria-expanded="false"><span className="sr-only">Menu</span></button>
            <nav>
                <ul id="primary-navigation" data-visible="false" className="primary-navigation underline-indicators flex">
                    <li className='active'><a className="ff-sans-cond uppercase text-white letter-spacing-2" href="index.html"><span aria-hidden="true">00</span>Home</a></li>
                    <li><a className="ff-sans-cond uppercase text-white letter-spacing-2" href="destination.html"><span aria-hidden="true">01</span>Destination</a></li>
                    <li><a className="ff-sans-cond uppercase text-white letter-spacing-2" href="crew.html"><span aria-hidden="true">02</span>Crew</a></li>
                    <li><a className="ff-sans-cond uppercase text-white letter-spacing-2" href="technology.html"><span aria-hidden="true">03</span>Technology</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
