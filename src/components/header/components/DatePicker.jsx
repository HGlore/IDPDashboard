import { useRef } from "react";

const DatePicker = ({ date, setDate }) => {
    const inputRef = useRef(null);

    return (
        <div>
            <input
                ref={inputRef}
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                // onKeyDown={(e) => e.preventDefault()}
                // onPaste={(e) => e.preventDefault()}
                onClick={() => inputRef.current?.showPicker()}
                className="
          bg-white text-slate-700
          px-3 py-1.5 rounded-md
          border border-slate-300
          cursor-pointer
          focus:outline-none
          focus:ring-2 focus:ring-slate-500
        "
            />
        </div>
    );
};

export default DatePicker;
