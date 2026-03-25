import React, { useState, useEffect } from 'react';

const FieldCard = ({ label, keyField, value, placeholder, fieldWidth, setEntry, parentKey, isBrowse }) => {
    const [inputValue, setInputValue] = useState(value || "");

    useEffect(() => {
        setInputValue(value || "");
    }, [value]);

    const handleChange = (e) => {
        const newValue = e.target.value;
        setInputValue(newValue);

        if (!parentKey) {
            setEntry(prev => ({
                ...prev,
                [keyField]: newValue
            }));
        } else if (parentKey === "items") {
            setEntry(prev => ({
                ...prev,
                items: prev.items.map((item, i) =>
                    i === index ? { ...item, [keyField]: newValue } : item
                )
            }));
        } else if (parentKey && parentKey !== "items") {
            setEntry(prev => ({
                ...prev,
                [parentKey]: {
                    ...prev[parentKey],
                    [keyField]: newValue
                }
            }));
        }
    };

    return (
        <div className="flex flex-col m-1 w-full">
            <label className="mb-1 text-sm font-semibold text-gray-700">{label}</label>
            <input
                type="text"
                readOnly={isBrowse}
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