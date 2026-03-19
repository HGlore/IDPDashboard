import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import ImageViewer from "./ImageViewer";

const ItemModal = ({ isOpen, onClose, onSave, mode = "add", itemData, imageURL }) => {

    const emptyForm = {
        pallet: "",
        handlingUnit: "",
        packageType: "",
        pieces: "",
        description: "",
        weight: "",
        clss: "",
        nmfc: "",
        dimension: "",
    };

    const [form, setForm] = useState(emptyForm);
    const [currentStep, setCurrentStep] = useState(0);
    const [direction, setDirection] = useState(0);

    useEffect(() => {
        if (mode === "add") setForm(emptyForm);
        else if (itemData) setForm({ ...itemData });
    }, [itemData, mode, isOpen]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleNext = () => {
        setDirection(1);
        setCurrentStep(prev => Math.min(prev + 1, 1));
    };
    const handlePrev = () => {
        setDirection(-1);
        setCurrentStep(prev => Math.max(prev - 1, 0));
    };
    const handleSubmit = () => {
        onSave(form);
        setForm(emptyForm);
        onClose();
    };

    const handleEditItem = (itemId, updatedData) => {
        setEntry(prev => ({
            ...prev,
            items: prev.items.map(item =>
                item.id === itemId
                    ? { ...item, ...updatedData }
                    : item
            )
        }));
    };

    const variants = {
        enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
        center: { x: 0, opacity: 1 },
        exit: (dir) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
    };

    // **Modal container animation variants**
    const backdropVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        exit: { opacity: 0 },
    };

    const modalVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: 50, scale: 0.95 },
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={backdropVariants}
                    transition={{ duration: 0.3 }}
                >
                    {/* Overlay */}
                    <motion.div
                        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
                        onClick={onClose}
                        variants={backdropVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ duration: 0.3 }}
                    />

                    {/* Modal Content */}
                    <motion.div
                        className="relative w-[80%] h-[85%] bg-white rounded-2xl shadow-2xl flex overflow-hidden"
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ duration: 0.35, ease: "easeOut" }}
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-3 right-3 z-10 p-2 rounded-full bg-gray-200 hover:bg-red-500 hover:text-white transition"
                        >
                            <X size={18} />
                        </button>

                        {/* Left Panel */}
                        <div className="w-1/2 border-gray-200 pr-1">
                            <ImageViewer src={imageURL} index={0} itemLength={1} />
                        </div>

                        {/* Right Panel */}
                        <div
                            className="w-1/2 flex flex-col bg-white/70 p-6 border-l border-gray-200 rounded-2xl overflow-hidden">

                            {/* Title */}
                            <h2 className="text-xl font-bold mb-2">
                                {mode === "add" && "Add Item"}
                                {mode === "edit" && "Edit Item"}
                                {mode === "view" && "View Item"}
                            </h2>

                            {/* Form */}
                            <div className="flex-1 overflow-y-auto relative">
                                <AnimatePresence custom={direction} mode="wait">
                                    <motion.div
                                        key={currentStep}
                                        custom={direction}
                                        variants={variants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        transition={{ duration: 0.4 }}
                                        className="absolute w-full"
                                    >
                                        {currentStep === 0 && (
                                            <div className="grid grid-cols-2 gap-2 p-1">
                                                <div className="flex flex-col">
                                                    <label className="text-sm font-mono text-gray-700">Pallet</label>
                                                    <input name="pallet" value={form.pallet} onChange={handleChange}
                                                        placeholder="Pallet" className="input" />
                                                </div>

                                                <div className="flex flex-col">
                                                    <label className="text-sm font-mono text-gray-700">HandlingUnit</label>
                                                    <input name="handlingUnit" value={form.handlingUnit}
                                                        onChange={handleChange} placeholder="Handling Unit"
                                                        className="input" />
                                                </div>

                                                <div className="flex flex-col">
                                                    <label className="text-sm font-mono text-gray-700">PackageType</label>
                                                    <input name="packageType" value={form.packageType}
                                                        onChange={handleChange} placeholder="Package Type"
                                                        className="input" />
                                                </div>

                                                <div className="flex flex-col">
                                                    <label className="text-sm font-mono text-gray-700">Pieces</label>
                                                    <input name="pieces" value={form.pieces} onChange={handleChange}
                                                        placeholder="Pieces" className="input" />
                                                </div>

                                                <div className="flex flex-col">
                                                    <label className="text-sm font-mono text-gray-700">Weight</label>
                                                    <input name="weight" value={form.weight} onChange={handleChange}
                                                        placeholder="Weight" className="input" />
                                                </div>

                                                <div className="flex flex-col">
                                                    <label className="text-sm font-mono text-gray-700">Class</label>
                                                    <input name="clss" value={form.classType} onChange={handleChange}
                                                        placeholder="Class" className="input" />
                                                </div>

                                                <div className="flex flex-col">
                                                    <label className="text-sm font-mono text-gray-700">NMFC</label>
                                                    <input name="nmfc" value={form.nmfc} onChange={handleChange}
                                                        placeholder="NMFC" className="input" />
                                                </div>

                                                <div className="flex flex-col">
                                                    <label className="text-sm font-mono text-gray-700">Dimension</label>
                                                    <input name="dimension" value={form.dimension} onChange={handleChange}
                                                        placeholder="Dimension" className="input" />
                                                </div>

                                                <div className="flex flex-col mid: col-span-2">
                                                    <label className="text-sm font-mono text-gray-700">Description</label>
                                                    <textarea name="description" value={form.description}
                                                        onChange={handleChange} placeholder="Description"
                                                        className="col-span-2 input h-22" />
                                                </div>
                                            </div>
                                        )}
                                        {currentStep === 1 && (
                                            <div className="text-center text-gray-500">
                                                (Hi there! How are you? 👀)
                                                <p className="text-sm text-center">There's nothing here!</p>
                                            </div>
                                        )}
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            {/* Footer Buttons */}
                            <div className="flex justify-between mt-3">
                                <button onClick={handlePrev}
                                    className={`btn-circle ${currentStep === 0 ? "invisible" : ""}`}>
                                    <ArrowLeft size={18} />
                                </button>

                                <div className="flex gap-2">
                                    <button onClick={onClose}
                                        className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">
                                        Cancel
                                    </button>
                                    {mode !== "view" && (
                                        <button onClick={handleSubmit}
                                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                                            Save
                                        </button>
                                    )}
                                </div>

                                <button onClick={handleNext} className="btn-circle">
                                    <ArrowRight size={18} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ItemModal;