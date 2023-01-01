import React from 'react'
import { logo, notification_icon,avatar_icon } from '../../constants/images'
import {FaSearch} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import {MdArrowDropDown} from 'react-icons/md';
import './Navbar.scss';
function Navbar() {
  return (
    <div className='navbar-container'>
      <div className='l-navbar-content'>
        <div className='nav-logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='nav-input-container'>
          <input placeholder="Search for anything" type='text'  />
          <div className='search-btn'>
            <FaSearch/>
          </div>
        </div>
      </div>
      <div className='r-navbar-content'>
        <span>
          <Link>Doc</Link>
        </span>
        <div className='notification-icon'>
          <img src={notification_icon} alt="notifications" />
        </div>
        <div className='user-account'>
          <div>
            <img src={avatar_icon} alt="avatar" />
          </div>
          <div className="user-name">
            <span>Adedeji</span>
            <div>
              <MdArrowDropDown />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar