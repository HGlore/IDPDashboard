import React from 'react'
import { AnimatePresence, motion } from "framer-motion"
import { NavLink } from "react-router-dom";
import {
    MdHome,
    MdMonitor,
    MdGroups,
} from "react-icons/md";
import { ArrowLeftFromLine, ArrowLeftIcon, ArrowRight, Menu } from 'lucide-react';

const NavContent = ({ isLessWidth, setVisibleMenu }) => {
    const activeClass = "bg-slate-700 font-bold";

    return (
        <motion.aside>
            {
                (isLessWidth) ? (
                    <motion.div>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            onClick={() => setVisibleMenu(false)}
                            className='flex items-center justify-center hover:opacity-80 size-10 bg-slate-700 rounded-full cursor-pointer'>
                            <ArrowLeftIcon size={20} className='text-white' />
                        </motion.button>
                    </motion.div>)
                    :
                    (<motion.h2 className='flex items-center justify-center font-extrabold text-xs md:text-sm lg:text-base'>
                        IDP Web System
                    </motion.h2>)
            }
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

                {/* Users */}
                <div className='rounded-xl p-0.5'>
                    <NavLink to="/users"
                        className={({ isActive }) =>
                            `group flex items-center gap-2 md:gap-3 px-2 md:px-3 py-2 rounded-lg
                        transition-all duration-150
                        hover:bg-slate-700 hover:font-bold ${isActive ? activeClass : ""}`
                        }>
                        <MdGroups className="text-base md:text-lg" />
                        <span className="hidden md:inline">Users</span>
                    </NavLink>
                </div>
            </nav>
        </motion.aside>
    )
}

export default NavContent