import React from 'react';
import { briefcase_icon } from '../../constants/images';
import './Sidebar.scss';
function Sidebar() {
  return (
    <div className='sidebar-container'>
        <div>
          <div>
            <div>
              <img src={briefcase_icon} alt="switch organization icon" />
            </div>
            <div>
              <span>Switch Organization</span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Sidebar