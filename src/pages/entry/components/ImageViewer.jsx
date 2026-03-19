import React, { useEffect, useState } from "react";

const ImageViewer = ({ src, alt, index, itemLength, onPrev, onNext, isBrowse }) => {
    const [zoom, setZoom] = useState(1);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [dragging, setDragging] = useState(false);
    const [start, setStart] = useState({ x: 0, y: 0 });

    const zoomIn = () => setZoom((z) => Math.min(z + 0.2, 5));
    const zoomOut = () => setZoom((z) => Math.max(z - 0.2, 0.5));

    const handleMouseDown = (e) => {
        setDragging(true);
        setStart({
            x: e.clientX - position.x,
            y: e.clientY - position.y
        });
    };

    const handleMouseMove = (e) => {
        if (!dragging) return;

        setPosition({
            x: e.clientX - start.x,
            y: e.clientY - start.y
        });
    };

    const handleMouseUp = () => {
        setDragging(false);
    };

    return (
        <div
            className="w-full h-full flex items-center justify-center bg-gray-50 rounded-2xl overflow-hidden relative shadow-inner"
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
        >
            {src ? (
                <>
                    <img
                        src={src || ""}
                        alt={alt || "Preview"}
                        onMouseDown={handleMouseDown}
                        style={{
                            transform: `translate(${position.x}px, ${position.y}px) scale(${zoom})`,
                            cursor: dragging ? "grabbing" : "grab"
                        }}
                        className="max-w-full max-h-full object-contain select-none transition-transform duration-100"
                        draggable={false}
                    />

                    {/* Zoom In */}
                    <button
                        onClick={zoomIn}
                        className="absolute top-2 right-12 bg-gray-700 text-white px-3 py-1 rounded hover:bg-gray-800"
                    >
                        +
                    </button>

                    {/* Zoom Out */}
                    <button
                        onClick={zoomOut}
                        className="absolute top-2 right-2 bg-gray-700 text-white px-3 py-1 rounded hover:bg-gray-800"
                    >
                        −
                    </button>

                    {/* Previous */}
                    <button
                        onClick={onPrev}
                        disabled={!isBrowse}
                        className={`absolute left-2 top-1/2 -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-800 
                            ${index === 0 || !isBrowse ? "invisible" : ""}`}
                    >
                        &#8592;
                    </button>

                    {/* Next */}
                    <button
                        onClick={onNext}
                        className={`absolute right-2 top-1/2 -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-800 
                                ${index === (itemLength - 1) || !isBrowse ? "invisible" : ""}`}
                    >
                        &#8594;
                    </button>
                </>
            ) : (
                <div className="flex flex-col items-center justify-center text-gray-400">
                    <span>Image Viewer</span>
                </div>
            )}
        </div>
    );
};

export default ImageViewer;