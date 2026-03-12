import React, { useState, useEffect } from 'react';

const EntryHeader = ({ instructions, totals, index, itemLength }) => {
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
        setTotalPalletCnt(totals?.totalPalletCnt || 0);
        setTotalHandlingUnit(totals?.totalHandlingUnit || 0);
        setTotalPieces(totals?.totalPieces || 0);
        setTotalWeight(totals?.totalWeight || "");
    }, [totals]);

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
                    onChange={(e) => setInstructionLine(e.target.value)}
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
                    onChange={(e) => setTotalPalletCnt(e.target.value)}
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
                    onChange={(e) => setTotalHandlingUnit(e.target.value)}
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
                    onChange={(e) => setTotalPieces(e.target.value)}
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
                    onChange={(e) => setTotalWeight(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-1 py-1 text-sm text-center
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
        </div>
    );
};

export default EntryHeader;