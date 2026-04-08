import React from 'react'
import { MdCircle, MdViewList } from 'react-icons/md'

const FilterDrawer = ({ setFilterStatus }) => {

    return (
        <div className='absolute w-23 bg-white shadow-lg rounded-lg border-2 border-gray-200 z-100'>
            <div>
                <button
                    onClick={() => setFilterStatus("All")}
                    className='flex text-left hover:bg-slate-200 w-full pl-1 rounded-lg items-center'>
                    <MdViewList className='text-blue-800' />
                    <span className='pl-1'>All</span>
                </button>
            </div>
            <div>
                <button
                    onClick={() => setFilterStatus("Online")}
                    className='flex text-left hover:bg-slate-200 w-full pl-1 rounded-lg items-center'>
                    <MdCircle className='text-green-700' />
                    <span className='pl-1'>Online</span>
                </button>
            </div>
            <div>
                <button
                    onClick={() => setFilterStatus("Offline")}
                    className='flex text-left hover:bg-slate-200 w-full pl-1 rounded-lg items-center'>
                    <MdCircle className='text-red-700' />
                    <span className='pl-1'>Offline</span>
                </button>
            </div>
            <div>
                <button
                    onClick={() => setFilterStatus("Break")}
                    className='flex text-left hover:bg-slate-200 w-full pl-1 rounded-lg items-center'>
                    <MdCircle className='text-amber-500' />
                    <span className='pl-1'>Break</span>
                </button>
            </div>
        </div>
    )
}

export default FilterDrawer
