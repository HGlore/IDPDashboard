import React, { use } from 'react'
import Search from './components/Search'
import Profile from './components/Profile'
import DatePicker from './components/DatePicker'

const Header = ({ userData, date, setDate }) => {
    return (
        <div className='flex bg-white p-1 shadow-[0_0_15px_rgba(0,0,0,0.4)] rounded-sm items-center justify-center'>
            <div className='hidden md:block ml-1'>
                <h1 className='text-2xl font-black text-slate-800'>
                    Welcome!!!
                </h1>
                <p className='font-serif'>Happy to see you!, Please enjoy!!!😊</p>
            </div>

            {/* Search & Profile Site */}
            <div className='flex ml-auto items-center justify-center'>
                <DatePicker date={date} setDate={setDate} />
                <div className="w-px h-6 bg-gray-400 ml-2 mr-2"></div>
                <Profile userData={userData} />
            </div>
        </div>
    )
}

export default Header
