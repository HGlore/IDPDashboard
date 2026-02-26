import React from 'react';

const FieldCard = ({name, value, placeholder, fieldWidth}) => {
    return (
        <div className="flex flex-col m-1 w-full">
            {/* Label on top */}
            <label className="mb-1 text-sm font-semibold text-gray-700">{name}</label>

            {/* Input below */}
            <input
                type="text"
                defaultValue={value}
                placeholder={placeholder}
                style={{width: fieldWidth || "100%"}}
                className="border rounded-sm p-2 outline-none w-full"
            />
        </div>
    );
};

export default FieldCard;