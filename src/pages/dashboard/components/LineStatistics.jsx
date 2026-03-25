import { useState, useEffect } from "react";
import { eachHourOfInterval, format } from "date-fns"
import {
    LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid,
    Label,
    ResponsiveContainer
} from "recharts";

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const LineStatistics = ({ billedIntervalList }) => {

    const intervals = eachHourOfInterval({
        start: new Date(2026, 2, 19, 0, 0, 0),
        end: new Date(2026, 2, 19, 23, 59, 0),
    }, { step: 1 });

    const formattedIntervals = intervals.map(date =>
        format(date, 'h a')
    );

    const lineData = formattedIntervals.map(i => {
        return { time: i, billed: i === billedIntervalList?.time ? billedIntervalList?.billed : 0 }
    })

    /* const [lineData, setLineData] = useState([
        { time: "12 AM", count: billed[0] || 0 },
        { time: "1 AM", count: billed[1] || 0 },
        { time: "2 AM", count: billed[2] || 0 },
        { time: "3 AM", count: billed[3] || 0 },
        { time: "4 AM", count: billed[4] || 0 },
        { time: "5 AM", count: billed[5] || 0 },
        { time: "6 AM", count: billed[6] || 0 },
        { time: "7 AM", count: billed[7] || 0 },
        { time: "8 AM", count: billed[8] || 0 },
        { time: "9 AM", count: billed[9] || 0 },
        { time: "10 AM", count: billed[10] || 0 },
        { time: "11 AM", count: billed[11] || 0 },
        { time: "12 PM", count: billed[12] || 0 },
        { time: "1 PM", count: billed[13] || 0 },
        { time: "2 PM", count: billed[14] || 0 },
        { time: "3 PM", count: billed[15] || 0 },
        { time: "4 PM", count: billed[16] || 0 },
        { time: "5 PM", count: billed[17] || 0 },
        { time: "6 PM", count: billed[18] || 0 },
        { time: "7 PM", count: billed[19] || 0 },
        { time: "8 PM", count: billed[20] || 0 },
        { time: "9 PM", count: billed[21] || 0 },
        { time: "10 PM", count: billed[22] || 0 },
        { time: "11 PM", count: billed[23] || 0 },
    ]); */


    return (
        <div className="bg-white shadow-[0_0_10px_rgba(0,0,0,0.4)] rounded-lg flex items-center justify-center pt-4 ml-3 h-full">
            {/* Line Chart */}
            <div className="bg-white shadow-md rounded-lg w-full h-full pb-2 pr-3">
                <h1 className="text-2xl font-bold">Dashboard</h1>
                <h2 className="text-xl font-semibold mb-2">Billed Line Chart</h2>
                <div className="min-w-0 w-full xsm-height sm:h-72 min-h-0">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={lineData}>
                            <XAxis dataKey="time" >
                                <Label className="font-medium" value="Time" offset={-5} position="insideBottom" />
                            </XAxis>

                            <YAxis >
                                <Label
                                    className="font-medium"
                                    offset={50}
                                    value="Billed Count(s)"
                                    angle={-90}
                                    position="insideRight"
                                    style={{ textAnchor: "middle" }}
                                />
                            </YAxis>
                            <Tooltip />
                            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                            <Line type="monotone" dataKey="billed" stroke="#8884d8" strokeWidth={2} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default LineStatistics
