import React from 'react';

const EntryHeader = ({instruction, ttlPalletCnt, ttlHandlingUnit, ttlPieces, ttlWeight}) => {

    return (
        <div className="flex items-end gap-5">

            {/* Instruction (Flexible / Wide) */}
            <div className="flex flex-col flex-1">
                <label className="text-xs font-semibold text-gray-600 uppercase mb-1">
                    Instruction
                </label>
                <input
                    type="text"
                    defaultValue={instruction}
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
                    defaultValue={ttlPalletCnt}
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
                    defaultValue={ttlHandlingUnit}
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
                    defaultValue={ttlPieces}
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
                    type="number"
                    defaultValue={ttlWeight}
                    className="w-full border border-gray-300 rounded-md px-1 py-1 text-sm text-center
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
        </div>
    );
};

export default EntryHeader;