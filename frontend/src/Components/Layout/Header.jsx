import React from 'react'
import { Link } from 'react-router-dom'
import '../../App.css'
import Search from './Search'
import MusicToggle from './MusicToggle'

export const Header = () => {
    return (
        <header className="site-header">
            <div className="site-header__inner">
                <Link to="/"className="site-logo">
                    <img src="/images/nian_bean.png" alt="Shop Logo"/>
                </Link>
                <div className="site-search">
                    <Search />
                </div>
                <MusicToggle />
                <div className="site-header__actions">
                    <Link to="/cart" id="cart" className="site-header__cart" aria-label="Cart">
                        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor"
                             strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <circle cx="9" cy="20" r="1.5" />
                            <circle cx="18" cy="20" r="1.5" />
                            <path d="M2 3h3l2.7 12.4a1 1 0 0 0 1 .8h9.6a1 1 0 0 0 1-.8L21 7H6" />
                        </svg>
                        <span id="cart_count">2</span>
                    </Link>

                    <Link to="/login" id="login_btn" className="btn site-header__login">Login</Link>
                </div>
            </div>
        </header>
    )
}

export default Header