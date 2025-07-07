import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link, Outlet,useLocation } from 'react-router-dom';
import { SideNav } from './SideNav';
import './Dashboard.css'
import { IconContext } from 'react-icons';
import DashboardData from './DashboardData';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
const location = useLocation();
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
    <section className='dashboard'>
  <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} style={{marginLeft:'1rem'}}/> 
          </Link>
           <h4 className='text-white ps-3 mb-0'>AdminTechHub</h4>
        </div>
          
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SideNav.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
          <Outlet/>
      </IconContext.Provider>
    </section>
{location.pathname === "/dashboard" && <DashboardData />}
    </>
  );
}

export default Navbar;