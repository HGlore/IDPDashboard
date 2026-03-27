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
        const billedInterval = billedIntervalList?.find(b => b.time === i);

        return { time: i, billed: billedInterval ? billedInterval.billed : 0 };
    })

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
