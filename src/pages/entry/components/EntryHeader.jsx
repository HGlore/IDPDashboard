import React, { useState, useEffect } from 'react';

const EntryHeader = ({ instructions, totals, index, itemLength, setEntry, isBrowse }) => {
    const [instructionLine, setInstructionLine] = useState(instructions?.line || "");
    const [totalPalletCnt, setTotalPalletCnt] = useState(totals?.totalPalletCnt || 0);
    const [totalHandlingUnit, setTotalHandlingUnit] = useState(totals?.totalHandlingUnit || 0);
    const [totalPieces, setTotalPieces] = useState(totals?.totalPieces || 0);
    const [totalWeight, setTotalWeight] = useState(totals?.totalWeight || "");

    // Update state when props change (switching entries)
    useEffect(() => {
        setInstructionLine(instructions?.line || "");
    }, [instructions]);

    useEffect(() => {
        setTotalPalletCnt(totals?.totalPalletCnt || "");
        setTotalHandlingUnit(totals?.totalHandlingUnit || "");
        setTotalPieces(totals?.totalPieces || "");
        setTotalWeight(totals?.totalWeight || "");
    }, [totals]);

    const handleChange = ({ newValue, parentKey, keyField }) => {
        /* const newValue = e.target.value; */
        // setInputValue(newValue);

        setEntry(prev => ({
            ...prev,
            [parentKey]: {
                ...prev[parentKey],
                [keyField]: newValue
            }
        }));
    };

    return (
        <div className="flex items-end gap-5">

            {/* Instruction */}
            <div className="flex flex-col flex-1">
                <label className="flex justify-between text-xs font-semibold text-gray-600 uppercase mb-1">
                    <span>Instruction</span>
                    <span>Image: {index + 1}/{itemLength}</span>
                </label>

                <input
                    type="text"
                    value={instructionLine}
                    readOnly={isBrowse}
                    onChange={(e) =>
                        handleChange({
                            newValue: e.target.value,
                            parentKey: "instructions",
                            keyField: "line"
                        })
                    }
                    className="w-full border border-gray-300 rounded-md px-1.5 py-1 text-sm
                     focus:outline-none focus:ring-2 focus:ring-blue-500
                     focus:border-blue-500 transition"
                />
            </div>

            {/* Pallet Count */}
            <div className="flex flex-col w-24">
                <label className="text-xs font-semibold text-gray-600 uppercase mb-1">
                    Pallet Count
                </label>
                <input
                    type="number"
                    value={totalPalletCnt}
                    readOnly={isBrowse}
                    onChange={(e) =>
                        handleChange({
                            newValue: e.target.value,
                            parentKey: "totals",
                            keyField: "totalPalletCnt"
                        })}
                    className="w-full border border-gray-300 rounded-md px-1 py-1 text-sm text-center
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* Handling Units */}
            <div className="flex flex-col w-28">
                <label className="text-xs font-semibold text-gray-600 uppercase mb-1">
                    Handling Unit(s)
                </label>
                <input
                    type="number"
                    value={totalHandlingUnit}
                    readOnly={isBrowse}
                    onChange={(e) =>
                        handleChange({
                            newValue: e.target.value,
                            parentKey: "totals",
                            keyField: "totalHandlingUnit"
                        })}
                    className="w-full border border-gray-300 rounded-md px-1 py-1 text-sm text-center
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* Total Pieces */}
            <div className="flex flex-col w-24">
                <label className="text-xs font-semibold text-gray-600 uppercase mb-1">
                    Total Pieces
                </label>
                <input
                    type="number"
                    value={totalPieces}
                    readOnly={isBrowse}
                    onChange={(e) =>
                        handleChange({
                            newValue: e.target.value,
                            parentKey: "totals",
                            keyField: "totalPieces"
                        })}
                    className="w-full border border-gray-300 rounded-md px-1 py-1 text-sm text-center
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* Total Weight */}
            <div className="flex flex-col w-28">
                <label className="text-xs font-semibold text-gray-600 uppercase mb-1">
                    Total Weight
                </label>
                <input
                    type="text"
                    value={totalWeight}
                    readOnly={isBrowse}
                    onChange={(e) =>
                        handleChange({
                            newValue: e.target.value,
                            parentKey: "totals",
                            keyField: "totalWeight"
                        })}
                    className="w-full border border-gray-300 rounded-md px-1 py-1 text-sm text-center
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
        </div>
    );
};

export default EntryHeader;