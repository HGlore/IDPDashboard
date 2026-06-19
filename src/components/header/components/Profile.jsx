import { useEffect, useState } from 'react'
import * as imageAPI from '../../../api/imageAPI'
import {
    MdKeyboardArrowDown, MdKeyboardArrowRight
} from 'react-icons/md'

import { useNavigate } from 'react-router-dom';
import DrawerLog from './DrawerLog';
import { useRef } from 'react';

const Profile = ({ userData, setLoggedIn }) => {
    const [image, setImage] = useState(null);
    const [isOpenLog, setIsOpenLog] = useState(false);
    const drawerRef = useRef(null);

    const toggleDrawer = () => {
        setIsOpenLog(!isOpenLog);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (drawerRef.current &&
                !drawerRef.current.contains(event.target)
            ) {
                setIsOpenLog(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        try {
            imageAPI.getProfileImage().then(res => {
                if (res.success) {
                    setImage(res.imageUrl);
                } else {
                    setLoggedIn(false);
                }
            });

        } catch (error) {
            setLoggedIn(false);
            console.warn(error);
        }
    }, []);

    return (<div className='flex items-center space-x-3 border-slate-200 mr-2'>
        <img
            src={image || ''}
            alt='User'
            className='w-10 h-10 rounded-full ring-2 ring-slate-700'
        />
        <div className='hidden md:block'>
            <p className='text-sm font-bold text-slate-700'>
                {userData.companyID}
            </p>
            <p className='text-xs text-slate-500'>
                {userData.role}
            </p>
        </div>
        <div ref={drawerRef} className='relative'>
            <button
                onClick={toggleDrawer}
                className="text-slate-700 p-1.5 hover:text-slate-400 cursor-pointer flex items-center"
            >
                {isOpenLog ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />}
            </button>

            <div
                className={`
                            absolute top-full right-0 z-50 
                            transition-all duration-300 ease-in-out
                            ${isOpenLog ? "max-h-96 opacity-100 pointer-events-auto" : "max-h-0 opacity-0 pointer-events-none"}
                          `}
            >
                <DrawerLog />
            </div>
        </div>
    </div>)
}

export default Profile
