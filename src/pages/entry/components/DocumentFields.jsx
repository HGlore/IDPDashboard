import React from 'react';
import FieldCard from "./FieldCard.jsx";

const DocumentFields = ({ titleName }) => {
    const fields = [
        { name: "Date", value: "12/8/2023", placeholder: "Date..." },
        { name: "StartTime", value: "2024-04-26 23:04:22", placeholder: "StartTime..." },
        { name: "EndTime", value: "2024-04-26 23:04:46", placeholder: "EndTime..." },
        { name: "Image", value: "20231214-BOL-ORG-116-103100-1214-103224886_1.tif", placeholder: "Image..." },
        { name: "AccountType", value: "", placeholder: "AccountType..." },
        { name: "DetectedAccountType", value: "LOW", placeholder: "DetectedAccountType..." },
        { name: "BOLNumber", value: "254210467", placeholder: "BOLNumber..." },
        { name: "MasterBOLNumber", value: "", placeholder: "MasterBOLNumber..." },
        { name: "PONumber", value: "", placeholder: "PONumber..." },
        { name: "QuoteNumber", value: "", placeholder: "QuoteNumber..." },
        { name: "Terms", value: "3rd Party", placeholder: "Terms..." },
        { name: "ShipperNumber", value: "", placeholder: "ShipperNumber..." },
        { name: "Pronumber", value: "006-1234567-1", placeholder: "Pronumber..." },
        { name: "RANumber", value: "", placeholder: "RANumber..." },
        { name: "EControlNumber", value: "", placeholder: "EControlNumber..." },
        { name: "DriverNumber", value: "514926", placeholder: "DriverNumber..." },
        { name: "RunNumber", value: "0944", placeholder: "RunNumber..." },
        { name: "CubicFeet", value: "", placeholder: "CubicFeet..." },
        { name: "TimeDeparted", value: "", placeholder: "TimeDeparted..." },
        { name: "TimeArrived", value: "", placeholder: "TimeArrived..." },
    ];

    return (
        <div className="p-4 border rounded-md shadow-sm bg-white">
            {titleName && (
                <h2 className="flex text-lg font-bold text-gray-800 mb-2 justify-center">{titleName}</h2>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {fields.map((field, idx) => (
                    <FieldCard
                        key={idx}
                        name={field.name}
                        value={field.value}
                        placeholder={field.placeholder}
                        fieldWidth="full"
                    />
                ))}
            </div>
        </div>
    );
};

export default DocumentFields;