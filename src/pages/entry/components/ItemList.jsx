import React, {useState} from "react";
import {FiEdit, FiTrash2, FiPlus} from "react-icons/fi";

const initialItems = [
    {
        id: 1,
        pallet: "1",
        handlingUnit: "Pallet",
        packageType: "Boxes",
        pieces: "1",
        description: "Acrylic Bathtub - 5179233",
        weight: "110.2",
        classType: "70",
        nmfc: "158260.02",
        dimension: "",
    },
    {
        id: 2,
        pallet: "1",
        handlingUnit: "Pallet",
        packageType: "Boxes",
        pieces: "1",
        description: "Acrylic Bathtub - 5179233",
        weight: "110.2",
        classType: "70",
        nmfc: "158260.02",
        dimension: "",
    },
    {
        id: 3,
        pallet: "1",
        handlingUnit: "Pallet",
        packageType: "Boxes",
        pieces: "1",
        description: "Acrylic Bathtub - 5179233",
        weight: "110.2",
        classType: "70",
        nmfc: "158260.02",
        dimension: "",
    },
    {
        id: 4,
        pallet: "1",
        handlingUnit: "Pallet",
        packageType: "Boxes",
        pieces: "1",
        description: "Acrylic Bathtub - 5179233",
        weight: "110.2",
        classType: "70",
        nmfc: "158260.02",
        dimension: "",
    },
    {
        id: 5,
        pallet: "1",
        handlingUnit: "Pallet",
        packageType: "Boxes",
        pieces: "1",
        description: "Acrylic Bathtub - 5179233",
        weight: "110.2",
        classType: "70",
        nmfc: "158260.02",
        dimension: "",
    },
    {
        id: 6,
        pallet: "1",
        handlingUnit: "Pallet",
        packageType: "Boxes",
        pieces: "1",
        description: "Acrylic Bathtub - 5179233",
        weight: "110.2",
        classType: "70",
        nmfc: "158260.02",
        dimension: "",
    },
    {
        id: 7,
        pallet: "1",
        handlingUnit: "Pallet",
        packageType: "Boxes",
        pieces: "1",
        description: "Acrylic Bathtub - 5179233",
        weight: "110.2",
        classType: "70",
        nmfc: "158260.02",
        dimension: "",
    },
    {
        id: 8,
        pallet: "1",
        handlingUnit: "Pallet",
        packageType: "Boxes",
        pieces: "1",
        description: "Acrylic Bathtub - 5179233",
        weight: "110.2",
        classType: "70",
        nmfc: "158260.02",
        dimension: "",
    },
    {
        id: 9,
        pallet: "1",
        handlingUnit: "Pallet",
        packageType: "Boxes",
        pieces: "1",
        description: "Acrylic Bathtub - 5179233",
        weight: "110.2",
        classType: "70",
        nmfc: "158260.02",
        dimension: "",
    },
    {
        id: 10,
        pallet: "1",
        handlingUnit: "Pallet",
        packageType: "Boxes",
        pieces: "1",
        description: "Acrylic Bathtub - 5179233",
        weight: "110.2",
        classType: "70",
        nmfc: "158260.02",
        dimension: "",
    },
    {
        id: 11,
        pallet: "1",
        handlingUnit: "Pallet",
        packageType: "Boxes",
        pieces: "1",
        description: "Acrylic Bathtub - 5179233",
        weight: "110.2",
        classType: "70",
        nmfc: "158260.02",
        dimension: "",
    },
];

export default function ItemList() {
    const [items, setItems] = useState(initialItems);

    const handleRemove = (id) => {
        setItems(items.filter((item) => item.id !== id));
    };

    return (
        <div className="min-h-full rounded-lg flex flex-col p-4 bg-gradient-to-br from-slate-100 to-slate-200">

            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h2 className="text-3xl font-bold text-slate-800 tracking-tight">
                        Item List
                    </h2>
                    <p className="text-sm text-slate-500">
                        Manage your shipment items
                    </p>
                </div>

                <button
                    className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-5 py-2.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                    <FiPlus className="text-lg"/>
                    Add Item
                </button>
            </div>

            {/* Table Container */}
            <div
                className="
                          w-full
                          max-h-[45vh]
                          overflow-y-auto
                          rounded-sm
                          bg-white/70
                          backdrop-blur-md
                          shadow-[0_10px_30px_rgba(0,0,0,0.15)]
                          border border-white/40
                          "
            >
                <table className="min-w-full text-sm text-slate-700">

                    {/* Header */}
                    <thead
                        className="bg-gradient-to-r from-slate-100 to-slate-200 text-slate-600 uppercase text-xs tracking-wider">
                    <tr>
                        {[
                            "Item",
                            "Pallet",
                            "Handling Unit",
                            "Package",
                            "Pieces",
                            "Description",
                            "Weight",
                            "Class",
                            "NMFC",
                            "Action",
                        ].map((head) => (
                            <th key={head} className="px-4 py-2 align-middle text-left font-semibold">
                                {head}
                            </th>
                        ))}
                    </tr>
                    </thead>

                    {/* Body */}
                    <tbody>
                    {items.map((item, index) => (
                        <tr
                            key={item.id}
                            className="group border-b last:border-none hover:bg-blue-50/40 transition-all duration-300"
                        >
                            <td className="px-4 py-2 align-middle">
                                #{item.id}
                            </td>

                            <td className="px-4 py-2 align-middle">{item.pallet}</td>

                            <td className="px-4 py-2 align-middle">
                                    <span className="px-2 py-1 rounded-lg bg-slate-100 text-slate-600 text-xs">
                                        {item.handlingUnit}
                                    </span>
                            </td>

                            <td className="px-4 py-2 align-middle">{item.packageType}</td>

                            <td className="px-4 py-2 align-middle font-semibold">
                                {item.pieces}
                            </td>

                            <td className="px-4 py-2 align-middle max-w-[250px] truncate">
                                {item.description}
                            </td>

                            <td className="px-4 py-2 align-middle">
                                {item.weight} kg
                            </td>

                            <td className="px-4 py-2 align-middle">
                                    <span
                                        className="px-2 py-1 rounded-md bg-indigo-100 text-indigo-600 text-xs font-semibold">
                                        {item.classType}
                                    </span>
                            </td>

                            <td className="px-4 py-2 align-middle">{item.nmfc}</td>

                            {/* Actions */}
                            <td className="px-4 py-2 align-middle">
                                <div
                                    className="flex gap-2 opacity-70 group-hover:opacity-100 transition-all duration-200">

                                    <button
                                        className="p-2 rounded-lg hover:bg-blue-100 text-blue-600 hover:scale-110 transition-all">
                                        <FiEdit/>
                                    </button>

                                    <button
                                        onClick={() => handleRemove(item.id)}
                                        className="p-2 rounded-lg hover:bg-red-100 text-red-500 hover:scale-110 transition-all"
                                    >
                                        <FiTrash2/>
                                    </button>

                                </div>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            {/* Footer Info */}
            <div className="mt-4 text-sm text-slate-500 flex justify-between">
                <span>Total Items: {items.length}</span>
                <span className="italic">Double-click row to view details</span>
            </div>
        </div>
    );
}