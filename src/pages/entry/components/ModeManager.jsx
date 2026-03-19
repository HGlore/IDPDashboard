import { useNavigate } from "react-router-dom";
import { sweetShowMessage } from "../../../utils/ShowAlert";
import { returnedData } from "./ReturnedData";

const ModeManager = ({ mode, setMode, entry, setEntry, setIsBrowse }) => {
    const navigate = useNavigate();

    const handleChangeMode = async (m) => {
        const backup_entry = localStorage.getItem("orig_entry");
        console.log("Backup: ", backup_entry)
        console.log("Recieved Entry: ", JSON.stringify(entry))

        if (mode === "Entry" && backup_entry) {
            if (JSON.stringify(entry) === backup_entry) {
                setMode(m);
                setIsBrowse(true);
            } else {
                const result = await sweetShowMessage(
                    "warning",
                    "Notice!",
                    `Discard Entry?`,
                    "Discard",
                    "Cancel"
                );

                if (result.isConfirmed) {
                    setEntry(returnedData(JSON.parse(backup_entry)));
                    setMode(m);
                } else {
                    setIsBrowse(false);
                }
            }
        } else {
            setMode(m);
            setIsBrowse(false);
        }
    }

    return (
        <div className="flex items-center gap-3">
            <label className="font-black text-gray-700">MODE:</label>

            <div className="flex gap-2">
                {["Entry", "Browse"].map((m) => {
                    return (
                        <button
                            key={m}
                            onClick={() => handleChangeMode(m)}
                            className={`px-3 py-0.5 rounded-md border text-sm font-medium transition
                                    ${mode === m
                                    ? "bg-blue-500 text-white border-blue-500"
                                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                                }`}
                        >
                            {m ? m : mode}
                        </button>
                    );
                })}
            </div>
        </div>
    )
}

export default ModeManager