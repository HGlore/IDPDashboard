import React, { useEffect, useState } from "react";
import DocumentFields from "./components/DocumentFields";
import PartyFields from "./components/PartyFields.jsx";
import { ArrowLeft, ArrowRight, NutIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import EntryHeader from "./components/EntryHeader.jsx";
import ItemList from "./components/ItemList.jsx";
import ImageViewer from "./components/ImageViewer.jsx";
import * as entriesAPI from './../../api/entriesAPI.js';
import * as imageAPI from './../../api/imageAPI.js';
import LoadingModal from "../../components/LoadingModal.jsx";
import { sweetShowMessage } from "../../utils/ShowAlert.js";
import { DateFormatter } from "../../utils/DateFormatter.js";
import { useNavigate } from "react-router-dom";
import { documentDTO } from "./dto/DocumentDTO.jsx";
import ModeManager from "./components/ModeManager.jsx";
import { toastShowError, toastShowSuccess } from "../../utils/Toast.js";

const EntryPage = ({ canRequest, date, ongoingDate, todaysDate }) => {
    const navigate = useNavigate();

    const [currentStep, setCurrentStep] = useState(0);
    const [imageIndex, setImageIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [showItemList, setShowItemList] = useState(false);
    const [entry, setEntry] = useState(null);
    const [entryID, setEntryID] = useState(0);
    const [imageURL, setImageURL] = useState(null);
    const [loading, setLoading] = useState(false);
    const [mode, setMode] = useState("Entry");
    const [isBrowse, setIsBrowse] = useState(false);
    const [state, setState] = useState(0);

    /* useEffect(() => {
        fetchBatchIDs();
    }, []); */

    useEffect(() => {
        fetchImage();

    }, [entry]);

    useEffect(() => {
        fetchEntryByID();

    }, [entryID]);

    useEffect(() => {
        fetchImage();
        fetchBatchIDs();

        const currentDate = localStorage.getItem("date");
        const formattedDate = DateFormatter(currentDate);
        const todayFormattedDate = DateFormatter(todaysDate);

        if (!canRequest && ongoingDate !== formattedDate && todayFormattedDate === formattedDate) {
            setLoading(true);
            navigate("/dashboard");
        }

    }, [date]);

    useEffect(() => {
        if (mode === "Entry") {
            fetchBatchIDs();
        }

    }, [mode]);

    const fetchBatchIDs = async () => {
        try {
            const responseIDs = await entriesAPI.entriesIds();
            localStorage.setItem("IDs", JSON.stringify(responseIDs));

            const responseEntry = await entriesAPI.entriesData({ ids: responseIDs, date: date });

            if (!responseEntry || responseEntry.length === 0) {
                console.warn("No entries found");
                setEntry(null);
                setImageIndex(-1);
                setMode("Browse");
                setIsBrowse(true);
                return;
            }

            const returned_entry = responseEntry[0];

            if (!returned_entry) {
                console.warn("First entry is undefined");
                return;
            }

            setEntry(documentDTO(returned_entry));
            setEntryID(returned_entry.id);
            setMode("Entry");
            setIsBrowse(false);

            localStorage.setItem("orig_entry", JSON.stringify(documentDTO(returned_entry)));

            const storedIds = JSON.parse(localStorage.getItem("IDs"));
            const index = storedIds.findIndex((id) => Number(id) === returned_entry?.id);
            setImageIndex(index);
            setLoading(false);

        } catch (error) {
            console.warn("Error fetching IDs:", error);
        }
    };

    const fetchImage = async () => {
        if (!entry?.imageName) {
            setImageURL(null);
            return;
        };

        try {
            const responseImage = await imageAPI.getEntryImage(entry.imageName);

            if (responseImage.success) {
                setImageURL(responseImage.imageUrl);
                setLoading(false);
            }

        } catch (error) {
            console.warn("Error fetching image: ", error);
        }
    };

    const fetchEntryByID = async () => {
        if (!entryID || entryID === entry?.id) return;
        const response = await entriesAPI.entriesData({ id: entryID, date });
        setEntry(documentDTO(response));
        localStorage.setItem("orig_entry", JSON.stringify(documentDTO(response)));
        setLoading(false);
    };

    const setIndexToNext = () => {
        const ids = JSON.parse(localStorage.getItem("IDs")) || [];
        if (imageIndex >= ids.length - 1) return;

        const newIndex = imageIndex + 1;
        const newID = ids[newIndex];

        setImageIndex(newIndex);
        setEntryID(newID);
    };

    const setIndexToPrev = () => {
        const ids = JSON.parse(localStorage.getItem("IDs")) || [];
        if (imageIndex <= 0) return;

        const prevIndex = imageIndex - 1;
        const prevID = ids[prevIndex];

        setImageIndex(prevIndex);
        setEntryID(prevID);
    };

    const handleNext = () => {
        if (currentStep < pages.length - 1 && entry) {
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

    const handleSave = async () => {
        const result = await sweetShowMessage(
            "info",
            "Save Entry?",
            "Save Current Entry",
            "Save",
            "Cancel"
        );

        if (result.isConfirmed) {
            saveEntry();
        }
    };

    const saveEntry = async () => {
        const backup_entry_str = localStorage.getItem("orig_entry");
        const curr_entry_str = JSON.stringify(entry);
        var save = true;

        if (curr_entry_str == backup_entry_str) {
            toastShowError("No Changes of Data");
            const result = await sweetShowMessage(
                "info",
                "No Changes of Data!",
                "Save entry anyway?",
                "Save anyway",
                "Cancel"
            );

            if (!result.isConfirmed) {
                save = false;
                return;
            }
        }

        if (save) {
            var updateTo = "WAIT";
            const ids = JSON.parse(localStorage.getItem("IDs"));

            if (imageIndex == (ids.length - 1)) {
                updateTo = "BILLED";
            }

            const items_without_keys = entry.items.map(({ key_id, ...rest }) => rest);

            const payload = {
                ...entry,
                items: items_without_keys
            }

            const response = await entriesAPI.saveEntry(payload, ids, updateTo);

            if (response.success) {
                toastShowSuccess("Saved Successfully");
                handleBackToForm();
                setCurrentStep(0);
                setIndexToNext();
            } else {
                console.warn("Failed to save.");
                toastShowError("Save Failed!!!");
            }
        }
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

    if (loading) {
        return <LoadingModal />;
    }

    const pages = [
        { id: 0, component: entry && <DocumentFields document={entry} setEntry={setEntry} isBrowse={isBrowse} /> },
        { id: 1, component: entry && <PartyFields titleName="Shipper" fieldsData={entry?.shipper} setEntry={setEntry} parentKey={"shipper"} isBrowse={isBrowse} /> },
        { id: 2, component: entry && <PartyFields titleName="Consignee" fieldsData={entry?.consignee} setEntry={setEntry} parentKey={"consignee"} isBrowse={isBrowse} /> },
        { id: 3, component: entry && <PartyFields titleName="Bill-To" fieldsData={entry?.billTo} setEntry={setEntry} parentKey={"billTo"} isBrowse={isBrowse} /> },
    ];

    return (
        <div className="p-5 min-h-screen bg-gray-50 flex flex-col gap-2">
            {/* MODE */}
            <ModeManager mode={mode} setMode={setMode} entry={entry}
                setEntry={setEntry} setIsBrowse={setIsBrowse} />

            {/* Header */}
            <EntryHeader
                instructions={entry?.instructions}
                totals={entry?.totals}
                index={imageIndex}
                itemLength={JSON.parse(localStorage.getItem("IDs") || []).length}
                setEntry={setEntry}
                isBrowse={isBrowse}
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
                                <ItemList itemList={entry?.items} imageURL={imageURL} setEntry={setEntry} isBrowse={isBrowse} />
                            </div>

                            {/* Bottom Button */}
                            <div className="flex justify-between p-3 bg-white border-t border-gray-200">
                                <button
                                    onClick={handleBackToForm}
                                    className="w-9 h-9 rounded-full bg-gray-600 text-white flex items-center justify-center shadow-lg hover:bg-blue-700 hover:scale-110 transition-all duration-200"
                                >
                                    <ArrowLeft size={20} />
                                </button>

                                <button
                                    onClick={handleSave}
                                    disabled={isBrowse}
                                    className="w-20 h-9 rounded-full bg-gray-600 text-white flex items-center justify-center shadow-lg hover:bg-green-800 hover:scale-110 transition-all duration-200">
                                    <p className="font-mono">
                                        Save</p>
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
                                <ImageViewer src={imageURL} alt={"Image Viewer"} index={imageIndex} itemLength={JSON.parse(localStorage.getItem("IDs") || []).length}
                                    onPrev={setIndexToPrev} onNext={setIndexToNext} isBrowse={isBrowse} />
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
                                        className={`w-9 h-9 rounded-full bg-gray-600 text-white flex items-center justify-center shadow-lg hover:bg-blue-700 hover:scale-110 transition-all duration-200 ${currentStep === 0 || !entry ? "invisible" : ""
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