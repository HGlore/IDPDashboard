import React, { useState } from 'react';
import { MdLogout, MdSettings, MdSettingsCell } from 'react-icons/md';
import * as authApi from "../../../api/authAPI"
import { sweetShowMessage } from '../../../utils/ShowAlert';

const DrawerLog = () => {

    const [hover, setHover] = useState("");

    const handleLogout = async () => {
        try {
            const result = await sweetShowMessage("question", "User Logout!",
                "Are you sure you want to logout?", "Logout", "Cancel");

            if (result.isConfirmed) {
                const res = await authApi.Logout();
                if (res.success) {
                    window.location.reload();
                }
            }
        } catch (err) {
            console.error("Logout error:", err);
            alert("Logout failed!");
        }
    };

    return (
        <div
            className="absolute right-0 mt-3 w-36 bg-white shadow-lg rounded border border-gray-200 z-50"
        >
            <button
                onMouseEnter={() => setHover("setting")}
                onMouseLeave={() => setHover("")}
                className='w-full flex items-center p-2 opacity-65 hover:opacity-100 hover:bg-gray-100 rounded'
            >
                <MdSettings className={`text-gray-500 ${hover == `setting` ? "text-sky-600" : ``}`} size={20} />
                <span className='ml-2 text-sm text-slate-700 font-medium'>Setting</span>
            </button>

            <button
                onMouseEnter={() => setHover("logout")}
                onMouseLeave={() => setHover("")}
                onClick={handleLogout}
                className="w-full flex items-center p-2 opacity-65 hover:opacity-100 hover:bg-gray-100 rounded"
            >
                <MdLogout className={`text-gray-500 ${hover == "logout" ? "text-red-500" : ""} `} size={20} />
                <span className='ml-2 text-sm text-slate-700 font-medium'>Logout</span>
            </button>
        </div>
    );
};

export default DrawerLog;
