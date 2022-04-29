import React from 'react'
import {NavLink} from 'react-router-dom'
import "../NavBar'/index.css"
function NavBarWrapper () {
  return (
    <nav className='navbar NAVBAR navbar-expand-lg navbar-light bg-light'>
      <div className='container-fluid'>
        <a className='navbar-brand'>Navbar</a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item Link '>
              <NavLink className='btn-primary Link rounded '  to="/home">
                <strong>Home</strong>
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className=' btn-warning active-red Link rounded'  to="create-user">
              <strong>Create Product</strong>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBarWrapper
