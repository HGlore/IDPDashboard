import React, { useState } from "react";
import DocumentFields from "./components/DocumentFields";
import PartyFields from "./components/PartyFields.jsx";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import EntryHeader from "./components/EntryHeader.jsx";
import ItemList from "./components/ItemList.jsx";
import ImageViewer from "./components/ImageViewer.jsx";

const EntryPage = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [direction, setDirection] = useState(0);
    const [showItemList, setShowItemList] = useState(false);

    const pages = [
        { id: 0, component: <DocumentFields titleName="Documents" /> },
        { id: 1, component: <PartyFields titleName="Shipper" /> },
        { id: 2, component: <PartyFields titleName="Consignee" /> },
        { id: 3, component: <PartyFields titleName="Bill-To" /> },
    ];

    const handleNext = () => {
        if (currentStep < pages.length - 1) {
            setDirection(1);
            setCurrentStep(currentStep + 1);
        } else {
            setDirection(1);
            setShowItemList(true);
        }
    };

    const handlePrev = () => {
        if (currentStep > 0) {
            setDirection(-1);
            setCurrentStep(currentStep - 1);
        }
    };

    const handleBackToForm = () => {
        setDirection(-1);
        setShowItemList(false);
    };

    const pageVariants = {
        enter: (dir) => ({ x: dir > 0 ? 400 : -400, opacity: 0, scale: 0.98 }),
        center: { x: 0, opacity: 1, scale: 1 },
        exit: (dir) => ({ x: dir > 0 ? -400 : 400, opacity: 0, scale: 0.98 }),
    };

    const variants = {
        enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
        center: { x: 0, opacity: 1 },
        exit: (dir) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
    };

    return (
        <div className="p-5 min-h-screen bg-gray-50 flex flex-col gap-4">
            {/* Header */}
            <EntryHeader
                instruction="Deliver on time."
                ttlPalletCnt={1}
                ttlHandlingUnit={1}
                ttlPieces={1}
                ttlWeight={110.2}
            />

            {/* Main Content */}
            <div className="flex-1 relative overflow-hidden">
                <AnimatePresence mode="wait" custom={direction}>
                    {showItemList ? (
                        <motion.div
                            key="itemList"
                            custom={1}
                            variants={pageVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="absolute inset-0 flex flex-col bg-white/70 rounded-2xl shadow-lg overflow-hidden"
                        >
                            <div className="flex-1 overflow-y-auto p-4">
                                <ItemList />
                            </div>

                            {/* Bottom Button */}
                            <div className="flex justify-start p-3 bg-white border-t border-gray-200">
                                <button
                                    onClick={handleBackToForm}
                                    className="w-9 h-9 rounded-full bg-gray-600 text-white flex items-center justify-center shadow-lg hover:bg-blue-700 hover:scale-110 transition-all duration-200"
                                >
                                    <ArrowLeft size={20} />
                                </button>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="form"
                            custom={direction}
                            variants={pageVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="absolute inset-0 flex gap-5"
                        >
                            {/* Left Panel */}
                            <div className="w-1/2 rounded-2xl border border-gray-200 shadow-inner">
                                <ImageViewer />
                            </div>

                            {/* Right Panel */}
                            <div className="w-1/2 flex flex-col bg-white/70 rounded-2xl shadow-lg p-4 overflow-hidden">
                                <div className="flex-1 overflow-y-auto relative">
                                    <AnimatePresence initial={false} custom={direction}>
                                        <motion.div
                                            key={currentStep}
                                            custom={direction}
                                            variants={variants}
                                            initial="enter"
                                            animate="center"
                                            exit="exit"
                                            transition={{ duration: 0.5 }}
                                            className="absolute top-0 left-0 w-full"
                                        >
                                            {pages[currentStep].component}
                                        </motion.div>
                                    </AnimatePresence>
                                </div>

                                <div className="flex justify-between mt-2">
                                    <button
                                        onClick={handlePrev}
                                        className={`w-9 h-9 rounded-full bg-gray-600 text-white flex items-center justify-center shadow-lg hover:bg-blue-700 hover:scale-110 transition-all duration-200 ${currentStep === 0 ? "invisible" : ""
                                            }`}
                                    >
                                        <ArrowLeft size={20} />
                                    </button>

                                    <button
                                        onClick={handleNext}
                                        className="w-9 h-9 rounded-full bg-gray-600 text-white flex items-center justify-center shadow-lg hover:bg-blue-700 hover:scale-110 transition-all duration-200"
                                    >
                                        <ArrowRight size={20} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default EntryPage;