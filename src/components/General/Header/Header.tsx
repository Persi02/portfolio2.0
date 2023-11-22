import React from 'react'
import { Link } from 'react-scroll';
import './style.scss';

interface Props {
    className: string
}
function Header({ className }: Props) {
    return (
        <header className={`wrap ${className} `}>
            <nav className='menu-navigation'>
                <Link className='nav-link' to="/"
                    smooth={true}
                    duration={500} >Home</Link>
                <Link className='nav-link' to='about'
                    smooth={true}
                    duration={500} >About</Link>
                <Link className='nav-link' to='mySkills'
                    smooth={true}
                    duration={500} >My Skills</Link>
                <Link className='nav-link' to='contact'
                    smooth={true}
                    duration={500} >Contact</Link>
            </nav>
        </header>
    )
}

export default Header