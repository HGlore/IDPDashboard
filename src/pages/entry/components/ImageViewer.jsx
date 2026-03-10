import React from "react";

const ImageViewer = ({ src, alt, onPrev, onNext }) => {
    return (
        <div className="w-full h-full flex items-center justify-center bg-gray-50 rounded-2xl overflow-hidden relative shadow-inner">
            {src ? (
                <>
                    <img
                        src={src}
                        alt={alt || "Preview"}
                        className="max-w-full max-h-full object-contain transition-transform duration-300 hover:scale-105"
                    />
                    {/* Previous Button */}
                    <button
                        onClick={onPrev}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-800 focus:outline-none"
                    >
                        &#8592;
                    </button>

                    {/* Next Button */}
                    <button
                        onClick={onNext}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-800 focus:outline-none"
                    >
                        &#8594;
                    </button>
                </>
            ) : (
                <div className="flex flex-col items-center justify-center text-gray-400">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12 mb-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 7v10a4 4 0 004 4h10a4 4 0 004-4V7a4 4 0 00-4-4H7a4 4 0 00-4 4z"
                        />
                    </svg>
                    <span>Image Viewer</span>
                </div>
            )}
        </div>
    );
};

export default ImageViewer;