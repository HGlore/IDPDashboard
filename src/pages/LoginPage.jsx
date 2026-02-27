import React, {useState} from "react"
import {useNavigate} from "react-router-dom"
import {LoginService} from "../services/LoginSevice";
import {toastShowError, toastShowSuccess} from "../utils/Toast.js";
import {getProfileImage} from "../services/userProfile.js";

const LoginPage = ({setUserData, setLoggedIn}) => {
    const navigate = useNavigate();
    const [companyID, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {

        if (!companyID || !password) {
            toastShowError("Please fill both username & password.");
            return;
        }

        setLoading(true);

        try {
            const userData = await LoginService(companyID, password);

            getProfileImage().then(async res => {
                if (res.success) {
                    console.log(userData);
                    setUserData(userData);
                    setLoggedIn(true);
                    toastShowSuccess("Logged In!.");
                    navigate("/dashboard");
                } else {
                    console.error("Login error!");
                    toastShowError("Login failed: Something Went Wrong!");
                }
            });

        } catch (err) {
            console.error("Login error:", err);
            toastShowError("Login failed: User not found!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-100 to-gray-200">
            <div className="w-96 bg-white p-8 rounded-2xl shadow-xl shadow-gray-300">
                {/* Header with Icon */}
                <h2 className="text-3xl font-bold text-center mb-8 flex items-center justify-center gap-3 text-gray-800">
                    <img src="/dataMonitoringIcon.png" alt="Icon" className="w-8 h-8"/>
                    IDP
                </h2>

                {/* Username Input */}
                <div className="mb-6">
                    <label className="block text-gray-700 font-semibold mb-1">
                        Username <span className="text-orange-500">●</span>
                    </label>
                    <input
                        type="text"
                        value={companyID}
                        onChange={(e) => setUsername(e.target.value.toUpperCase())}
                        placeholder="Enter your username"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    />
                </div>

                {/* Password Input */}
                <div className="mb-6">
                    <label className="block text-gray-700 font-semibold mb-1">
                        Password <span className="text-orange-500">●</span>
                    </label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onKeyDown={async (e) => {
                            if (e.key === "Enter") {
                                await handleLogin();
                            }
                        }}
                        placeholder="Enter your password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    />
                </div>

                {/* Sign In Button */}
                <button
                    onClick={handleLogin}
                    disabled={loading}
                    className={`w-full py-3 rounded-lg text-white font-semibold bg-blue-600 shadow-md 
                    hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5 
                    active:scale-95 transition-all duration-200
                    ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                    {loading ? "Logging in..." : "Sign In"}
                </button>

                {/* Optional: Forgot password or extra links */}
                {/*<div className="mt-4 text-center text-sm text-gray-500">
                    Forgot your password? <a href="#" className="text-blue-500 hover:underline">Reset</a>
                </div>*/}

            </div>
        </div>
    );
};

export default LoginPage;
