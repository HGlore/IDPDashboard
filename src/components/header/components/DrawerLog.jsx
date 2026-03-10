import React from 'react';
import { MdLogout } from 'react-icons/md';
import * as authApi from "../../../api/authAPI"

const DrawerLog = () => {
    const handleLogout = async () => {
        try {
            await authApi.Logout();
            window.location.reload();
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
                onClick={handleLogout}
                className="w-full flex items-center p-2 hover:bg-gray-100 rounded"
            >
                <MdLogout className='text-red-500' size={20} />
                <span className='ml-2 text-sm text-slate-700 font-medium'>Logout</span>
            </button>
        </div>
    );
};

export default DrawerLog;
