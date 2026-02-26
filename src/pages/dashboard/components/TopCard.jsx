import React from 'react'

const TopCard = ({icon: Icon, value, name}) => {
    return (<div
        className="bg-white shadow-[0_0_10px_rgba(0,0,0,0.4)] rounded-lg p-4 flex items-center space-x-4 min-h-10 min-w-30">
        {/* Icon */}
        <div className="text-lg xl:text-3xl lg:block xl:blocks text-blue-500">
            <Icon/>
        </div>

        {/* Value & Name */}
        <div>
            <div className="text-sm xl:text-xl font-bold">{value}</div>
            <div className="text-sm xl:text-gray-500">{name}</div>
        </div>
    </div>);
};

export default TopCard