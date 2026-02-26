import {useState, useEffect} from "react";
import {Tooltip, PieChart, Pie, Cell, ResponsiveContainer} from "recharts";

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const PieStatistics = ({inserted, queue, entered}) => {
    const [pieData, setPieData] = useState([
        {name: 'Inserted', value: inserted},
        {name: 'Queue', value: queue},
        {name: 'Entered', value: entered},
    ]);

    // Update pieData whenever date change
    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setPieData([
            {name: 'Inserted', value: inserted},
            {name: 'Queue', value: queue},
            {name: 'Billed', value: entered},
        ]);
    }, [inserted, queue, entered]);

    return (
        <div
            className="bg-white shadow-[0_0_10px_rgba(0,0,0,0.4)] rounded-lg flex items-center justify-center pt-2 ml-4">
            {/* Pie Chart */}
            <div className="bg-white rounded-lg w-full">
                <h1 className="text-2xl font-bold mb-2">Pie Chart</h1>
                <h2 className="text-xl font-semibold">Billed Distribution</h2>
                <div className="min-w-0 min-h-0 w-auto h-62">
                    <ResponsiveContainer width={"100%"} height={"100%"}>
                        <PieChart>
                            <Pie
                                data={pieData}
                                dataKey="value"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius={80}
                                label
                            >
                                {pieData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
                                ))}
                            </Pie>
                            <Tooltip/>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default PieStatistics