import React from 'react'
import { NavLink } from 'react-router-dom';
import './sidebarItem.scss';
function SidebarItem({data,handleCloseSidebar}) {
  return (
    <div className='sidebarItem-container'>
        <NavLink
          to={`${data.route}`}
          className={({isActive}) => isActive ? 'link-active' : 'link'}
          onClick={handleCloseSidebar}
        >
          <div>
            <img src={data.icon} alt="home icon" />
          </div>
          <div className="nav-list">
            <span>{data.name}</span>
          </div>
        </NavLink>
    </div>
  )
}

export default SidebarItem