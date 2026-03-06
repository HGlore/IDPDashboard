import { Routes, Route, Navigate, Outlet } from 'react-router-dom'
import { use, useEffect, useState } from 'react';
import ProtectedRoute from './components/ProtectedRoute';
import SideNavBar from './components/sidebar/SideBar';
import Dashboard from './pages/dashboard/dashboard';
import LoginPage from './pages/LoginPage';
import { CheckAuth } from './services/AuthService.js';
import LoadingModal from './components/LoadingModal';
import DatePicker from './components/header/components/DatePicker';
import EntrySideNavBar from './components/sidebar/components/entry/EntrySideBar';
import EntryPage from './pages/entry/EntryPage';
import useIdleTimeout from "./hooks/useIdleTimeout.js";
import { LogoutService } from "./services/LogoutService.js";
import { Duration } from "./utils/Duration.js";
import { Toaster } from "./utils/Toast.js";
import { API } from './utils/API.js';

const Routing = () => {
    const today = new Date().toISOString().split("T")[0];
    const [date, setDate] = useState(today);

    const [loggedIn, setLoggedin] = useState(false);
    const [loading, setloading] = useState(true);
    const [userData, setUserData] = useState(null);
    const [entryData, setEntryData] = useState(null);
    const [dashboardData, setDashboardData] = useState(null);

    {/* useEffect(() => {
       CheckAuth().then(({ loggedIn }) => {
       setLoggedin(loggedIn);
       setloading(false);
      });
   }, []);*/
    }

    useEffect(() => {
        const check = async () => {
            if (!API.LOCAL_URL || !API.BASE_URL) {
                setLoggedin(false);
                setloading(false);
            } else {
                const { loggedIn, user } = await CheckAuth();

                setLoggedin(loggedIn);

                if (loggedIn && user !== null) {
                    setUserData(user); // restore userData on refresh
                } else {
                    setUserData(null);
                }

                setloading(false);
            }
        };

        check();
    }, []);

    const handleLogout = async () => {
        try {
            await LogoutService();
            window.location.reload();
        } catch (err) {
            /* console.error("Logout error:", err); */
            alert("Logout failed!");
        }
    }

    useIdleTimeout(handleLogout, Duration.minutes(10), loggedIn);

    return (<>
        <Toaster />
        <Routes>
            <Route path="/" element={loggedIn ? (<Navigate to="/dashboard" replace />) : (
                <LoginPage setUserData={setUserData} setLoggedIn={setLoggedin} />)} />
            <Route element={<ProtectedRoute loggedIn={loggedIn} />}>
                {userData?.role === "Entry" ? (
                    <Route element={<EntrySideNavBar userData={userData} date={date} setDate={setDate} />}>
                        <Route path="/dashboard" element={<Dashboard date={date} userData={userData} />} />
                        <Route path='/entry' element={<EntryPage />} />
                    </Route>) : (<Route element={<SideNavBar userData={userData} date={date} setDate={setDate} />}>
                        <Route path="/dashboard" element={<Dashboard date={date} userData={userData}/>} />
                    </Route>)}
            </Route>
        </Routes>
        {loading && <LoadingModal />}
    </>)
}

export default Routing
