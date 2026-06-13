import React, { useState } from 'react'
import { MdCircle } from 'react-icons/md';

const BillerListView = ({ prodList: billerList = [] }) => {
    const pageSize = 10;
    const currentPage = 1;

    const visibleBillers = billerList.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
    );
    const countShowing = visibleBillers.length;

    const getStatusMaterial = (status) => {
        switch (status) {
            case 0:
                return <MdCircle className='text-red-700' />;

            case 1:
                return <MdCircle className='text-green-700' />;

            case 2:
                return <MdCircle className='text-amber-500' />;
        }
    }

    return (
        <div className='mt-2 min-h-full rounded-lg flex flex-col p-4 pt-3 bg-linear-to-br from-slate-100 to-slate-200'>

            {/* Header */}
            <div className='flex justify-between items-center'>
                <div>
                    <h2 className='text-2xl font-bold text-slate-800 tracking-tight'>
                        Billers List
                    </h2>
                </div>
                <div>
                    <p className='text-sm text-slate-500'>
                        Showing {countShowing} of {billerList.length} billers
                    </p>
                </div>
            </div>

            {/* Table Container */}
            <p className='mt-2 ml-1 mb-1 text-sm text-slate-500'>
                Page# 1
            </p>
            <div
                className='
                          w-full
                          max-h-[75vh]
                          overflow-y-auto
                          rounded-sm
                          bg-white/70
                          backdrop-blur-md
                          shadow-[0_10px_30px_rgba(0,0,0,0.15)]
                          border border-white/40
                          '
            >
                <table className='min-w-full text-sm text-slate-700'>

                    {/* Header */}
                    <thead
                        className=' bg-linear-to-r from-slate-100 to-slate-200 text-slate-600 uppercase text-xs tracking-wider'
                    >
                        <tr>
                            {[
                                "Row#",
                                "Company ID#",
                                "Status",
                                "Billed",
                                "Outputted",
                            ].map((head) => (
                                <th key={head} className={`px-4 py-2 align-middle 
                                    ${["Status", "Billed", "Outputted"].includes(head)
                                        ? "text-center"
                                        : "text-left"
                                    } font-semibold`}>
                                    {head}
                                </th>
                            ))}
                        </tr>
                    </thead>

                    {/* Body */}
                    <tbody>
                        {visibleBillers.map((biller, index) => (
                            <tr
                                key={biller.id}
                                className='group border-b last:border-none hover:bg-blue-50/40 transition-all duration-300'
                            >
                                <td className='px-4 py-2 align-middle'> #{index + 1} </td>
                                <td className='px-4 py-2 align-middle'> {biller.companyID} </td>
                                <td className='px-4 py-2 text-center align-middle'>
                                    <div className='flex justify-center'>
                                        {getStatusMaterial(biller.status)}
                                    </div>
                                </td>
                                <td className='px-4 py-2 text-center align-middle'> {biller.billed} </td>
                                <td className='px-4 py-2 text-center align-middle'> {biller.outputted} </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default BillerListView
