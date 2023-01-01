import React,{useEffect} from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import { customerlinks} from '../../constants/data';
import Detail from '../Detail/Detail';
import Guarantors from '../Guarantors/Guarantors';
import Users from '../Users/Users';

function Dashboard() {
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
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <div>
          <Sidebar />
        </div>
        <div>
          <Routes>
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