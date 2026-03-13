import { useRef } from "react";
import { DateFormatter } from "../../../utils/DateFormatter";

const DatePicker = ({ date, setDate }) => {
    const inputRef = useRef(null);

    const setDateHandle = (dateValue) => {
        setDate(DateFormatter(date));
        const formattedDate = DateFormatter(dateValue);
        localStorage.setItem("date", formattedDate);
    };

    return (
        <div>
            <input
                ref={inputRef}
                type="date"
                value={date}
                onChange={(e) => setDateHandle(e.target.value)}
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
