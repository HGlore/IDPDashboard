import { useEffect, useState } from 'react'
import * as imageAPI from '../../../api/imageAPI'
import {
    MdKeyboardArrowDown, MdKeyboardArrowRight
} from 'react-icons/md'

import { useNavigate } from 'react-router-dom';
import DrawerLog from './DrawerLog';

const Profile = ({ userData }) => {
    const [image, setImage] = useState(null);
    const [isOpenLog, setIsOpenLog] = useState(false);

    const toggleDrawer = () => {
        setIsOpenLog(!isOpenLog);
    };

    useEffect(() => {
        try {
            imageAPI.getProfileImage().then(res => {
                if (res.success) {
                    setImage(res.imageUrl);
                }
            });

        } catch (error) {
            console.log(error);
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
        <div className='relative'>
            <button
                onClick={toggleDrawer}
                className="text-slate-700 p-1.5 hover:text-slate-400 cursor-pointer flex items-center"
            >
                {isOpenLog ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />}
            </button>

            <div
                className={`
                    overflow-hidden transition-all duration-300 ease-in-out
                    ${isOpenLog ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
                    `}
            >
                <DrawerLog />
            </div>
        </div>
    </div>)
}

export default Profile
