import React from 'react'
import helloGif from "../../../components/gif/hello.gif";

const HelloCard = () => {
    return (
        <div className="bg-amber-200 shadow-[0_0_10px_rgba(0,0,0,0.4)] rounded-lg ml-4 relative">
            <div
                className="h-full bg-slate-800 rounded-lg relative flex items-start px-2"
                style={{
                    clipPath: "polygon(0 0, 100% 0, 70% 100%, 0 100%)",
                }}
            >
                {/* GIF on the left */}
                <img
                    src={helloGif}
                    alt="Hello"
                    className="w-30 h-auto rounded-md"
                />

                {/* Text on the right */}
                <h3 className="text-white font-semibold mt-9 max-w-40 wrap-break-word">
                    view our dashboard for all of your data status!
                </h3>
            </div>
            <div className="absolute bottom-2 right-2">
                <h4 className='font-extralight'>Hi!😊</h4>
            </div>
        </div>

    )
}

export default HelloCard