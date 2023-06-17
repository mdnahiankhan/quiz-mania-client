import React from 'react';
import Navbar from '../../Pages/Shared/Navbar/Navbar';
import { Link, Outlet } from 'react-router-dom';

const DashBoardLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer lg:drawer-open">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-white text-base-content">
                        <li><Link to='/dashboard'>Answer Info</Link></li>
                        <li><Link to='/dashboard/allusers'>All User</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashBoardLayout;