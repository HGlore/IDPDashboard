import {useState, useEffect} from "react";
import {MdAddPhotoAlternate, MdAssignmentTurnedIn, MdOutlineImage} from "react-icons/md";
import TopCard from "./components/TopCard";
import {ImagesCountStatus} from "../../services/ImagesCountStatus";
import {DateFormatter} from "../../utils/DateFormatter.js";
import LineStatistics from "./components/LineStatistics";
import PieStatistics from "./components/PieStatistics";
import HelloCard from "./components/HelloCard";

const Dashboard = ({ /*userData,*/ date}) => {
    const [imageCounts, setImageCounts] = useState({
        totalQueue: 0,
        newImages: 0,
        billedImages: 0,
    });

    useEffect(() => {
        const fetchCounts = async () => {
            try {
                const formattedDate = DateFormatter(date);
                const data = await ImagesCountStatus(formattedDate);
                setImageCounts(data);
            } catch (err) {
                console.error("Error fetching image counts:", err);
            }
        };
        fetchCounts();
    }, [date]);

    return (
        <div className="w-full gap-2 text-center">
            <div className="w-full bg-white p-2 shadow-[0_0_15px_rgba(0,0,0,0.4)] rounded-sm">

                {/* Main Layout (responsive columns) */}
                <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-4">

                    {/* LEFT CONTENT */}
                    <div className="grid col-span-2 gap-4">

                        {/* Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 p-2">
                            <TopCard icon={MdAddPhotoAlternate} value={imageCounts.newImages} name="New Image(s)"/>
                            <TopCard icon={MdOutlineImage} value={imageCounts.totalQueue} name="Total Queue"/>
                            <TopCard icon={MdAssignmentTurnedIn} value={imageCounts.billedImages}
                                     name="Billed Image(s)"/>
                        </div>

                        {/* Line Chart */}
                        <div className="w-full">
                            <LineStatistics/>
                        </div>
                    </div>

                    {/*  RIGHT CONTENT */}
                    <div className="grid lg:col-span-1 md:col-span-1 sm:col-span-2 xsm-grid-cols-span-2 gap-4">

                        <HelloCard/>

                        <PieStatistics
                            inserted={imageCounts.newImages}
                            queue={imageCounts.totalQueue}
                            entered={imageCounts.billedImages}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
