import React, { useState } from 'react'
import { MdCircle, MdKeyboardArrowDown, MdKeyboardArrowRight, MdViewList } from 'react-icons/md'
import FilterDrawer from './FilterDrawer'

const MonitoringHeader = () => {
    const [filterStatus, setFilterStatus] = useState("All");

    const getIcon = () => {
        switch (filterStatus) {
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
                <div className='relative'>
                    <div className='flex'>
                        <button
                            className='flex border-2 pl-1 pr-1 rounded-lg text-slate-600 hover:text-slate-900 cursor-pointer items-center justify-center'>
                            {getIcon()}
                            <span className='pl-1'>{filterStatus}</span>
                            {<MdKeyboardArrowRight className='ml-5' />}
                        </button>
                        <p className='pl-1 text-sm font-semibold text-gray-400'>
                            Showing 105 of 300 billers
                        </p>
                    </div>
                    <div>
                        <FilterDrawer setFilterStatus={setFilterStatus} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MonitoringHeader
