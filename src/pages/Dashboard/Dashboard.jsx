import React,{useEffect} from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import { customerlinks} from '../../constants/data';
import Detail from '../Detail/Detail';
import Guarantors from '../Guarantors/Guarantors';
import Users from '../Users/Users';
import './dashboard.scss';

const mapState = state => ({
  activeMenu: state.features.activeMenu,
  showSideMenu: state.features.showSideMenu
});
function Dashboard() {
  const {activeMenu,showSideMenu} = useSelector(mapState);
  const routePath = useLocation();
  const navigate = useNavigate();
  useEffect(() => { 
    const link = customerlinks.find((item) => item.route === routePath.pathname);
    if(link){
      navigate(routePath.pathname);
    }else{
      navigate('/dashboard/users');
    }
}, []);
  return (
    <div className="dashboard-container">
      <div className="top-dashboard-content">
        <Navbar />
      </div>
      <div className='botttom-dashboard-content'>
        {
          activeMenu ? (
            <div>
              <Sidebar />
            </div>
          )
          :
          <div className={showSideMenu ? 'view-sidemenu': 'hid-sidemenu'}>
            <Sidebar />
          </div>
        }
        
        <div>
          <Routes>
          <Route path="overview" element={<Users />} />
            <Route path="users" element={<Users />} />
            <Route path="guarantors" element={<Guarantors />} />
            <Route path="users/:id" element={<Detail />} />
          </Routes>
        </div> 
      </div>
    </div>
  )
}

export default Dashboard