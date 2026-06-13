import React, { useEffect, useState } from 'react'
import { MdCircle, MdKeyboardArrowDown, MdKeyboardArrowRight, MdViewList } from 'react-icons/md'
import FilterDrawer from './FilterDrawer'
import { useRef } from 'react';

const MonitoringHeader = ({ setFilteredStatus }) => {
    const [showFilterDrawer, setShowFilterDrawer] = useState(false);
    const [displayStatus, setDisplayStatus] = useState("All");
    const drawerRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (drawerRef.current &&
                !drawerRef.current.contains(event.target)
            ) {
                setShowFilterDrawer(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [])

    const getIcon = () => {
        switch (displayStatus) {
            case "Online":
                return <MdCircle className='text-green-700' />;

            case "Offline":
                return <MdCircle className='text-red-700' />;

            case "Break":
                return <MdCircle className='text-amber-500' />;

            default:
                return <MdViewList className='text-blue-800' />;
        }
    }

    return (
        <div className='bg-white rounded-sm w-full items-center justify-center'>
            <hr className='text-slate-400 border-t-2 w-full' />
            <div className='pt-3'>
                <div ref={drawerRef} className='relative'>
                    <div className='flex'>
                        <button
                            onClick={() => setShowFilterDrawer(!showFilterDrawer)}
                            className='flex border-2 pl-1 pr-1 rounded-lg text-slate-600 hover:text-slate-900 cursor-pointer items-center justify-center'>
                            {getIcon()}
                            <span className='pl-1'>{displayStatus}</span>
                            {showFilterDrawer ? <MdKeyboardArrowDown className='ml-5' /> : <MdKeyboardArrowRight className='ml-5' />}
                        </button>
                        <p className='pl-1 mt-1 w-full text-sm font-semibold text-gray-400'>
                            Filter to show...
                        </p>
                        <p className='pr-1 mt-1 mr-1 w-full text-right text-sm font-semibold text-gray-400 right-0'>
                            Viewing Status of Billers
                        </p>
                    </div>
                    <div className={`absolute top-full left-0 z-50 transition-all duration-300 ease-in-out ${showFilterDrawer ? `opacity-100 pointer-events-auto` : `opacity-0 pointer-events-none`}`}
                    >
                        <FilterDrawer
                            setDisplayStatus={setDisplayStatus}
                            setShowFilter={setShowFilterDrawer}
                            setFilteredStatus={setFilteredStatus} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MonitoringHeader
