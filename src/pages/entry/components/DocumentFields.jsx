import React from 'react';
import FieldCard from "./FieldCard.jsx";

const DocumentFields = ({ document, setEntry, isBrowse }) => {

    const fields = [
        { label: "Date", key: "date", value: document?.date, placeholder: "Date..." },
        { label: "StartTime", key: "startTime", value: document?.startTime, placeholder: "StartTime..." },
        { label: "EndTime", key: "endTime", value: document?.endTime, placeholder: "EndTime..." },
        { label: "Image", key: "image", value: document?.image, placeholder: "Image..." },
        { label: "AccountType", key: "accountType", value: document?.accountType, placeholder: "AccountType..." },
        { label: "DetectedAccType", key: "detectedAccType", value: document?.detectedAccType, placeholder: "DetectedAccountType..." },
        { label: "BOLNumber", key: "bolNumber", value: document?.bolNumber, placeholder: "BOLnumber..." },
        { label: "MasterBOLNumber", key: "masterBolNumber", value: document?.masterBolNumber, placeholder: "MasterBOLNumber..." },
        { label: "PONumber", key: "poNumber", value: document?.poNumber, placeholder: "PONumber..." },
        { label: "QuoteNumber", key: "quoteNumber", value: document?.quoteNumber, placeholder: "QuoteNumber..." },
        { label: "Terms", key: "terms", value: document?.terms, placeholder: "Terms..." },
        { label: "ShipperNumber", key: "shipperNumber", value: document?.shipperNumber, placeholder: "ShipperNumber..." },
        { label: "ProNumber", key: "proNumber", value: document?.proNumber, placeholder: "ProNumber..." },
        { label: "RANumber", key: "raNumber", value: document?.raNumber, placeholder: "RANumber..." },
        { label: "EControlNumber", key: "eControlNumber", value: document?.eControlNumber, placeholder: "EControlNumber..." },
        { label: "DriverNumber", key: "driverNumber", value: document?.driverNumber, placeholder: "DriverNumber..." },
        { label: "RunNumber", key: "runNumber", value: document?.runNumber, placeholder: "RunNumber..." },
        { label: "CubicFeet", key: "cubicFeet", value: document?.cubicFeet, placeholder: "CubicFeet..." },
        { label: "TimeDeparted", key: "timeDeparted", value: document?.timeDeparted, placeholder: "TimeDeparted..." },
        { label: "TimeArrived", key: "timeArrived", value: document?.timeArrived, placeholder: "TimeArrived..." },
    ];

    return (
        <div className="p-4 border rounded-md shadow-sm bg-white">
            <h2 className="flex text-lg font-bold text-gray-800 mb-2 justify-center">Documents</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {fields.map((field, idx) => (
                    <FieldCard
                        key={document?.id + idx}
                        label={field.label}
                        keyField={field.key}
                        value={field.value}
                        placeholder={field.placeholder}
                        setEntry={setEntry}
                        parentKey={"Empty"}
                        isBrowse={isBrowse}
                    />
                ))}
            </div>
        </div>
    );
};

export default DocumentFields;