import React from "react";
import {
    MdSearch,
    MdArrowForward
} from "react-icons/md";

const Search = () => {
    return (
        <div className="flex-1">
            <div className="relative">
                <MdSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-700" />
                <input
                    type="text"
                    placeholder="Search..."
                    className="
                    bg-white text-slate-700 placeholder-slate-700
                    w-full pl-10 pr-8 py-1.5 rounded-md
                    focus:outline-none
                    focus:border-slate-500
                    focus:ring-2 focus:ring-slate-500
                    border border-slate-300
                    "
                />
                <button className="absolute right-1 top-1/2 transform -translate-y-1/2 text-slate-700 p-1.5
                 cursor-pointer hover:text-slate-400">
                    <MdArrowForward />
                </button>
            </div>
        </div>
    );
};

export default Search;
