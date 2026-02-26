import { useState, useEffect } from "react";
import {
    LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid,
    Label,
    ResponsiveContainer
} from "recharts";

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const LineStatistics = () => {
    const [lineData, setLineData] = useState([
        { time: "12 AM", sales: 200 },
        { time: "1 AM", sales: 400 },
        { time: "2 AM", sales: 300 },
        { time: "3 AM", sales: 450 },
        { time: "4 AM", sales: 500 },
        { time: "5 AM", sales: 500 },
        { time: "6 AM", sales: 500 },
        { time: "7 AM", sales: 500 },
        { time: "8 AM", sales: 500 },
        { time: "9 AM", sales: 500 },
        { time: "10 AM", sales: 500 },
        { time: "11 AM", sales: 500 },
        { time: "12 PM", sales: 500 },
        { time: "1 PM", sales: 500 },
        { time: "2 PM", sales: 300 },
        { time: "3 PM", sales: 450 },
        { time: "4 PM", sales: 500 },
        { time: "5 PM", sales: 500 },
        { time: "6 PM", sales: 500 },
        { time: "7 PM", sales: 500 },
        { time: "8 PM", sales: 500 },
        { time: "9 PM", sales: 500 },
        { time: "10 PM", sales: 500 },
        { time: "11 PM", sales: 500 },
    ]);

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
                            <Line type="monotone" dataKey="sales" stroke="#8884d8" strokeWidth={2} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default LineStatistics

