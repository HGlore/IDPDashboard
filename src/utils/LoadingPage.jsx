const LoadingPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">

                <div className="w-10 h-10 border-4 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>

                <p className="text-gray-600 text-sm font-medium">
                    Loading entry...
                </p>

                <div className="mt-4 w-[500px] bg-white rounded-xl shadow-md p-5 space-y-3 animate-pulse">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                </div>

            </div>
        </div>
    );
};

export default LoadingPage;