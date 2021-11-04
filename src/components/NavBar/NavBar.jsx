import React from 'react';
import './index.css';

const NavBar = () => {
return(
    <div className="container" >
        <header className="header">
            <h1 className="logo">Logo</h1>
            <nav className="navBar">
                <ul>
                    <li>Contact</li>
                    <li>Us</li>
                    <li>Products</li>
                    <li>Home</li>
                </ul>
            </nav>
        </header>
    </div>
    )
}
export default NavBar;