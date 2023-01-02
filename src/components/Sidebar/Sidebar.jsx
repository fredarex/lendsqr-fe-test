import React from 'react';
import { briefcase_icon, home_icon } from '../../constants/images';
import {NavLink} from 'react-router-dom';
import {MdKeyboardArrowDown} from 'react-icons/md';
import './Sidebar.scss';
import { bussinessLinks, customerlinks, settingLinks } from '../../constants/data';
import SidebarItem from '../SidebarItem/SidebarItem';
import { FaTimes } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveMenu, setShowSideMenu } from '../../redux/Features/features.action';

const mapState = (state) => ({
  screenSize: state.features.screenSize,
  activeMenu: state.features.activeMenu
})
function Sidebar() {
  const {screenSize,activeMenu} = useSelector(mapState);
  const dispatch = useDispatch();
  const handleCloseSidebar = () => {
    if(activeMenu && screenSize <= 985) {
      dispatch(setActiveMenu(false));
    }
    if(screenSize <= 985) {
      dispatch(setShowSideMenu(false));
    }
  }
  return (
    <div className='sidebar-container'>
      <div className='cancel-sidebar' onClick={handleCloseSidebar}>
          <FaTimes size={24} color="#fff" />
        </div>
      <div className='sidebar-contents'>
        <div
          className='link switch-organization'
        >
          <div>
            <img src={briefcase_icon} alt="switch organization icon" />
          </div>
          <div className="nav-list">
            <span>Switch Organization</span>
            <div>
              <MdKeyboardArrowDown />
            </div>
          </div>
        </div>
        <NavLink
          to='/dashboard/overview'
          className={({isActive}) => isActive ? 'link-active' : 'link'}
          id="dashboard"
          onClick={handleCloseSidebar}
        >
          <div>
            <img src={home_icon} alt="home icon" />
          </div>
          <div className="nav-list">
            <span>Dashboard</span>
          </div>
        </NavLink>
        <div className='links-container'>
          <div className='links-content'>
            <div className='links-header'>CUSTOMERS</div>
            <div>
              {
                customerlinks.map((item,index) => (
                  <SidebarItem data={item} key={index} handleCloseSidebar={handleCloseSidebar} />
                ))
              }
            </div>
          </div>
          <div className='links-content'>
            <div className='links-header'>BUSINESSES</div>
            <div>
              {
                bussinessLinks.map((item,index) => (
                  <SidebarItem data={item} key={index} handleCloseSidebar={handleCloseSidebar} />
                ))
              }
            </div>
          </div>
          <div className='links-content'>
            <div className='links-header'>SETTINGS</div>
            <div>
              {
                settingLinks.map((item,index) => (
                  <SidebarItem data={item} key={index} handleCloseSidebar={handleCloseSidebar} />
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar