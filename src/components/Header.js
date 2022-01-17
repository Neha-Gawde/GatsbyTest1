import { Link } from 'gatsby'
import React from 'react'

function Header() {
    return (
        <div>
            <h1>Neha Gawde</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/blog">Blog Post</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
