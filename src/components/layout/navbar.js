import React from 'react'
import { Link, NavLink } from 'react-router-dom'
export const Navbar = () => {
  return (
    <nav class='navbar navbar-expand-lg navbar-light bg-light'>
      <Link class='navbar-brand' hexact to='/'>
        CRUD React
      </Link>
      <button
        class='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span class='navbar-toggler-icon'></span>
      </button>

      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item active'>
            <NavLink className='nav-link' hexact to='/'>
              Home <span className='sr-only'>(current)</span>
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className='nav-link' exact to='/about'>
              About
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className='nav-link' exact to='/contact'>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <Link className='nav-link' exact to='/adduser'>
        Add User
      </Link>
    </nav>
  )
}

export default Navbar
