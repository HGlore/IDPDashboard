import React, { use, useEffect, useState } from 'react'
import Search from './components/Search'
import Profile from './components/Profile'
import DatePicker from './components/DatePicker'
import RequestForEntry from './components/RequestForEntry'
import * as requestAPI from './../../api/requestAPI'

const Header = ({ userData, date, setDate }) => {
    const [canRequest, setCanRequest] = useState(false);

    useEffect(() => {
        const checkForRequest = async () => {
            try {
                const freeForRequest = await requestAPI.ongoingEntries();
                setCanRequest(!freeForRequest);

            } catch (error) {
                throw new Error(error.freeForRequest?.data?.message || error.message);
            }
        };

        checkForRequest();
    }, [canRequest]);

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
                <RequestForEntry setCanRequest={canRequest} />
                <DatePicker date={date} setDate={setDate} />
                <div className="w-px h-6 bg-gray-400 ml-2 mr-2"></div>
                <Profile userData={userData} />
            </div>
        </div>
    )
}

export default Header
