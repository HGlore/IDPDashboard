
const LoadingModal = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/30">
            <div className="bg-white/80 p-6 rounded-xl shadow-lg flex flex-col items-center backdrop-blur-sm">
                {/* Spinner */}
                <svg
                    className="animate-spin h-10 w-10 text-blue-600 mb-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                    ></circle>
                    <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                </svg>
                <p className="text-gray-700 font-semibold">Loading...</p>
            </div>
        </div>
    )
}

export default LoadingModal