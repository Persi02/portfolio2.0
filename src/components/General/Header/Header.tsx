import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss';

function Header() {
    return (
        <header className='wrap'>
            <nav className='menu-navigation'>
                <Link className='nav-link' to=''>Home</Link>
                <Link className='nav-link' to=''>About</Link>
                <Link className='nav-link' to=''>My Skills</Link>
                <Link className='nav-link' to=''>Profissional Experience</Link>
                <Link className='nav-link' to=''>Contact</Link>
            </nav>
        </header>
    )
}

export default Header