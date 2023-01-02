import React from 'react'
import { logo, notification_icon,avatar_icon } from '../../constants/images'
import {FaSearch} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import {MdArrowDropDown} from 'react-icons/md';
import {CgMenuGridO} from 'react-icons/cg';
import './Navbar.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveMenu, setScreenSize, setShowSideMenu } from '../../redux/Features/features.action';
import { useEffect } from 'react';

const mapState = (state) => ({
  screenSize: state.features.screenSize,
  activeMenu: state.features.activeMenu,
  showSideMenu: state.features.showSideMenu,
})
function Navbar() {
  const {screenSize,showSideMenu} = useSelector(mapState);
  const dispatch = useDispatch();
  useEffect(() => {
    const handleResize = () => dispatch(setScreenSize(window.innerWidth));
    window.addEventListener('resize',handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);

    }
  },[]);
  useEffect(() => {
      if(screenSize <= 985){
        dispatch(setActiveMenu(false));
      }else {
        dispatch(setActiveMenu(true));
        dispatch(setShowSideMenu(false));
      }
  },[screenSize]); 
  const handleMenuBar = () => {
    dispatch(setShowSideMenu(!showSideMenu))
  }
  return (
    <div className='navbar-container'>
      <div className='menu-button' onClick={handleMenuBar}>
        <CgMenuGridO size={34} />
        <div>Menu</div>
      </div>
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