import React, {useState} from "react";
import DocumentFields from "./components/DocumentFields";
import PartyFields from "./components/PartyFields.jsx";
import {ArrowLeft, ArrowRight} from "lucide-react";
import {motion, AnimatePresence} from "framer-motion";
import EntryHeader from "./components/EntryHeader.jsx";

const EntryPage = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [direction, setDirection] = useState(0);

    const pages = [
        {id: 0, component: <DocumentFields titleName="Documents"/>},
        {id: 1, component: <PartyFields titleName="Shipper"/>},
        {id: 2, component: <PartyFields titleName="Consignee"/>},
        {id: 3, component: <PartyFields titleName="Bill-To"/>},
    ];

    const handleNext = () => {
        if (currentStep < pages.length - 1) {
            setDirection(1);
            setCurrentStep(currentStep + 1);
        }
    };

    const handlePrev = () => {
        if (currentStep > 0) {
            setDirection(-1);
            setCurrentStep(currentStep - 1);
        }
    };

    const variants = {
        enter: (direction) => ({x: direction > 0 ? 300 : -300, opacity: 0}),
        center: {x: 0, opacity: 1},
        exit: (direction) => ({x: direction > 0 ? -300 : 300, opacity: 0}),
    };

    return (
        <div className="p-5 min-h-screen bg-white shadow-[0_0_15px_rgba(0,0,0,0.4)] rounded-sm flex flex-col">

            {/* Header Panel (Top) */}
            <div className="mb-4">
                <EntryHeader
                    instruction="Deliver on time."
                    ttlPalletCnt={1}
                    ttlHandlingUnit={1}
                    ttlPieces={1}
                    ttlWeight={110.2}
                />
            </div>

            {/* Content Row (Left + Right) */}
            <div className="flex flex-1 gap-5">

                {/* Left Panel */}
                <div className="w-1/2 border-4 border-slate-700 rounded-sm"></div>

                {/* Right Panel */}
                <div className="w-1/2 flex flex-col">

                    {/* Scrollable content */}
                    <div className="flex-1 overflow-auto relative">
                        <AnimatePresence initial={false} custom={direction}>
                            <motion.div
                                key={currentStep}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{duration: 0.5}}
                                className="absolute top-0 left-0 w-full"
                            >
                                {pages[currentStep].component}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Buttons at bottom */}
                    <div className="flex justify-between mt-2">
                        <button
                            onClick={handlePrev}
                            className={`w-9 h-9 rounded-full bg-gray-600 text-white flex items-center justify-center shadow-lg hover:bg-blue-700 hover:scale-110 transition-all duration-200 ${currentStep === 0 ? "invisible" : ""}`}
                        >
                            <ArrowLeft size={20}/>
                        </button>

                        <button
                            onClick={handleNext}
                            className={`w-9 h-9 rounded-full bg-gray-600 text-white flex items-center justify-center shadow-lg hover:bg-blue-700 hover:scale-110 transition-all duration-200 ${currentStep === pages.length - 1 ? "invisible" : ""}`}
                        >
                            <ArrowRight size={20}/>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default EntryPage;