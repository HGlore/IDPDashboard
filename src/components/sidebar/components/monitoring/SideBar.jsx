import React, { use, useEffect, useState } from 'react';
import { NavLink, Outlet } from "react-router-dom";
import Header from '../../../header/Header';
import { AnimatePresence, motion } from "framer-motion"
import NavContent from './NavContent';

const SideNavBar = ({ userData, date, setDate, setLoggedIn, isLessWidth, visibleMenu, setVisibleMenu }) => {

    return (
        <motion.div className="flex min-h-screen">
            {/* Side Bar */}
            <AnimatePresence mode='wait'>
                {visibleMenu &&
                    (
                        <motion.aside
                            initial={{ x: -250, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className={`
                                      bg-slate-800 text-white p-5
                                        w-20 sm:w-20 md:w-48 lg:w-55
                                        min-h-screen}
                                      `}
                        >

                            <NavContent isLessWidth={isLessWidth} setVisibleMenu={setVisibleMenu} />
                        </motion.aside>
                    )
                }
            </AnimatePresence>
            {!isLessWidth &&
                (
                    <motion.aside
                        className={`
                                      bg-slate-800 text-white p-5
                                        w-20 sm:w-20 md:w-48 lg:w-55
                                        min-h-screen
                            ${visibleMenu && "hidden"}
                                      `}>

                        <NavContent isLessWidth={isLessWidth} setVisibleMenu={setVisibleMenu} />
                    </motion.aside>
                )}
            {/* Header */}
            <motion.div className='flex-1 flex flex-col'>
                <motion.div className='m-1 rounded-sm'>
                    <Header userData={userData} date={date} setDate={setDate} setLoggedIn={setLoggedIn} isLessWidth={isLessWidth} visibleMenu={visibleMenu} setVisibleMenu={setVisibleMenu} />
                </motion.div>

                <main className="flex-1 p-1">
                    <Outlet />
                </main>
            </motion.div>
        </motion.div >
    );
};

export default SideNavBar;
