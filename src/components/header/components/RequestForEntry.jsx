import { useEffect, useState } from "react";
import * as requestAPI from '../../../api/requestAPI'
import { sweetShowMessage } from "../../../utils/ShowAlert";

const RequestForEntry = ({ setCanRequest: canRequest }) => {

    const requestHandle = async () => {
        const result = await sweetShowMessage("question", "Request!",
            "Do you want to request?", "Request", "Cancel");

        if (result.isConfirmed) {
            try {
                await requestAPI.assignEntries();
                window.location.reload();

            } catch (error) {
                console.log("Error Baiii!!!!");
                throw new Error(error.requestAPI?.data?.message || error.message);
            }
        }
    };

    return (
        <button
            onClick={requestHandle}
            disabled={!canRequest}
            className={`
        relative px-6 py-3 mr-3 font-semibold text-white rounded-full
        transition-all duration-300
        ${canRequest
                    ? "bg-linear-to-r from-slate-600 to-slate-800 hover:from-slate-900 hover:to-slate-600 shadow-lg hover:shadow-xl"
                    : "bg-gray-400 cursor-not-allowed opacity-60"}
        focus:outline-none
        transform hover:-translate-y-1
      `}
        >
            {canRequest ? "Request" : "Request Not Available"}
            {canRequest && (
                <span className="absolute inset-0 rounded-full bg-white opacity-0 hover:opacity-10 transition-opacity"></span>
            )}
        </button>
    );
};

export default RequestForEntry;
