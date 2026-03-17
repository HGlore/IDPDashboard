import { Routes, Route, Navigate, Outlet } from 'react-router-dom'
import { use, useEffect, useState } from 'react';
import ProtectedRoute from './components/ProtectedRoute';
import SideNavBar from './components/sidebar/SideBar';
import Dashboard from './pages/dashboard/dashboard';
import LoginPage from './pages/LoginPage';
import LoadingModal from './components/LoadingModal';
import DatePicker from './components/header/components/DatePicker';
import EntrySideNavBar from './components/sidebar/components/entry/EntrySideBar';
import EntryPage from './pages/entry/EntryPage';
import useIdleTimeout from "./hooks/useIdleTimeout.js";
import * as authAPI from "./api/authAPI.js";
import { Duration } from "./utils/Duration.js";
import { Toaster } from "./utils/Toast.js";
import { API_ENV } from './utils/API.js';
import * as requestAPI from './api/requestAPI.js'

const Routing = () => {
    const today = new Date().toISOString().split("T")[0];
    const [date, setDate] = useState(today);
    const [ongoingDate, setOngoingDate] = useState(null);
    const [canRequest, setCanRequest] = useState(false);

    const [loggedIn, setLoggedin] = useState(false);
    const [loading, setloading] = useState(true);
    const [userData, setUserData] = useState(null);
    const [entryData, setEntryData] = useState(null);
    const [dashboardData, setDashboardData] = useState(null);

    localStorage.setItem("date", date);


    {/* useEffect(() => {
       CheckAuth().then(({ loggedIn }) => {
       setLoggedin(loggedIn);
       setloading(false);
      });
   }, []);*/
    }

    useEffect(() => {
        const check = async () => {
            if (!API_ENV.LOCAL_URL || !API_ENV.BASE_URL) {
                setLoggedin(false);
                setloading(false);
            } else {
                const { loggedIn, user } = await authAPI.checkAuth();

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

    useEffect(() => {
        if (!loggedIn) return;

        checkForRequest();
    }, [loggedIn, date]);

    const checkForRequest = async () => {
        try {
            const response = await requestAPI.ongoingEntries();

            setCanRequest(!response?.ongoing);
            setOngoingDate(response?.storedDate);

        } catch (error) {
            console.error("Check request failed:", error.response?.data?.message || error.message);
        }
    };

    const handleLogout = async () => {
        try {
            await authAPI.Logout();
            window.location.reload();
        } catch (err) {
            window.location.reload();
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
                    <Route element={<EntrySideNavBar userData={userData} date={date} setDate={setDate} canRequest={canRequest} />}>
                        <Route path="/dashboard" element={<Dashboard date={date} userData={userData} canRequest={canRequest} ongoingDate={ongoingDate} todaysDate={today} />} />
                        <Route path='/entry' element={<EntryPage canRequest={canRequest} date={date} ongoingDate={ongoingDate} todaysDate={today} />} />
                    </Route>) : (<Route element={<SideNavBar userData={userData} date={date} setDate={setDate} />}>
                        <Route path="/dashboard" element={<Dashboard date={date} userData={userData} canRequest={canRequest} />} />
                        <Route path='/entry' />
                    </Route>)}
            </Route>
        </Routes>
        {loading && <LoadingModal />}
    </>)
}

export default Routing
