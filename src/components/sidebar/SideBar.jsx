import React, { use } from 'react';
import { NavLink, Outlet } from "react-router-dom";
import {
    MdHome,
    MdMonitor,
    MdAnalytics,
} from "react-icons/md";
import Header from '../header/Header';

const SideNavBar = ({ userData, date, setDate }) => {

    const activeClass = "bg-slate-700 font-bold";

    return (
        <div className="flex min-h-screen">
            {/* Side Bar */}
            <aside className="
                              bg-slate-800 text-white p-5
                              w-16 sm:w-20 md:w-48 lg:w-55
                              min-h-screen
                              hidden sm:block
                              ">
                <h2 className='flex items-center justify-center font-extrabold text-xs md:text-sm lg:text-base'>
                    IDP Web System</h2>
                <nav className='flex-1 mt-6 md:mt-10'>

                    {/* Dasboard */}
                    <div className='rounded-xl'>
                        <NavLink
                            to="/dashboard"
                            className={({ isActive }) =>
                                `group flex items-center gap-2 md:gap-3 px-2 md:px-3 py-2 rounded-lg
                        transition-all duration-150
                        hover:bg-slate-700 hover:font-bold ${isActive ? activeClass : ""}`
                            }
                        >
                            <MdHome className="text-base md:text-lg" />
                            <span className="hidden md:inline">Dashboard</span>
                        </NavLink>
                    </div>

                    <h3 className='mt-6 md:mt-8 opacity-75 text-xs md:text-sm'>Data</h3>
                    {/* Monitoring */}
                    <div className='rounded-xl p-0.5'>
                        <NavLink to="/monitoring"
                            className={({ isActive }) =>
                                `group flex items-center gap-2 md:gap-3 px-2 md:px-3 py-2 rounded-lg
                        transition-all duration-150
                        hover:bg-slate-700 hover:font-bold ${isActive ? activeClass : ""}`
                            }>
                            <MdMonitor className="text-base md:text-lg" />
                            <span className="hidden md:inline">Monitoring</span>
                        </NavLink>
                    </div>
                    {/* Data Analytics */}
                    <div className='rounded-xl p-0.5'>
                        <NavLink to="/analytics"
                            className={({ isActive }) =>
                                `group flex items-center gap-2 md:gap-3 px-2 md:px-3 py-2 rounded-lg
                        transition-all duration-150
                        hover:bg-slate-700 hover:font-bold ${isActive ? activeClass : ""}`
                            }>
                            <MdAnalytics className="text-base md:text-lg" />
                            <span className="hidden md:inline">Data Analytics</span>
                        </NavLink>
                    </div>
                </nav>
            </aside>
            {/* Header */}
            <div className='flex-1 flex flex-col'>
                <div className='m-1 rounded-sm'>
                    <Header userData={userData} date={date} setDate={setDate} />
                </div>

                <main className="flex-1 p-1">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default SideNavBar;
