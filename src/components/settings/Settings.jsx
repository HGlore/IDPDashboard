import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react';
import React, { useEffect, useState } from 'react'

function Settings({ isOpen, onClose }) {

    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        setPosition({ x: 0, y: 0 });
    }, [isOpen])

    // **Modal container animation variants**
    const variants = {
        enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
        center: { x: 0, opacity: 1 },
        exit: (dir) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
    };

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
                    className='fixed inset-0 z-50 flex items-center justify-center'
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={backdropVariants}
                    transition={{ duration: 0.3 }}
                >
                    {/* Overlay */}
                    <motion.div
                        className='absolute inset-0 bg-black/30 backdrop-blur-sm'
                        onClick={onClose}
                        variants={backdropVariants}
                        initial="hidden"
                        animate="visible"
                        exit={"exit"}
                        transition={{ duration: 0.3 }}
                    />
                    {/* Modal Content */}
                    <motion.div
                        className='relative w-[60%] h-[90%] bg-white rounded-2xl shadow-2xl flex overflow-hidden'
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                    >
                        {/* Close Button */}
                        <motion.button
                            animate={position}
                            onMouseEnter={() => {
                                setPosition((prev) =>
                                    prev.y <= 300 && prev.x >= -300
                                        ? {
                                            x: prev.x - 150,
                                            y: prev.y + 150,
                                        }
                                        :
                                        prev.y >= 300 && prev.x <= -350 ?
                                            {
                                                x: prev.x + 250,
                                                y: prev.y,
                                            }
                                            :
                                            {
                                                x: prev.x,
                                                y: prev.y - 300,
                                            }
                                );
                            }}
                            onClick={onClose}
                            className="absolute top-3 right-3 z-10 p-2 rounded-full bg-gray-200 hover:bg-red-500 hover:text-white transition"
                        >
                            <X size={18} />
                        </motion.button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Settings