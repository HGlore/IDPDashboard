import React from 'react';
import FieldCard from "./FieldCard.jsx";

const DocumentFields = ({ document }) => {

    const fields = [
        { name: "Date", value: `${document?.date}`, placeholder: "Date..." },
        { name: "StartTime", value: `${document?.startTime}`, placeholder: "StartTime..." },
        { name: "EndTime", value: `${document?.endTime}`, placeholder: "EndTime..." },
        { name: "Image", value: `${document?.image}`, placeholder: "Image..." },
        { name: "AccountType", value: `${document?.accountType}`, placeholder: "AccountType..." },
        { name: "DetectedAccountType", value: `${document?.detectedAccType}`, placeholder: "DetectedAccountType..." },
        { name: "BOLNumber", value: `${document?.bolNumber}`, placeholder: "BOLNumber..." },
        { name: "MasterBOLNumber", value: `${document?.masterBolNumber}`, placeholder: "MasterBOLNumber..." },
        { name: "PONumber", value: `${document?.poNumber}`, placeholder: "PONumber..." },
        { name: "QuoteNumber", value: `${document?.quoteNumber}`, placeholder: "QuoteNumber..." },
        { name: "Terms", value: `${document?.terms}`, placeholder: "Terms..." },
        { name: "ShipperNumber", value: `${document?.shipperNumber}`, placeholder: "ShipperNumber..." },
        { name: "Pronumber", value: `${document?.proNumber}`, placeholder: "Pronumber..." },
        { name: "RANumber", value: `${document?.raNumber}`, placeholder: "RANumber..." },
        { name: "EControlNumber", value: `${document?.eControlNumber}`, placeholder: "EControlNumber..." },
        { name: "DriverNumber", value: `${document?.driverNumber}`, placeholder: "DriverNumber..." },
        { name: "RunNumber", value: `${document?.runNumber}`, placeholder: "RunNumber..." },
        { name: "CubicFeet", value: `${document?.cubicFeet}`, placeholder: "CubicFeet..." },
        { name: "TimeDeparted", value: `${document?.timeDeparted}`, placeholder: "TimeDeparted..." },
        { name: "TimeArrived", value: `${document?.timeArrived}`, placeholder: "TimeArrived..." },
    ];

    return (
        <div className="p-4 border rounded-md shadow-sm bg-white">
            <h2 className="flex text-lg font-bold text-gray-800 mb-2 justify-center">Documents</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {fields.map((field, idx) => (
                    <FieldCard
                        key={document?.id + idx}
                        name={field.name}
                        value={field.value}
                        placeholder={field.placeholder}
                    />
                ))}
            </div>
        </div>
    );
};

export default DocumentFields;