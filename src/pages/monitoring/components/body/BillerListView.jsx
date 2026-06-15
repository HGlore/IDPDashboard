import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { MdCircle } from 'react-icons/md';

const BillerListView = ({ filteredStatus, prodList: billerList = [] }) => {
    const [direction, setDirection] = useState(1);

    const pageSize = 10;
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(billerList.length / pageSize);

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

    const getListIndex = (compID) => {
        return billerList.findIndex((b) => b.companyID === compID);
    }

    useEffect(() => {
        setCurrentPage(1);
    }, [filteredStatus])

    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.80 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeIn" }}
                className='mt-2 min-h-full rounded-lg flex flex-col p-4 pt-3 bg-linear-to-br from-slate-100 to-slate-200'>

                {/* Header */}
                <motion.div className='flex justify-between items-center'>
                    <motion.div>
                        <motion.h2 className='text-2xl font-bold text-slate-800 tracking-tight'>
                            Billers List
                        </motion.h2>
                    </motion.div>
                    <motion.div>
                        <motion.p className='text-sm text-slate-500'>
                            Showing {countShowing} of {billerList.length} billers
                        </motion.p>
                    </motion.div>
                </motion.div>

                {/* Table Container */}
                <motion.p className='mt-2 ml-1 mb-1 text-sm text-slate-500'>
                    Page {currentPage} of {totalPages} total pages
                </motion.p>

                {/* Table */}
                <motion.div
                    key={filteredStatus}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className='
                w-full
                max-h-[69vh]
                rounded-sm
                bg-white/70
                backdrop-blur-md
                shadow-[0_10px_30px_rgba(0,0,0,0.15)]
                border border-white/40
                '
                >
                    <motion.table className='min-w-full text-sm text-slate-700 resize-none'>

                        {/* Header */}
                        <motion.thead
                            className=' bg-linear-to-r from-slate-100 to-slate-200 text-slate-600 uppercase text-xs tracking-wider'
                        >
                            <motion.tr>
                                {[
                                    "Row#",
                                    "Company ID#",
                                    "Status",
                                    "Billed",
                                    "Outputted",
                                ].map((head) => (
                                    <motion.th key={head} className={`px-4 py-2 align-middle 
                                    ${["Status", "Billed", "Outputted"].includes(head)
                                            ? "text-center"
                                            : "text-left"
                                        } font-semibold`}>
                                        {head}
                                    </motion.th>
                                ))}
                            </motion.tr>
                        </motion.thead>

                        {/* Body */}
                        <AnimatePresence mode='wait'>
                            <motion.tbody
                                key={currentPage}
                                initial={{
                                    opacity: 0,
                                    x: direction > 0 ? 50 : -50,
                                }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{
                                    opacity: 0,
                                    x: direction > 0 ? -50 : 50,
                                }}
                                transition={{ duration: 0.30 }}
                            >
                                {visibleBillers.map((biller, index) => (
                                    <motion.tr
                                        key={biller.id}
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -15 }}
                                        transition={{
                                            duration: 0.2,
                                            delay: index * 0.03,
                                        }}
                                        className="group border-b last:border-none hover:bg-blue-50/40"
                                    >
                                        <motion.td className='px-4 py-2 align-middle'> #{getListIndex(biller.companyID) + 1} </motion.td>
                                        <motion.td className='px-4 py-2 align-middle'> {biller.companyID} </motion.td>
                                        <motion.td className='px-4 py-2 text-center align-middle'>
                                            <motion.div className='flex justify-center'>
                                                {getStatusMaterial(biller.status)}
                                            </motion.div>
                                        </motion.td>
                                        <motion.td className='px-4 py-2 text-center align-middle'> {biller.billed} </motion.td>
                                        <motion.td className='px-4 py-2 text-center align-middle'> {biller.outputted} </motion.td>
                                    </motion.tr>
                                ))}
                            </motion.tbody>
                        </AnimatePresence>
                    </motion.table>
                </motion.div>

                {/* Pagination */}
                <motion.div className="flex items-center justify-center gap-2 mt-4">

                    <motion.button
                        onClick={() => {
                            setDirection(-1);
                            setCurrentPage((p) => Math.max(p - 1, 1))
                        }}
                        className={`w-9 h-9 rounded-full bg-gray-600 text-white flex items-center justify-center shadow-lg hover:bg-blue-700 hover:scale-110 transition-all duration-200
                        ${currentPage === 1 ? "invisible" : ""}`}
                    >
                        <ArrowLeft size={20} />
                    </motion.button>

                    {[...Array(totalPages)].map((_, index) => {
                        const page = index + 1;

                        return (
                            <motion.button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`px-3 py-1 rounded transition
                            ${currentPage === page
                                        ? 'bg-blue-600 text-white border-blue-600'
                                        : 'bg-white hover:bg-slate-100'
                                    }`}
                            >
                                {page}
                            </motion.button>
                        );
                    })}

                    <motion.button
                        onClick={() => {
                            setDirection(1);
                            setCurrentPage((p) => Math.min(p + 1, totalPages))
                        }
                        }
                        className={`w-9 h-9 rounded-full bg-gray-600 text-white flex items-center justify-center shadow-lg hover:bg-blue-700 hover:scale-110 transition-all duration-200
                    ${currentPage === totalPages || billerList.length === 0
                                ? "invisible" : ""}`}
                    >
                        <ArrowRight size={20} />
                    </motion.button>

                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}

export default BillerListView
