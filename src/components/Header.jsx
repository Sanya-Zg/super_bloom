import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../assets/images/Logo.svg';
import burgerIcon from '../assets/images/burger_icon.png';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const setActive = ({ isActive }) => `item_menu ${isActive ? 'active_link' : ''}`;

  return (
    <header className="flex justify-between items-center relative">

      {/* Logo */}
      <Link to='/' className="ml-6 md:ml-[34px]" aria-label="Go to homepage">
        <img src={logo} alt="" aria-hidden='true'/>
      </Link>

      {/* Burger menu */}
      <button 
        className="mr-6 my-2.5 md:hidden z-20 cursor-pointer" 
        aria-label="Toggle menu"
        aria-expanded={menuOpen}  
        onClick={() => setMenuOpen(prev => !prev)}
      >
        <img src={burgerIcon} alt="" aria-hidden='true'/>
      </button>

      {/* Navigation */}
      <nav className={`
          flex-col md:flex-row md:flex items-start md:items-center gap-4 md:gap-0 absolute md:static top-20 left-0 w-full md:w-auto bg-white md:bg-transparent px-6 md:px-0 py-6 md:py-0 shadow-md md:shadow-none transition-all duration-300
          ${menuOpen ? 'flex' : 'hidden'}
        `} aria-label="Main navigation">
        <NavLink to='/forum' className={setActive} onClick={() => setMenuOpen(false)}>Forum</NavLink>
        <NavLink to='/events' className={setActive} onClick={() => setMenuOpen(false)}>Events</NavLink>
        <NavLink to='/therapy' className={setActive} onClick={() => setMenuOpen(false)}>Therapy</NavLink>
        <NavLink to='/journal' className={setActive} onClick={() => setMenuOpen(false)}>Journal</NavLink>
        <div className="flex mx-auto md:ml-5 pt-4 md:pt-0">
          <NavLink to='/login' className={setActive} style={{borderLeft: '1px solid var(--green-dark-opacity)'}} onClick={() => setMenuOpen(false)}>Login</NavLink>
          <NavLink to='/signup' className={setActive} style={{whiteSpace:'nowrap'}} onClick={() => setMenuOpen(false)}>Sign up for therapy</NavLink>
        </div>
      </nav>

    </header>
  )
}

