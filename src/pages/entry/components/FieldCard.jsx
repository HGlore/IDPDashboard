import React, { useState, useEffect } from 'react';

const FieldCard = ({ name, value, placeholder, fieldWidth, onChange }) => {
    const [inputValue, setInputValue] = useState(value || "");

    useEffect(() => {
        setInputValue(value || "");
    }, [value]);

    const handleChange = (e) => {
        setInputValue(e.target.value);
        onChange?.(e.target.value);
    };

    return (
        <div className="flex flex-col m-1 w-full">
            <label className="mb-1 text-sm font-semibold text-gray-700">{name}</label>
            <input
                type="text"
                value={inputValue}
                placeholder={placeholder}
                onChange={handleChange}
                style={{ width: fieldWidth || "100%" }}
                className="border rounded-sm p-2 outline-none w-full"
            />
        </div>
    );
};

export default FieldCard;